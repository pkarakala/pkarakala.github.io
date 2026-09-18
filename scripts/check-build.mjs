import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, relative, dirname, join } from 'node:path';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { parse } from 'yaml';

const root = resolve('dist');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const hash = data => createHash('sha256').update(data).digest('hex');
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(join(dir, e.name)) : join(dir, e.name)))).flat();
}
const output = await files(root);
const htmlFiles = output.filter(file => file.endsWith('.html'));
const documents = new Map(await Promise.all(htmlFiles.map(async file => [file, load(await readFile(file, 'utf8'))])));
const titles = new Set();
const descriptions = new Set();
const site = 'https://pkarakala.github.io';
let internalLinks = 0;
for (const [file, $] of documents) {
  const name = relative(root, file);
  assert($('html').attr('lang') === 'en', `${name}: missing document language`);
  assert($('h1').length === 1 && $('main').length === 1, `${name}: expected one h1 and main`);
  assert($('script:not([type="application/ld+json"])').length === 0, `${name}: unexpected client JavaScript`);
  const title = $('title').text();
  const description = $('meta[name="description"]').attr('content');
  assert(title && !titles.has(title), `${name}: missing/duplicate title`);
  assert(description && !descriptions.has(description), `${name}: missing/duplicate description`);
  titles.add(title); descriptions.add(description);
  const ids = $('[id]').map((_, e) => $(e).attr('id')).get();
  assert(ids.length === new Set(ids).size, `${name}: duplicate IDs`);
  assert($('a.skip-link[href="#main"]').length === 1, `${name}: missing skip link`);
  assert($('link[rel="canonical"]').attr('href')?.startsWith(site), `${name}: incorrect canonical`);
  for (const image of $('img').toArray()) {
    assert($(image).attr('alt') !== undefined && $(image).attr('width') && $(image).attr('height'), `${name}: image needs alt text and dimensions`);
  }
  const references = $('[href], [src]').map((_, e) => $(e).attr('href') ?? $(e).attr('src')).get();
  for (const e of $('[srcset]').toArray()) {
    references.push(...$(e).attr('srcset').split(',').map(item => item.trim().split(/\s+/)[0]));
  }
  for (const ref of references) {
    if (/^(mailto:|tel:|data:)/.test(ref)) continue;
    const url = new URL(ref, `${site}/${name}`);
    if (url.origin !== site) continue;
    internalLinks++;
    let target = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) target = join(target, 'index.html');
    assert(target.startsWith(root + '/'), `${name}: path escapes output: ${ref}`);
    assert(existsSync(target), `${name}: missing target ${ref}`);
    if (url.hash && documents.has(target)) {
      assert(documents.get(target)('[id]').toArray().some(e => documents.get(target)(e).attr('id') === decodeURIComponent(url.hash.slice(1))), `${name}: broken fragment ${ref}`);
    }
  }
  for (const anchor of $('a[href]').toArray()) {
    const href = $(anchor).attr('href');
    if (/resume.*\.pdf$/.test(href)) assert(href === '/assets/pdfs/resume.pdf', `${name}: alternate resume is promoted`);
  }
}
for (const file of output.filter(file => file.endsWith('.css') && !file.endsWith('/styles.css'))) {
  const css = await readFile(file, 'utf8');
  for (const [, path] of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    if (/^(data:|https?:)/.test(path)) continue;
    const target = path.startsWith('/') ? resolve(root, '.' + path) : resolve(dirname(file), path);
    assert(existsSync(target), `Missing CSS asset: ${path}`);
  }
}
const inventory = JSON.parse(await readFile('docs/migration-inventory.json', 'utf8'));
for (const [url, originalHash] of Object.entries(inventory.assets)) {
  const path = resolve(root, '.' + url);
  assert(existsSync(path), `Legacy asset missing: ${url}`);
  if (existsSync(path) && url !== '/assets/pdfs/resume.pdf') assert(hash(await readFile(path)) === originalHash, `Legacy asset changed: ${url}`);
}
for (const url of [...Object.keys(inventory.pages), '/assets/pdfs/resume.html']) assert(existsSync(resolve(root, '.' + url)), `Legacy page missing: ${url}`);
const resume = JSON.parse(await readFile('docs/resume-source.json', 'utf8'));
assert(hash(await readFile(join(root, resume.publicUrl))) === resume.sha256, 'Canonical resume differs from approved PDF');
for (const file of output.filter(file => file.endsWith('.pdf'))) assert((await readFile(file)).subarray(0, 5).toString() === '%PDF-', `Invalid PDF: ${file}`);
const home = documents.get(join(root, 'index.html'));
const normalize = text => text.replace(/\s+/g, ' ').trim();
const expectedAbout = normalize((await readFile('src/data/about.md', 'utf8')).replace(/\*/g, ''));
assert(normalize(home('.about-copy > p').map((_, e) => home(e).text()).get().join(' ')) === expectedAbout, 'About copy changed during rendering');
assert(!/graduation|December 2027|Fall 2027/i.test(home('main').text()), 'Graduation date or unapproved wording in homepage');
assert(home('#research').length && home('#skills').length && home('#labs').length, 'Legacy homepage anchors missing');
assert(!existsSync(join(root, 'INTERVIEW-PREP.html')) && !existsSync(join(root, 'career.md')) && !existsSync(join(root, 'cqec-ml-decoder')), 'Repository-only material leaked into output');
const archive = documents.get(join(root, 'work.html'));
const archiveLinks = new Set(archive('a[href]').map((_, e) => archive(e).attr('href')).get());
const selectedWork = home('#work article.project-row').map((_, e) => home(e).attr('id')).get();
assert(JSON.stringify(selectedWork) === JSON.stringify(['kernel-relay', 'continuous-qec', 'ml-systems-lab', 'photonic-fiber']), 'Selected work order changed');
assert(home('#kernel-relay a[href="https://github.com/pkarakala/kernel-relay"]').length === 2, 'KernelRelay repository link missing from homepage');
const lab = archive('article#ml-systems-lab');
for (const [slug, url] of Object.entries({
  'tensor-descent': 'https://github.com/pkarakala/FX2Accel',
  'kernel-forge': 'https://github.com/pkarakala/KernelForge',
  'accel-sim': 'https://github.com/pkarakala/AccelSim',
})) {
  assert(archive(`article#${slug}`).length === 0, `${slug} duplicated as a work card`);
  assert(lab.find(`#${slug}`).length === 1, `${slug} legacy fragment missing`);
  assert(lab.find(`.related-links a[href="${url}"]`).length === 1, `${slug} repository link missing from ML Systems Lab`);
}
const legacyEvidence = inventory.pages['/projects.html'].links.filter(url => /github\.com\/pkarakala\//.test(url) || url.endsWith('.pdf'));
for (const url of legacyEvidence) assert(archiveLinks.has(url.startsWith('assets/') ? '/' + url : url), `Evidence missing from archive: ${url}`);
let publishedProjects = 0;
for (const file of await files('src/content/work')) {
  if (!file.endsWith('.md')) continue;
  const frontmatter = parse((await readFile(file, 'utf8')).split('---')[1]);
  if (frontmatter.draft) assert(!archive('article').toArray().some(e => archive(e).attr('id') === frontmatter.slug), `Draft project leaked: ${file}`);
  else { publishedProjects++; assert(archive('article').toArray().some(e => archive(e).attr('id') === frontmatter.slug), `Project omitted: ${file}`); }
}
assert(archive('article.project-row').length === publishedProjects, 'Archive project count mismatch');
const ece136c = archive('article#quantum-photonics');
const ece136cReports = ece136c.find('.project-actions a[href^="/assets/pdfs/ece136c/"]').map((_, e) => archive(e).attr('href')).get();
assert(archive('article.project-row').filter((_, e) => archive(e).find('.project-meta').text().includes('ECE 136C')).length === 1, 'ECE 136C labs must appear under one work entry');
assert(ece136cReports.length === 8 && new Set(ece136cReports).size === 8, 'ECE 136C entry must link eight distinct lab reports');
assert(ece136c.find('#quantum-optics').length === 1 && ece136c.find('#xanadu-x8').length === 1, 'ECE 136C legacy anchors missing');
let publishedNotes = 0;
for (const file of await files('src/content/notes')) {
  if (!file.endsWith('.md')) continue;
  const frontmatter = parse((await readFile(file, 'utf8')).split('---')[1]);
  const notePath = join(root, 'notes', relative('src/content/notes', file).replace(/\.md$/, '.html'));
  if (frontmatter.draft !== false) assert(!existsSync(notePath), `Draft note leaked: ${file}`);
  else { publishedNotes++; assert(existsSync(notePath), `Published note missing: ${file}`); }
}
assert(existsSync(join(root, 'notes.html')) === (publishedNotes > 0), 'Notes index must exist only with published notes');
assert(Boolean(home('nav a[href="/notes.html"]').length) === (publishedNotes > 0), 'Notes navigation does not match publication state');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Build verified: ${htmlFiles.length} HTML pages, ${publishedProjects} projects, ${internalLinks} local references, ${output.filter(f => f.endsWith('.pdf')).length} PDFs. Legacy assets, approved About copy, resume integrity, metadata, and draft exclusion passed.`);
