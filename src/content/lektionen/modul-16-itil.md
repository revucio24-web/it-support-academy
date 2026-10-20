---
title: "Modul 16: Incident- und Problem-Management (ITIL), Dokumentation, Wissensdatenbank"
level: 2
module: 16
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.ibm.com/think/topics/it-infrastructure-library"
    abrufdatum: 2026-10-19
  - url: "https://www.itil.org.uk/training/itil-foundation-level-courses/itil-foundation-training"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die ITIL-Definitionen von Incident, Problem, Known Error und Workaround
2. Du kennst den Unterschied zwischen Incident Management und Problem Management und kannst beide Prozesse anwenden
3. Du kannst eine Root-Cause-Analyse (5 Whys, Ishikawa) durchführen
4. Du beherrschst die Grundlagen der strukturierten Dokumentation im IT-Support
5. Du verstehst den Aufbau und die Pflege einer Wissensdatenbank (Knowledge Base)

---

## Theorie

### 1. Incident Management nach ITIL 4

Die **Incident Management Practice** ist eine der zentralen ITIL-Management-Practices. Ihr Ziel ist die **zeitnahe Wiederherstellung** des IT-Service und die Minimierung der Auswirkungen auf den Betrieb.

**ITIL 4 Foundation Definition (übersetzt):**
> „Ein Incident ist eine ungeplante Unterbrechung eines IT-Service oder eine Qualitätsminderung eines IT-Service."
> — Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Kernziele:**
- So schnelle wie möglich Wiederherstellung des Service
- Minimierung der negativen Auswirkungen auf den Betrieb
- Gewährleistung des vereinbarten Service-Niveaus (SLA)

**Prozessmodell (vereinfacht):**

```
Erfassung → Kategorisierung → Priorisierung → Erste Diagnose → Lösung/Workaround → Schließung
```

**Erfassung:**
- Jeder Incident wird mit einem eindeutigen Ticket erfasst
- Mindestangaben: Beschreibung, betroffene Komponente, betroffene Person, Zeitpunkt
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Kategorisierung:**
- Strukturierte Einordnung nach IT-Bereich (Netzwerk, Hardware, Software, Konto)
- Ermöglicht Zuordnung zur richtigen Stelle und Statistik
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Priorisierung:**
- Berechnung aus Auswirkung (Impact) und Dringlichkeit (Urgency)
- Übliche Skala: P1 (kritisch) bis P4 (niedrig)
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

| Priorität | Auswirkung | Dringlichkeit | Reaktionszeit (Beispiel-SLA) |
|-----------|------------|---------------|------------------------------|
| P1 | Hoch – kompletter Ausfall, mehrere Benutzer | Hoch – keine Workaround | 15 Minuten |
| P2 | Hoch – eingeschränkter Betrieb | Mittel – Workaround vorhanden | 1 Stunde |
| P3 | Mittel – einzelner Benutzer | Mittel | 4 Stunden |
| P4 | Niedrig – Anfrage | Niedrig | 24 Stunden |

*Beispielwerte; konkrete SLA-Werte sind unternehmensspezifisch. Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19*

**Eskalation:**
- **Funktionale Eskalation:** Weiterleitung an ein höheres Support-Level (L1 → L2 → L3)
- **Hierarchische Eskalation:** Information oder Einbindung bei SLA-Überschreitung oder kritischem Geschäftseinfluss
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

### 2. Problem Management nach ITIL 4

Die **Problem Management Practice** zielt darauf ab, die **Ursache** von Incidents zu identifizieren und zu beseitigen, um zukünftige Incidents zu verhindern oder deren Auswirkungen zu reduzieren.

**ITIL 4 Foundation Definition (übersetzt):**
> „Ein Problem ist eine Ursache oder potenzielle Ursache von einem oder mehreren Incidents."
> — Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Unterschied zum Incident Management:**

| Kriterium | Incident Management | Problem Management |
|-----------|--------------------|--------------------|
| Ziel | Service schnell wiederherstellen | Ursache dauerhaft beseitigen |
| Zeithorizont | kurzfristig (Stunden/Tage) | mittel- bis langfristig |
| Auslöser | Ein gemeldeter Incident | Analyse wiederkehrender Incidents |
| Typisches Ergebnis | Workaround oder Lösung | Ursachenbeseitigung oder Known Error |

*Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19*

**Zwei Arten der Problembehandlung:**

**a) Reaktive Problembehandlung:**
- Wird ausgelöst, wenn ein oder mehrere Incidents analysiert werden
- Ziel: Wiederkehrende Incidents durch Identifikation der Ursache stoppen
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

**b) Proaktive Problembehandlung:**
- Auswertung von Trends und Mustern aus Incident-Daten
- Identifikation potenzieller Probleme bevor sie zu Incidents werden
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

**Problem Management Prozess (vereinfacht):**

```
Problemerkennung → Problemregistrierung → Kategorisierung → Ursachenanalyse → Lösung/Workaround → Schließung
```

**Problemerkennung — typische Auslöser:**
- Ein einzelner kritischer Incident (P1)
- Mehrere Incidents mit gleichem Symptom
- Wiederkehrende Incidents in einem IT-Bereich
- Proaktive Analyse (Trends)
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

### 3. Known Error und Known Error Database (KEDB)

**ITIL 4 Foundation Definition (übersetzt):**
> „Ein Known Error ist ein Problem, das diagnostiziert wurde und für das eine dokumentierte Lösung oder ein dokumentierter Workaround vorhanden ist."
> — Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Rolle der KEDB:**
- Dient als zentrale Ablage für bekannte Probleme und deren Lösungen
- Ermöglicht schnelle Wiederherstellung bei wiederkehrenden Incidents
- Wird durch Problem Management gepflegt
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Typische Einträge in der KEDB:**

| Feld | Beschreibung |
|------|--------------|
| Known Error ID | Eindeutige Kennung |
| Beschreibung des Problems | Symptome und betroffene Komponente |
| Ursache | Identifizierte Root Cause |
| Lösung / Workaround | Ausführliche Anleitung |
| Betroffene Incidents | Verknüpfte Ticket-Nummern |
| Status | Offen / Lösung in Arbeit / Dokumentiert |

*Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19*

**Arbeitsweise mit der KEDB:**
1. Bei Incident-Erfassung: KEDB durchsuchen (Symptom basiert)
2. Falls Known Error gefunden: dokumentierten Workaround anwenden
3. Falls Lösung noch nicht vorhanden: Incident mit Problem-Ticket verknüpfen
4. Nach Problem-Lösung: KEDB-Eintrag aktualisieren
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

### 4. Ursachenanalyse-Methoden

**a) 5 Whys (fünf Warum-Fragen):**
- Methode, durch wiederholtes Nachfragen nach der Ursache zu gelangen
- Anwendungsbereich: einfache bis mittl komplexe Probleme
- Beispiel:
  - Warum startet der Server nicht? → Stromversorgung unterbrochen
  - Warum ist die Stromversorgung unterbrochen? → USV hat auf Batteriebetrieb gewechselt
  - Warum hat die USV gewechselt? → Stromnetz war kurzzeitig unterbrochen
  - Warum war das Stromnetz unterbrochen? → Baustelle in der Nähe
  - Warum wurde die Baustelle nicht berücksichtigt? → Keine Redundanz der Stromversorgung
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**b) Ishikawa-Diagramm (Fischgrätendiagramm):**
- Visuelle Methode zur Identifikation von Ursachenkategorien
- Typische Kategorien (6M): Maschine, Methode, Material, Mensch, Messung, Milieu
- Eignet sich für komplexe Probleme mit mehreren Einflussfaktoren
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

**c) Kepner-Tregoe-Analyse:**
- Strukturierte Methode zur Problemidentifikation, -analyse und -entscheidung
- Teile: Situationsanalyse, Problemanalyse, Entscheidungsanalyse, Analyse potenzieller Probleme
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

**Wann welche Methode?**

| Methode | Aufwand | Komplexität des Problems |
|---------|---------|--------------------------|
| 5 Whys | Gering | Einfach bis mittel |
| Ishikawa | Mittel | Mittel bis hoch |
| Kepner-Tregoe | Hoch | Komplex, kritische Entscheidungen |

