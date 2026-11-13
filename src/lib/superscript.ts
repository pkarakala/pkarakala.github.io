const map: Record<string, string> = { '⁻': '−', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
/** Splits text into plain and superscript runs, so display faces without superscript glyphs can use <sup>. */
export function superscriptRuns(text: string) {
  return text.split(/([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/).filter(Boolean).map(part => /^[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+$/.test(part) ? { sup: true, text: [...part].map(c => map[c]).join('') } : { sup: false, text: part });
}
