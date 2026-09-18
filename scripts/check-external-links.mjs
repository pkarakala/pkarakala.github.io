import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { load } from 'cheerio';
async function files(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(e => e.isDirectory() ? files(join(dir, e.name)) : join(dir, e.name)))).flat();
}
const urls = new Set();
for (const path of (await files('dist')).filter(p => p.endsWith('.html'))) {
  const $ = load(await readFile(path, 'utf8'));
  $('a[href^="https://"]').each((_, e) => urls.add($(e).attr('href')));
}
let failed = 0;
for (const url of urls) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'PortfolioLinkCheck/1.0' } });
    console.log(`${response.status} ${url}${response.url !== url ? ` → ${response.url}` : ''}`);
    await response.body?.cancel();
    if (!response.ok) failed++;
  } catch (error) { failed++; console.log(`UNVERIFIED ${url}: ${error.message}`); }
}
console.log(`${urls.size - failed}/${urls.size} external destinations returned success. Non-success can include bot protection; inspect those manually.`);
process.exitCode = failed ? 1 : 0;
