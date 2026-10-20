import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const lektionen = await getCollection('lektionen');
  const base = import.meta.env.BASE_URL;

  const statisch = ['', 'module/', 'fehler/', 'quiz/', 'wiederholung/', 'lesezeichen/', 'zertifikat/'];
  const lektionsUrls = lektionen.map(l => ({
    pfad: `lektionen/${l.id}/`,
    lastmod: typeof l.data.last_verified === 'string' ? l.data.last_verified : undefined,
  }));

  const eintraege = [
    ...statisch.map(p => ({ pfad: p, lastmod: undefined as string | undefined })),
    ...lektionsUrls,
  ];

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
