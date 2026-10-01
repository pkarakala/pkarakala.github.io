// Derive the icon from the original pixels; never redraw or trace the mark.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { brand } from '../src/data/brand.ts';

const { data, info } = await sharp(`public${brand.logo}`).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const ink = 255 - Math.round(.2126 * data[i] + .7152 * data[i + 1] + .0722 * data[i + 2]);
  data[i + 3] = Math.round(data[i + 3] * ink / 255);
  data[i] = 23; data[i + 1] = 58; data[i + 2] = 56;
}
const png = await sharp(data, { raw: info }).trim({ background: '#00000000', threshold: 8 })
  .resize(60, 60, { fit: 'contain', background: '#00000000' })
  .extend({ top: 2, bottom: 2, left: 2, right: 2, background: '#00000000' }).png().toBuffer();
// A pale backing keeps the small mark legible in both light and dark browser tabs.
await writeFile('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#edf1f2"/><image width="64" height="64" href="data:image/png;base64,${png.toString('base64')}"/></svg>\n`);
console.log('Favicon generated from the original house-and-circuit mark.');
