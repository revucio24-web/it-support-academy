import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL;

  const statisch = ['', 'module/', 'fehler/', 'quiz/', 'wiederholung/', 'lesezeichen/', 'zertifikat/'];

  // Hinweis: Einzelne Lektionsseiten ([...slug].astro) existieren aktuell nicht —
  // sie wurden entfernt, weil `lektion.render()` unter Astro 7 einen Build-Fehler
  // verursacht. Solange die Route fehlt, duerfen hier keine lektionen/-URLs stehen,
  // sonst wirbt die Sitemap fuer 404er.
  const eintraege = statisch.map(p => ({ pfad: p, lastmod: undefined as string | undefined }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${eintraege
  .map(e => {
    const loc = new URL(base + e.pfad, site).href;
    const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
  })
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
