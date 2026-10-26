/**
 * Wandelt einen beliebigen Wert in einen HTML-sicheren String um.
 *
 * Grund: Mehrere Stellen im Projekt bauen Markup per String-Konkatenation in
 * `innerHTML` (Suchergebnisse, Wiederholungsliste). Astro escaped `{expression}`
 * im Markup automatisch — `innerHTML` jedoch nicht. Kommt in Inhalten Spitzklammern
 * vor (z. B. `ping <Gateway>`), entsteht sonst eine HTML-Injection, die mit
 * `<img src=x onerror=…>` zu ausführbarem XSS ausgebaut werden kann.
 *
 * Reihenfolge ist wichtig: `&` zuerst, sonst werden die Entities der folgenden
 * Ersetzungen selbst wieder escaped.
 */
export function escapeHtml(wert: unknown): string {
  return String(wert ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