*Quelle: IBM ITIL Overview, abgerufen am 2026-10-19*

### 5. Dokumentation im IT-Support

Gute Dokumentation ist ein Kernbestandteil des IT-Service-Managements. Sie ermöglicht Wissensübertrag, verhindert Informationsverlust und ist Voraussetzung für Problemanalyse und Wissensdatenbank.

**Grundprinzipien der Dokumentation:**

| Prinzip | Bedeutung |
|---------|-----------|
| Vollständigkeit | Alle relevanten Informationen erfasst |
| Nachvollziehbarkeit | Ein Dritter kann die Schritte reproduzieren |
| Aktualität | Informationen sind zeitnah erfasst |
| Einheitlichkeit | Strukturierte Format wird eingehalten |
| Klarheit | Verständlich formuliert, ohne Mehrdeutigkeit |

*Quelle: IBM ITIL Overview, abgerufen am 2026-10-19*

**Minimalstandards für ein Incident-Ticket:**

- Beschreibung des Problems (Symptome, Fehlermeldungen)
- Betroffene Person/Komponente
- Zeitpunkt des Auftretens
- Ausgeschlossene Ursachen (Diagnoseergebnisse)
- Durchgeführte Schritte
- Ergebnis und Lösung/Workaround
- Verifizierung (Problem bestätigt gelöst?)
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Warum Dokumentation wichtig ist:**
- Vermeidung von Doppelarbeit
- Grundlage für Problem Management
- Ermöglicht Trend- und Schwerpunktanalyse
- Unterstützt SLA-Überwachung
- Wissensbewahrung bei Personalwechsel
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

### 6. Wissensdatenbank (Knowledge Base)

Die **Wissensdatenbank** ist ein zentraler Bestandteil des Service Knowledge Management Systems (SKMS) nach ITIL. Sie macht dokumentiertes Wissen für das gesamte Support-Team zugänglich.

**ITIL 4 Foundation Definition (übersetzt):**
> „Das Service Knowledge Management System (SKMS) ist ein System zur Verwaltung von Wissen und Informationen."
> — Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

**Zweck der Wissensdatenbank:**
- Sammlung von bekannten Lösungen, Workarounds und Anleitungen
- Selbstbedienung für Endanwender (Self-Service)
- Beschleunigung der Incident-Bearbeitung
- Reduktion wiederkehrender Incidents
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

**Typische Inhalte einer Wissensdatenbank:**

| Inhalt | Beschreibung |
|--------|--------------|
| FAQs | Häufig gestellte Fragen mit Antworten |
| Anleitungen | Schritt-für-Schritt-Lösungen |
| Known Errors | Dokumentierte Probleme mit Workarounds |
| Konfigurationsdokumentation | Netzwerkpläne, Systemkonfigurationen |
| Fehlermeldungen | Bedeutung und Lösungsansätze |
| Schulungsmaterialien | Dokumentation für neue Mitarbeiter |

*Quelle: IBM ITIL Overview, abgerufen am 2026-10-19*

**Lebenszyklus eines Wissensartikels:**

```
Entwurf → Prüfung (Fachlich + Technisch) → Veröffentlichung → Nutzung → Revision → Archivierung/Entfernung
```

**Qualitätskriterien für Wissensartikel:**
- Technische Richtigkeit
- Vollständigkeit der Schritte
- Verständlichkeit für Zielgruppe
- Regelmäßige Überprüfung auf Aktualität
- Eindeutige Strukturierung
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

**Best Practices für die Wissensdatenbank:**
1. **Definiere Verantwortlichkeiten** — Wer pflegt und prüft Artikel?
2. **Regelmäßige Reviews** — Quartalsweise Überprüfung aller Artikel
3. **Feedback-Schleife** — Nutzer können Artikel bewerten oder kommentieren
4. **Verknüpfung mit Tickets** — Lösungen werden automatisch als Artikel vorgeschlagen
5. **Versionsverwaltung** — Änderungen nachvollziehbar dokumentieren
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

### 7. Zusammenhang zwischen den Prozessen

