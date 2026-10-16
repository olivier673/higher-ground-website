// Static sitemap endpoint — builds to /sitemap.xml. No extra dependency.
// Add new routes here as pages are created (e.g. FR pages, /blog).
const PAGES = [
  '',
  'about',
  'performance-lab',
  'leadership',
  'method',
  'journal',
  'enquire',
  'privacy',
  'fr',
];

export function GET({ site }) {
  const base = (site ? site.href : 'https://higher-ground.fr/').replace(/\/$/, '');
  const urls = PAGES.map((p) => {
    const loc = p === '' ? `${base}/` : `${base}/${p}/`;
    return `<url><loc>${loc}</loc></url>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
