---
title: "Modul 1: Grundlagen — Rolle, Ticketsystem, Kommunikation, SLA, Eskelation"
level: 1
module: 1
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
  - url: "https://www.ibm.com/think/topics/it-infrastructure-library"
    abrufdatum: 2026-10-19
  - url: "https://www.coursera.org/learn/technical-support-fundamentals"
    abrufdatum: 2026-10-19
  - url: "https://www.itil.org.uk/training/itil-foundation-level-courses/itil-foundation-training"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Rolle eines IT-Supports und deren Platz in der Unternehmensorganisation
2. Du kennst die Begriffe Incident, Problem und Service Request und kannst sie unterscheiden
3. Du verstehst SLA (Service Level Agreement) und kannst Prioritäten zuordnen
4. Du beherrschst die Grundlagen der Benutzer-Kommunikation im Support-Kontext
5. Du kennst Eskalationswege und kannst situationsgerecht entscheiden, wann eskaliert wird

---

## Theorie

### 1. Die Rolle des IT-Supports

Der IT-Support (auch Helpdesk, Service Desk oder IT-Support-Mitarbeiter) ist die erste Anlaufstelle für Benutzer bei technischen Problemen. Die Rolle umfasst:

- **Primärkontakt** für alle IT-bezogenen Anfragen und Störungen
- **Erste Diagnose** (First-Level-Support) — einfache Probleme werden direkt gelöst
- **Eskalation** komplexerer Probleme an Second- oder Third-Level-Support
- **Dokumentation** aller Interaktionen im Ticketsystem
- **Kommunikation** mit Benutzern, Fachabteilungen und externen Dienstleistern

**Level-Modell im IT-Support:**

| Level | Rolle | Typische Aufgaben |
|-------|-------|-------------------|
| L1 | Helpdesk / Service Desk | Erste Diagnose, Passwort-Resets, Standard-Requests |
| L2 | IT-Support / Administration | Tiefere Diagnose, Server/Netzwerk, Software-Installation |
| L3 | Spezialist / Entwickler | Architektur, komplexe Probleme, Code-Änderungen |
| L4 | Externer Dienstleister | Hersteller-Support, Garantiefälle, Spezialhardware |

### 2. Ticketsystem

Ein Ticketsystem (auch Issue Tracking System) ist die zentrale Software für die Verwaltung von Support-Anfragen. Bekannte Systeme: Jira Service Management, OTRS, Freshdesk, Zendesk, GLPI.

**Lebenszyklus eines Tickets:**

```
Neu → Zugewiesen → In Bearbeitung → Warten auf Benutzer → Gelöst → Geschlossen
```

**Wichtige Ticket-Felder:**

| Feld | Beschreibung |
|------|--------------|
| Ticket-NR | Eindeutige Kennnummer |
| Priorität | Dringlichkeit des Problems |
| Kategorie | IT-Bereich (Hardware, Software, Netzwerk, Konto) |
| Status | Aktueller Bearbeitungsstand |
| SLA-Frist | Maximale Bearbeitungszeit |

### 3. Incident vs. Problem vs. Service Request

| Begriff | Definition | Beispiel |
|---------|------------|----------|
| **Incident** | Ungeplante Unterbrechung oder Qualitätsminderung eines Services | E-Mail-Server nicht erreichbar |
| **Problem** | Ursache eines oder mehrerer Incidents | Defekter Netzteil im Server-RAID |
| **Service Request** | Vordefinierte, standardisierte Anfrage | Neuer Monitor anfordern, Software-Installation |

**Wichtig:** Ein Incident kann ohne gelöstes Problem geschlossen werden (Workaround). Das Problem bleibt bis zur Ursachenbeseitigung offen.

### 4. SLA — Service Level Agreement

Ein SLA ist eine Vereinbarung zwischen IT-Service-Provider und Kunde/Benutzer über die Qualität der Services.

**Typische SLA-Kriterien:**

| Kriterium | Beispiel |
|-----------|----------|
| Reaktionszeit | P1: 15 Minuten, P2: 1 Stunde, P3: 4 Stunden |
| Lösungszeit | P1: 4 Stunden, P2: 8 Stunden, P3: 24 Stunden |
| Verfügbarkeit | 99,5% pro Monat |
| Eskalationspfad | Nach 50% der Lösungszeit |

**Prioritätsdefinitionen (empfohlen):**

| Priorität | Bezeichnung | Beschreibung | Reaktionszeit |
|-----------|-------------|--------------|---------------|
| P1 | Kritisch | Kompletter Ausfall, kein Workaround | 15 Min |
| P2 | Hoch | Einschränkter Betrieb, Workaround möglich | 1 Std |
| P3 | Mittel | Einzelner Benutzer betroffen | 4 Std |
| P4 | Niedrig | Anfrage, kein Betriebsbezug | 24 Std |

### 5. Kommunikation im Support

**Grundregeln:**