```
Incident ──► Problem ──► Known Error ──► Wissensdatenbank
   │              │              │
   │              │              └─► Workaround verfügbar
   │              └─► Ursachenanalyse
   └─► Workaround (bei Known Error)
```

- **Incident Management** behebt die Symptome
- **Problem Management** findet und behebt die Ursache
- **Known Error** dokumentiert das Problem bis zur endgültigen Lösung
- **Wissensdatenbank** macht das Wissen für alle verfügbar
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

## Praxis-Übung im Homelab

### Übung: Incident-Management-Zyklus simulieren

**Vorbereitung:**
- Öffne ein Texteditor oder die Ticketsystem-Demo (z. B. Freshdesk kostenlos testen)
- Erstelle einen Papier-Flowchart oder nutze ein Tabellenblatt

**Aufgabe:**
1. Erstelle 3 Szenarien mit folgenden Informationen:
   - S1: Zwei Mitarbeiter melden gleichzeitig, dass sie nicht auf die Dateifreigabe zugreifen können
   - S2: Ein Mitarbeiter meldet, dass sein Monitor flackert
   - S3: Ein Mitarbeiter meldet, dass er sich nicht mehr anmelden kann (falsches Passwort)

2. Für jedes Szenario durchlaufen:

   **Schritt A — Incident erfassen:**
   - Beschreibe das Problem in eigenen Worten
   - Formuliere eine Kategorie
   - Lege Priorität fest (P1–P4) mit Begründung

   **Schritt B — Kategorisierung und Priorisierung:**
   - Vergleiche die Szenarien: Welches ist kritischster?
   - Begründet eure Entscheidung

   **Schritt C — Incident vs. Problem:**
   - Identifiziere, ob es sich bei S1 um einen Incident oder ein Problem handeln könnte
   - Was müsste tun, um das Problem zu lösen?
   - Erstellt ein Problem-Ticket für S1

   **Schritt D — Dokumentation:**
   - Dokumentiert für S1 alle Schritte eines Incident-Tickets
   - Dokumentiert alle Schritte eines Problem-Tickets

   **Schritt E — Wissensdatenbank:**
   - Formuliere für S1 einen Wissensdatenbank-Artikel (FAQ-Format)

**Erwartetes Ergebnis:**

| Szenario | Priorität | Incident/Problem | Eskalation? | Begründung |
|----------|-----------|------------------|-------------|------------|
| S1 | P2 | Incident + Problem | Ja → L2 | Wiederholtes Problem, mehrere Benutzer |
| S2 | P3 | Incident | Nein | Einzelner Benutzer, Workaround (anderer Monitor) |
| S3 | P3 | Incident | Nein | Standard-Reset durchführbar |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Incident und Problem werden nicht unterschieden

- **Symptom:** Wiederkehrende Incidents, keine Ursachenanalyse
- **Ursache:** Team schließt Incidents mit Workaround, aber Problem bleibt unbemerkt
- **Diagnose-Schritte:**
  1. Suche in den letzten 30 Tickets nach wiederkehrenden Symptomen
  2. Identifiziere Ticket mit gleicher Kategorie und ähnlicher Beschreibung
  3. Prüfe, ob ein Problem-Ticket existiert
- **Lösung:**
  - Problem-Ticket für das wiederkehrende Symptom erstellen
  - Alle betroffenen Incidents mit dem Problem-Ticket verknüpfen
  - Root-Cause-Analyse (z. B. 5 Whys) durchführen
- **Prävention:** Nach jedem Incident die Frage: „Ist das ein Symptom eines größeren Problems?"
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

### Fehler 2: Known Error nicht in der KEDB dokumentiert

- **Symptom:** Kollege findet keine Lösung für wiederkehrendes Problem
- **Ursache:** Problem wurde gelöst, aber nicht als Known Error dokumentiert
- **Diagnose-Schritte:**
  1. Prüfe die Ticket-Historie auf gelöste Probleme
  2. Identifiziere Probleme mit dokumentierter Lösung
  3. Prüfe, ob diese in der KEDB erfasst sind
- **Lösung:**
  - Known Error-Eintrag in der KEDB erstellen
  - Lösung und Workaround detailliert beschreiben
  - Betroffene Incidents verknüpfen
