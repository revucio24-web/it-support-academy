# IT-Support-Academy

Deutschsprachiger Kurs für IT-Support Level 1 & 2 — 21 Module, 90 Quizfragen, 72 Fehlerfälle, Homelab-Praxis, Ticket-Simulation und Prüfungssimulation.

**Live:** https://revucio24-web.github.io/it-support-academy/

## Stack

- **Astro 7** (Static Output), kein Backend, kein Login
- **Markdown** als Inhaltsquelle (`src/content/lektionen/*.md`), Schema via Zod in `src/content.config.ts`
- **JSON-Feed** (`src/data/lektionen.json`) für Quiz-, Fehler- und Ticket-Komponenten, erzeugt aus dem Markdown
- **Fortschritt, Lesezeichen, Prüfungsergebnisse** in `localStorage` (keine Serverübertragung)

## Struktur

```
src/
├── content/lektionen/*.md     # 21 Lektionen (Frontmatter: title, level, module, last_verified, sources)
├── data/lektionen.json        # generiert von scripts/parse_lektionen.py
├── components/                # FehlerKarte, Quiz, TicketSzenario
├── layouts/Base.astro         # Navigation, Suche, Theme, Fortschrittsbalken
└── pages/
    ├── index.astro            # Startseite
    ├── module/                # Modulübersicht
    ├── lektionen/[slug].astro # Lektionsseite (getStaticPaths)
    ├── fehler/                # Fehlerdatenbank
    ├── quiz/                  # Quiz pro Lektion
    ├── pruefung/              # Prüfungssimulation (20/40 Fragen, Timer, Auswertung)
    ├── wiederholung/          # falsch beantwortete Fragen
    ├── lesezeichen/           # gemerkte Fehlerkarten
    ├── zertifikat/            # Abschlusszertifikat (druckbar)
    ├── 404.astro
    └── sitemap.xml.ts
```

## Befehle

```bash
npm install
npm run dev        # http://localhost:4321/it-support-academy/
npm run build      # statischer Build nach dist/
npm run preview
```

## Neue Lektion anlegen

1. `src/content/lektionen/modul-N-name.md` erstellen mit Frontmatter:

   ```yaml
   ---
   title: "Modul N: Titel"
   level: 1        # 1 oder 2
   module: N
   last_verified: YYYY-MM-DD
   windows_version: "Windows 11 24H2"
   sources:
     - url: "https://learn.microsoft.com/..."
       abrufdatum: YYYY-MM-DD
   ---
   ```

2. Pflichtabschnitte: `## Lernziele`, `## Theorie`, `## Praxis-Übung`, `## Berühmte Fehler + Lösungen` (mind. 3), `## Mini-Quiz` (5 Fragen), `## Ticket-Szenario`
3. `python scripts/parse_lektionen.py` ausführen → aktualisiert `src/data/lektionen.json`
4. Build prüfen — Lektion erscheint automatisch in Modulübersicht, Suche, Prüfungspool und Sitemap

## Deploy

Push auf `master` → GitHub Actions (`.github/workflows/deploy.yml`) baut und veröffentlicht auf den Branch `gh-pages`. Kein manuelles Deploy nötig.

Status prüfen:

```bash
gh run list --repo revucio24-web/it-support-academy --limit 3
gh api repos/revucio24-web/it-support-academy/pages --jq '.status'
```

## Qualitätsregeln (verbindlich)

- Nur belegbare Aussagen; jede Lektion führt Quellen mit Abrufdatum
- Befehle im Homelab prüfen, sonst als `UNGEPRÜFT` markieren
- `last_verified` nur setzen, wenn die Lektion tatsächlich gegengeprüft wurde
- Fehlercodes, Menüpfade und Versionsangaben nicht raten

## Hinweis zum `base`-Pfad

Die Seite läuft unter `/it-support-academy/`. Alle internen Links müssen `${import.meta.env.BASE_URL}` verwenden — hartkodierte `/pfad`-Links führen auf GitHub Pages zu 404.