1. **Aktiv zuhören** — Benutzer vollständig ausreden lassen
2. **Einfache Sprache** — Fachjargon vermeiden oder erklären
3. **Empathie zeigen** — "Ich verstehe, dass das frustrierend ist"
4. **Erwartungen setzen** — "Das dauert etwa 10 Minuten"
5. **Dokumentieren** — Alles im Ticket festhalten

**Falsche Kommunikation:**
> "Das Problem liegt an Ihrem PC, da muss der Techniker vorbeikommen."

**Richtige Kommunikation:**
> "Ich habe das Problem verstanden. Ich prüfe das jetzt und melde mich in 10 Minuten bei Ihnen. Falls das nicht reicht, kann ich auch einen Termin mit einem Techniker organisieren."

### 6. Eskalation

**Wann eskalieren?**
- Problem ist nicht in der eigenen Kompetenz
- SLA-Frist erreicht oder überschritten
- Benutzer fordert eskplizite Lösung
- Sicherheitsrelevante Vorfälle (Datenverlust, Sicherheitslücken)

**Eskalationspfad (Beispiel):**

```
L1 Helpdesk → L2 IT-Administrator → L3 Spezialist → L4 Hersteller
```

---

## Praxis-Übung im Homelab

### Übung: Ticket-Priorisierung und Eskalationsentscheidung

**Vorbereitung:**
- Öffne ein Texteditor oder die Ticketsystem-Demo (z. B. Freshdesk kostenlos testen)
- Erstelle 5 fiktive Tickets mit unterschiedlichen Szenarien

**Aufgabe:**
1. Erstelle 5 Tickets mit folgenden Szenarien:
   - T1: Chef bekommt keine E-Mails (P1?)
   - T2: Drucker im Raum 204 druckt nicht (P3?)
   - T3: Neue Software für Buchhaltung installieren (P4?)
   - T4: kompletter Netzwerkausfall im 1. Stock (P1?)
   - T5: Passwort-Reset für neuen Mitarbeiter (P3?)

2. Ordne jedem Ticket eine Priorität (P1–P4) zu
3. Entscheide, welche Tickets du direkt bearbeitest (L1) und welche du eskalierst (L2)
4. Dokumentiere deine Entscheidungsbegründung

**Erwartetes Ergebnis:**

| Ticket | Priorität | Eskalation? | Begründung |
|--------|-----------|-------------|------------|
| T1 | P1 | Ja → L2 | Keine E-Mails = betriebskritisch |
| T2 | P3 | Nein | Einzelner Drucker, Workaround möglich |
| T3 | P4 | Nein | Standard-Request |
| T4 | P1 | Ja → L2 | Kompletter Ausfall |
| T5 | P3 | Nein | Standard-Reset |

---

## Berühmte Fehler + Lösungen

### Fehler 1: SLA-Definitionen nicht eingehalten

- **Symptom:** Beschwerden von Benutzern über lange Wartezeiten
- **Ursache:** Keine klare SLA-Definition oder keine SLA-Überwachung
- **Diagnose-Schritte:**
  1. Prüfe, ob SLAs im Ticketsystem definiert sind
  2. Analysiere die durchschnittliche Reaktions- und Lösungszeit der letzten 20 Tickets
  3. Vergleiche mit den vereinbarten SLA-Werten
- **Lösung:**
  - SLA-Regeln im Ticketsystem konfigurieren (automatische Eskalation bei Überschreitung)
  - Wöchentliches SLA-Reporting einführen
  - Team-Schulung zu SLA-Bedeutung
- **Prävention:** SLAs bereits bei der Einführung des Ticketsystems definieren

---

### Fehler 2: Incident mit Problem verwechselt

- **Symptom:** Dasselbe Problem tritt wiederholt auf
- **Ursache:** Der Incident wurde gelöst (Workaround), aber das Problem nicht dokumentiert
- **Diagnose-Schritte:**
  1. Prüfe, ob es bereits ähnliche Incidents gab (Ticket-Historie durchsuchen)
  2. Identifiziere die gemeinsame Ursache
  3. Erstelle ein Problem-Ticket
- **Lösung:**
  - Problem-Ticket mit allen referenzierten Incidents erstellen
  - Root-Cause-Analyse durchführen
  - Workaround dokumentieren
- **Prävention:** Nach jedem Incident prüfen: "Ist das gelöst oder nur umgangen?"

---

### Fehler 3: Mangelnde Dokumentation

- **Symptom:** Kollege kann übernommenes Ticket nicht bearbeiten
- **Ursache:** Ticket wurde ohne ausreichende Notizen geschlossen
- **Diagnose-Schritte:**
  1. Öffne das betroffene Ticket
  2. Prüfe, ob alle Schritte dokumentiert sind
  3. Frage dich: "Könnte ein Kollege das Ticket ohne weitere Informationen bearbeiten?"
- **Lösung:**
  - Ticket mit detaillierten Notizen aktualisieren
  - Alle ausgeführten Schritte, Befunde und Ergebnisse dokumentieren
