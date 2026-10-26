#!/usr/bin/env python3
"""
Parst alle Markdown-Lektionen in src/content/lektionen/ und exportiert
die extrahierten Fehler-, Quiz- und Ticket-Daten als JSON-Dateien in src/data/.
"""
import json
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
LEKTIONEN_DIR = BASE / "src" / "content" / "lektionen"
DATA_DIR = BASE / "src" / "data"
DATA_DIR.mkdir(exist_ok=True)

# Kanonische Feld-Namen. Umlaute und Bindestriche werden auf ASCII abgebildet,
# damit Templates und JSON-Verbraucher eine stabile Schnittstelle haben.
FEHLER_KEYS = {
    "Symptom": "symptom",
    "Ursache": "ursache",
    "Diagnose-Schritte": "diagnose_schritte",
    "Lösung": "loesung",
    "Prävention": "praevention",
}

TICKET_KEYS = {
    "Situation": "situation",
    "Aufgabe": "aufgabe",
    "Lösung": "loesung",
}


def parse_frontmatter(text: str) -> dict:
    """Extrahiert YAML-Frontmatter (einfache key: value und Inline-Arrays)."""
    fm_match = re.match(r'^---\n(.*?)\n---', text, re.DOTALL)
    if not fm_match:
        return {}
    fm_text = fm_match.group(1)
    result = {}
    # Einfache key: value Paare
    for line in fm_text.split('\n'):
        if ':' in line and not line.startswith(' '):
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip()
            if not value:
                # Block-Array (z. B. sources:) wird separat behandelt
                continue
            elif value.startswith('['):
                # Inline-Array, z. B. schwerpunkt: ["Netzwerk", "DNS"]
                try:
                    result[key] = json.loads(value)
                except json.JSONDecodeError:
                    result[key] = [
                        item.strip().strip('"').strip("'")
                        for item in value.strip('[]').split(',')
                        if item.strip()
                    ]
            elif value.startswith('"'):
                result[key] = value.strip('"')
            elif value.startswith("'"):
                result[key] = value.strip("'")
            else:
                result[key] = value
    return result


def _zahl_wert(value: str) -> int | None:
    """Wandelt Frontmatter-Zahlen sicher in int um (JSON-Verbraucher rechnen damit)."""
    try:
        return int(str(value).strip())
    except (TypeError, ValueError):
        return None


def parse_sources(text: str) -> list:
    """Extrahiert sources-Array aus Frontmatter."""
    sources = []
    sources_match = re.search(r'sources:\n((?:  - .+\n(?:    .+\n)*)+)', text)
    if sources_match:
        block = sources_match.group(1)
        entries = re.findall(r'- url: "([^"]+)"\n\s+abrufdatum: ([^\n]+)', block)
        for url, datum in entries:
            sources.append({"url": url, "abrufdatum": datum.strip()})
    return sources


def parse_fehler(text: str) -> list:
    """Extrahiert Fehlerfälle aus '## Berühmte Fehler + Lösungen' Abschnitt."""
    fehler = []
    match = re.search(r'## Berühmte Fehler \+ Lösungen\n(.*?)(?=\n## |\Z)', text, re.DOTALL)
    if not match:
        return fehler
    section = match.group(1)
    # Fehler durch ### Fehler N: trennen
    fehler_blocks = re.split(r'### Fehler \d+:\s*(.+?)\n', section)
    for i in range(1, len(fehler_blocks), 2):
        titel = fehler_blocks[i].strip().strip('"').strip("'")
        inhalt = fehler_blocks[i + 1].strip()
        f = {"titel": titel}
        for field in ["Symptom", "Ursache", "Diagnose-Schritte", "Lösung", "Prävention"]:
            fm = re.search(rf'- \*\*{field}:\*\*\s*(.+?)(?=\n- \*\*|\Z)', inhalt, re.DOTALL)
            if fm:
                value = fm.group(1).strip()
                if field == "Diagnose-Schritte":
                    schritte = re.findall(r'^\s*\d+\.\s*(.+)$', value, re.MULTILINE)
                    f["diagnose_schritte"] = schritte if schritte else [value]
                else:
                    f[FEHLER_KEYS[field]] = value
        fehler.append(f)
    return fehler