- **Prävention:** Nach jeder Problem-Lösung automatisch KEDB-Eintrag erstellen
- Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

### Fehler 3: Wissensdatenbank veraltet und ungenutzt

- **Symptom:** Nutzer finden keine aktuellen Lösungen, stellen wiederholt Tickets
- **Ursache:** Wissensdatenbank wird nicht geprüft und aktualisiert
- **Diagnose-Schritte:**
  1. Zähle die Artikel in der Wissensdatenbank
  2. Prüfe die letzte Änderung der 10 ältesten Artikel
  3. Vergleiche mit den häufigsten Ticket-Kategorien
- **Lösung:**
  - Regelmäßigen Review-Prozess einführen (quartalsweise)
  - Nicht mehr zutreffende Artikel archivieren
  - Verknüpfung zu den Top-10-Ticket-Kategorien herstellen
- **Prävention:** Verantwortliche Person für Wissensdatenbank benennen
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

---

### Fehler 4: Dokumentation unvollständig oder unverständlich

- **Symptom:** Kollege kann übernommenes Ticket nicht bearbeiten
- **Ursache:** Ticket wurde mit unklaren oder fehlenden Informationen geschlossen
- **Diagnose-Schritte:**
  1. Öffne 10 zufällig gewählte Tickets der letzten Woche
  2. Prüfe, ob alle Felder (Beschreibung, Diagnose, Lösung, Verifizierung) ausgefüllt sind
  3. Frage dich: „Könnte ein Kollege das Ticket ohne weitere Informationen bearbeiten?"
- **Lösung:**
  - Tickets nachbearbeiten und Lücken schließen
  - Dokumentations-Checkliste einführen:
    - [ ] Beschreibung des Problems
    - [ ] Diagnose-Schritte
    - [ ] Lösung / Workaround
    - [ ] Verifizierung (Problem bestätigt gelöst?)
    - [ ] Verknüpfung zu betroffenen Incidents/Problemen
- **Prävention:** Dokumentationsstandard bei der Team-Schulung vermitteln
- Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

---

## Mini-Quiz

**Frage 1:** Was ist die ITIL-Definition eines Incidents?
- A) Eine geplante Wartung eines IT-Services
- B) Eine ungeplante Unterbrechung oder Qualitätsminderung eines IT-Service
- C) Eine Anfrage nach neuer Hardware
- D) Ein dokumentiertes Problem mit bekannter Lösung

**Antwort:** B — „Ein Incident ist eine ungeplante Unterbrechung eines IT-Service oder eine Qualitätsminderung eines IT-Service." Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

**Frage 2:** Was ist der Hauptunterschied zwischen Incident Management und Problem Management?
- A) Incident Management ist schneller als Problem Management
- B) Incident Management stellt den Service wieder her, Problem Management beseitigt die Ursache
- C) Problem Management ist nur für kritische Incidents
- D) Es gibt keinen Unterschied

**Antwort:** B — Incident Management fokussiert auf Wiederherstellung, Problem Management auf Ursachenbeseitigung. Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

**Frage 3:** Was ist ein Known Error?
- A) Ein Incident, der noch nicht gelöst ist
- B) Ein Problem, das diagnostiziert wurde und für das eine dokumentierte Lösung oder ein Workaround vorhanden ist
- C) Ein Fehler in der Software
- D) Ein Problem, das nie auftritt

**Antwort:** B — „Ein Known Error ist ein Problem, das diagnostiziert wurde und für das eine dokumentierte Lösung oder ein dokumentierter Workaround vorhanden ist." Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

**Frage 4:** Was ist das Ziel des Service Knowledge Management System (SKMS)?
- A) Alle Mitarbeiter zu überwachen
- B) Wissen und Informationen zu verwalten und zugänglich zu machen
- C) Tickets automatisch zu lösen
- D) Hardware-Inventar zu verwalten

**Antwort:** B — Das SKMS ist ein System zur Verwaltung von Wissen und Informationen. Quelle: ITIL 4 Foundation, abgerufen am 2026-10-19

---