- **Prävention:** Dokumentations-Checkliste verwenden:
  - [ ] Beschreibung des Problems
  - [ ] Diagnose-Schritte
  - [ ] Lösung/Workaround
  - [ ] Verifizierung (Problem gelöst?)

---

### Fehler 4: Unklare Eskalationsentscheidungen

- **Symptom:** Ticket "hängt" niemand weiß, wer zuständig ist
- **Ursache:** Kein klarer Eskalationspfad definiert
- **Diagnose-Schritte:**
  1. Prüfe, ob der Eskalationspfad im Ticketsystem definiert ist
  2. Überprüfe, ob Eskalationsregeln eingehalten werden
  3. Identifiziere, wer für welche Kategorie zuständig ist
- **Lösung:**
  - Eskalationsmatrix erstellen (Kategorie → Level → Kontakt)
  - Automatische Eskalation konfigurieren
  - Team-Schulung durchführen
- **Prävention:** Eskalationsmatrix bereits bei Systemeinführung erstellen

---

## Mini-Quiz

**Frage 1:** Welche Priorität hat ein kompletter Netzwerk-Ausfall im 1. Stock?
- A) P1
- B) P2
- C) P3
- D) P4

**Antwort:** A — Kritisch (P1), da ein kompletter Ausfall vorliegt.

---

**Frage 2:** Was ist der Unterschied zwischen Incident und Problem?
- A) Ein Incident ist schlimmer als ein Problem
- B) Ein Incident ist eine Unterbrechung, ein Problem ist die Ursache
- C) Ein Problem ist eine Anfrage, ein Incident ist eine Störung
- D) Es gibt keinen Unterschied

**Antwort:** B — Incident = Symptom, Problem = Ursache.

---

**Frage 3:** Was bedeutet SLA?
- A) System Level Agreement
- B) Service Level Agreement
- C) Support Level Agreement
- D) Security Level Agreement

**Antwort:** B — Service Level Agreement.

---

**Frage 4:** Wann solltest du ein Ticket eskalieren?
- A) Bei jedem Problem
- B) Nur wenn der Chef es sagt
- C) Wenn es nicht in deiner Kompetenz liegt oder die SLA-Frist erreicht ist
- D) Niemals

**Antwort:** C — Eskalation bei Kompetenzgrenze oder SLA-Überschreitung.

---

**Frage 5:** Was ist die wichtigste Regel bei der Benutzer-Kommunikation?
- A) Fachjargon verwenden
- B) Aktiv zuhören und einfache Sprache verwenden
- C) Schnelle Lösung versprechen
- D) E-Mails sofort beantworten

**Antwort:** B — Aktiv zuhören, einfache Sprache.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter aus der Buchhaltung meldet sich: "Ich habe gestern mein Passwort geändert und seitdem funktioniert Outlook nicht mehr. Ich bekomme ständig eine Aufforderung, mein Passwort einzugeben, aber wenn ich es eingebe, erscheint wieder die Fehlermeldung. Ich muss dringend E-Mails beantworten."

**Aufgabe:**
1. Was ist die Priorität dieses Tickets?
2. Wie gehst du bei der Diagnose vor?
3. Wie löst du das Problem?
4. Dokumentiere den Fall für die Wissensdatenbank.

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P2 (Hoch) — E-Mail ist betriebskritisch, aber es gibt einen Workaround (Web-Outlook).

**2. Diagnose:**
- Prüfe, ob der Benutzer im Active Directory existiert und das korrekte Passwort hat
- Prüfe, ob das Passwort im AD korrekt gespeichert ist
- Prüfe, ob Outlook den Cached-Modus verwendet (das alte Passwort ist im Cache gespeichert)
- Prüfe, ob der Benutzer das Passwort in Windows aktualisiert hat (Credential Manager)

**3. Lösung:**
- Credential Manager öffnen (Systemsteuerung → Benutzerkonten → Credential Manager)
- Gespeicherte Anmeldeinformationen für Outlook/Exchange finden und entfernen
- Outlook neu starten — es sollte nach dem neuen Passwort fragen
- Alternative: `control keymgr.dll` ausführen, um den Credential Manager direkt zu öffnen

**4. Dokumentation:**
- Problem: Passwort-Change → Outlook fragt wiederholt nach Passwort
- Ursache: Altes Passwort im Windows Credential Manager gespeichert
- Lösung: Credential Manager → Windows-Anmeldeinformationen → Outlook-Eintrag entfernen
- Verifizierung: Outlook startet ohne Passwort-Aufforderung

</details>

---

## Quellen

- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
- [IBM — What is ITIL?](https://www.ibm.com/think/topics/it-infrastructure-library) — abgerufen am 2026-10-19
- [Coursera — Technical Support Fundamentals](https://www.coursera.org/learn/technical-support-fundamentals) — abgerufen am 2026-10-19
- [ITIL 4 Foundation Training](https://www.itil.org.uk/training/itil-foundation-level-courses/itil-foundation-training) — abgerufen am 2026-10-19