def parse_quiz(text: str) -> list:
    """Extrahiert Quizfragen aus '## Mini-Quiz' Abschnitt."""
    quiz = []
    match = re.search(r'## Mini-Quiz\n(.*?)(?=\n## |\Z)', text, re.DOTALL)
    if not match:
        return quiz
    section = match.group(1)
    # Frage-Nummern finden
    fragen_starts = list(re.finditer(r'\*\*Frage (\d+):\*\*', section))
    for idx, fm_start in enumerate(fragen_starts):
        num = fm_start.group(1)
        start_pos = fm_start.end()
        end_pos = fragen_starts[idx + 1].start() if idx + 1 < len(fragen_starts) else len(section)
        inhalt = section[start_pos:end_pos].strip()
        q = {"nummer": int(num), "frage": inhalt.split('\n')[0].strip()}
        # Optionen
        optionen = re.findall(r'- ([A-D])\)\s*(.+)', inhalt)
        q["optionen"] = [opt[1].strip() for opt in optionen]
        # Richtige Antwort
        antwort_match = re.search(r'\*\*Antwort:\*\*\s*([A-D])', inhalt)
        if antwort_match:
            antwort = antwort_match.group(1)
            q["antwort"] = ord(antwort) - ord('A')
            # Erklärung
            erklaerung_match = re.search(r'\*\*Antwort:\*\*.*?—\s*(.+?)(?:\n|$)', inhalt)
            if erklaerung_match:
                q["erklaerung"] = erklaerung_match.group(1).strip()
        quiz.append(q)
    return quiz


def parse_ticket(text: str) -> list:
    """Extrahiert Ticket-Szenario aus '## Ticket-Szenario' Abschnitt."""
    ticket = []
    match = re.search(r'## Ticket-Szenario\n(.*?)(?=\n## |\Z)', text, re.DOTALL)
    if not match:
        return ticket
    section = match.group(1)
    t = {}
    for field in ["Situation", "Aufgabe"]:
        fm = re.search(rf'\*\*{field}:\*\*\s*(.+?)(?=\n\n|\n\*\*|\Z)', section, re.DOTALL)
        if fm:
            t[TICKET_KEYS[field]] = fm.group(1).strip()
    # Lösung ist der letzte Block und liegt in <details> — bis zum Sektionsende lesen
    loesung_match = re.search(r'\*\*Lösung:\*\*\s*(.+)', section, re.DOTALL)
    if loesung_match:
        value = loesung_match.group(1).strip()
        value = re.sub(r'</?details>', '', value)
        value = re.sub(r'</?summary>.*?</summary>', '', value, flags=re.DOTALL)
        # Quelltext-Marker entfernen, z. B. "**Lösung:** (aufklappbar)"
        value = re.sub(r'^\(?\s*aufklappbar\s*\)?[:\s]*', '', value, flags=re.IGNORECASE)
        value = re.sub(r'\n{3,}', '\n\n', value).strip()
        t[TICKET_KEYS["Lösung"]] = value
    if t:
        ticket.append(t)
    return ticket


def process_file(filepath: Path) -> dict:
    """Verarbeitet eine Markdown-Datei und gibt die extrahierten Daten zurück."""
    text = filepath.read_text(encoding='utf-8')
    fm = parse_frontmatter(text)
    fm['sources'] = parse_sources(text)
    fm['fehler'] = parse_fehler(text)
    fm['quiz'] = parse_quiz(text)
    fm['ticket'] = parse_ticket(text)
    # level/module als Zahlen, damit JSON-Verbraucher streng vergleichen können
    fm['level'] = _zahl_wert(fm.get('level', '')) or 0
    fm['module'] = _zahl_wert(fm.get('module', '')) or 0
    return fm


def main():
    lektionen = []
    for md_file in sorted(LEKTIONEN_DIR.glob("*.md")):
        print(f"Parse {md_file.name}...", file=sys.stderr)
        data = process_file(md_file)
        data["slug"] = md_file.stem
        lektionen.append(data)

    # JSON schreiben
    output_file = DATA_DIR / "lektionen.json"
    output_file.write_text(json.dumps(lektionen, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f"\n{len(lektionen)} Lektionen nach {output_file} exportiert.")

    # Zusammenfassung
    for l in lektionen:
        print(f"  {l['slug']}: {len(l.get('fehler', []))} Fehler, {len(l.get('quiz', []))} Quizfragen, {len(l.get('ticket', []))} Ticket(s)")


if __name__ == "__main__":
    main()