**Frage 5:** Welche Methode eignet sich am besten für die Ursachenanalyse eines komplexen Netzwerkproblems mit mehreren Einflussfaktoren?
- A) 5 Whys
- B) Ishikawa-Diagramm
- C) Passwort-Reset
- D) Neustart des Rechners

**Antwort:** B — Das Ishikawa-Diagramm eignet sich für komplexe Probleme mit mehreren Einflussfaktoren. Quelle: IBM ITIL Overview, abgerufen am 2026-10-19

---

## Ticket-Szenario

**Situation:**
Zwei Mitarbeiter aus unterschiedlichen Abteilungen melden sich zeitgleich mit dem gleichen Problem: „Ich kann seit heute Morgen nicht auf die Dateifreigabe zugreifen. Ich erhalte die Fehlermeldung „Zugriff verweigert". Ich habe gestern mein Passwort geändert."

**Aufgabe:**
1. Erstelle ein Incident-Ticket für jeden Melder
2. Erstelle ein Problem-Ticket (da mehrere Benutzer betroffen sind)
3. Führe eine vereinfachte Root-Cause-Analyse durch (5 Whys)
4. Dokumentiere den Fall in der Wissensdatenbank

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Incident-Tickets:**

| Feld | Ticket 1 | Ticket 2 |
|------|---------|----------|
| Beschreibung | Kein Zugriff auf Dateifreigabe, „Zugriff vergendert" nach Passwort-Änderung | Identisch |
| Kategorie | Netwerk / Dateifreigabe | Netwerk / Dateifreigabe |
| Priorität | P2 (zwei Benutzer, Workaround vorhanden) | P2 |
| Status | In Bearbeitung | In Bearbeitung |

**2. Problem-Ticket:**

| Feld | Eintrag |
|------|---------|
| Beschreibung | Mehrere Benutzer können nach Passwort-Änderung nicht auf Dateifreigabe zugreifen |
| Kategorie | Authentifizierung / Dateifreigabe |
| Auslöser | Mehrere Incidents mit gleichem Symptom |
| Verknüpfte Incidents | Ticket-1, Ticket-2 |
| Status | In Bearbeitung |

**3. Root-Cause-Analyse (5 Whys):**
- Warum können die Benutzer nicht zugreifen? → Ihre Anmeldeinformationen werden nicht akzeptiert
- Warum werden die Anmeldeinformationen nicht akzeptiert? → Das geänderte Passwort wurde nicht an den Dateifreigabe-Dienst weitergegeben
- Warum wurde das Passwort nicht weitergegeben? → Die zwischengespeicherten Windows-Anmeldeinformationen (Credential Manager) enthalten noch das alte Passwort
- Warum enthält der Credential Manager das alte Passwort? → Das Passwort wurde geändert, aber der Credential Manager nicht aktualisiert
- Warum wurde der Credential Manager nicht aktualisiert? → Keine automatische Synchronisation zwischen AD-Passwort und Credential Manager

**Ursache:** Credential Manager enthält veraltete Anmeldeinformationen.

**4. Lösung:**
- Credential Manager öffnen (Systemsteuerung → Benutzerkonten → Credential Manager)
- Gespeicherte Windows-Anmeldeinformationen für die Dateifreigabe finden und entfernen
- Neue Anmeldung mit aktuellem Passwort durchführen

**5. Wissensdatenbank-Artikel:**
- **Titel:** Dateifreigabe „Zugriff verweigert" nach Passwort-Änderung
- **Symptom:** Nach einer Passwort-Änderung erhalten Benutzer beim Zugriff auf die Dateifreigabe die Fehlermeldung „Zugriff verweigert"
- **Ursache:** Veraltete Anmeldeinformationen im Windows Credential Manager
- **Lösung:** Credential Manager öffnen, veraltete Einträge entfernen, neu anmelden
- **Tags:** Dateifreigabe, Passwort, Credential Manager, Zugriff verweigert

</details>

---

## Quellen

- [IBM — What is ITIL?](https://www.ibm.com/think/topics/it-infrastructure-library) — abgerufen am 2026-10-19
- [ITIL 4 Foundation Training](https://www.itil.org.uk/training/itil-foundation-level-courses/itil-foundation-training) — abgerufen am 2026-10-19
- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
