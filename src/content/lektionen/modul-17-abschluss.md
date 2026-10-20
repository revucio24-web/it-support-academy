---
title: "Modul 17: Abschlussprojekt + Prüfungssimulation"
level: 2
module: 17
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.comptia.org/certifications/a"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/training/"
    abrufdatum: 2026-10-19
  - url: "https://www.ihk.de/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows/"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du kannst dein Wissen aus allen 16 Modulen in einem integrierten Abschlussprojekt anwenden
2. Du kennst das Prüfungsformat der CompTIA A+ Zertifizierung und kannst dich darauf vorbereiten
3. Du kannst typische Prüfungsfragetypen (Multiple-Choice, PBQs) erkennen und korrekt beantworten
4. Du beherrschst Zeitmanagementstrategien für die Prüfung
5. Du kannst dein Wissen selbständig überprüfen und Lücken gezielt schließen

---

## Theorie

### 1. Überblick über den Kurs und das Abschlussprojekt

Der Kurs IT-Support umfasst alle wesentlichen Kompetenzen für den Einstieg in den IT-Betrieb:

| Modulbereich | Inhalt |
|--------------|--------|
| Grundlagen | Rolle, Ticketsystem, SLA, Eskalation |
| Hardware | PC-Komponenten, Diagnose, Reparatur |
| Software | Installation, Konfiguration, Troubleshooting |
| Netzwerk | TCP/IP, DNS, DHCP, WLAN, Firewall |
| Betriebssystem | Windows 10/11, Linux, macOS |
| Sicherheit | Verschlüsselung, Backups, Viren, Zugriff |
| Service | Kommunikation, Dokumentation, Eskalation |

Das Abschlussprojekt verbindet diese Bereiche in einer realistischen Szenario-Übung.

### 2. CompTIA A+ Prüfungsformat

Die CompTIA A+ Zertifizierung ist die branchenweit anerkannte Zertifizierung für IT-Support-Mitarbeiter. Sie besteht aus zwei Prüfungen:

**220-1101 (Core 1):**
- Mobile Devices
- Networking
- Hardware
- Virtualization and Cloud Computing

**220-1102 (Core 2):**
- Operating Systems
- Security
- Software Troubleshooting
- Operational Procedures

**Prüfungsparameter (Stand 2024/2025):**

| Parameter | Wert |
|-----------|------|
| Prüfungszeit | 90 Minuten pro Prüfung |
| Anzahl Fragen | Maximal 90 pro Prüfung |
| Fragetypen | Multiple-Choice (ein/mehrere Antworten), PBQs |
| Bestehensgrenze | 675 von 900 (Core 1), 700 von 900 (Core 2) |

*Quelle: CompTIA A+ Zertifizierungsseite — https://www.comptia.org/certifications/a — abgerufen am 2026-10-19*

### 3. Fragetypen in der A+ Prüfung

**Multiple-Choice (Single Answer):**
Eine Frage, eine richtige Antwort aus 4 Optionen.

**Multiple-Choice (Multiple Answers):**
Eine Frage, mehrere richtige Antworten — der Kandidat erhält nur Punkte, wenn alle richtigen Antworten markiert sind.

**Performance-Based Questions (PBQs):**
Praktische Simulationen, in denen der Kandidat eine Aufgabe in einer simulierten Umgebung lösen muss (z. B. Router konfigurieren, Fehler in Windows beheben, Kabel verlegen).

*Quelle: CompTIA A+ Zertifizierungsseite — https://www.comptia.org/certifications/a — abgerufen am 2026-10-19*

### 4. Zeitmanagement in der Prüfung

Empfohlene Vorgehensweise:

1. **PBQs zuerst** — diese beanspruchen am meisten Zeit
2. **Multiple-Chick-Questions im ersten Durchgang** — alle beantworten, bei Unsicherheit markieren
3. **Gemarkte Fragen nachbearbeiten** — im zweiten Durchgang
4. **Zeitpuffer einplanen** — mindestens 15 Minuten Reserve

**Pomodoro-Technik für die Prüfungsvorbereitung:**
- 25 Minuten konzentriertes Lernen
- 5 Minuten Pause
- Nach 4 Durchgängen: 15 Minuten Pause

*Quelle: CompTIA A+ Study Tips — https://www.comptia.org/certifications/a — abgerufen am 2026-10-19*

### 5. Selbsttest-Methoden

**Aktives Wiederholen:**
- Fragen aus dem Mini-Quiz ohne Hinweise beantworten
- Befehle in der echten Windows-Umgebung ausprobieren

**Fehleranalyse:**
- Nach jedem Fehler: Warum habe ich das falsch gemacht? Was fehlte im Wissen?

**Peer-Review:**
- Tausche dich mit einem Lernpartner über Fragen aus

**Wissensdatenbank nutzen:**
- Erstelle zu jedem Thema eine Zusammenfassung mit den wichtigsten Befehlen und Konzepten

---

## Praxis-Übung im Homelab

### Übung: Abschlussprojekt — IT-Infrastruktur-Dokumentation & Prüfungssimulation

**Vorbereitung:**
- Installiere Windows 11 23H2 in einer VM oder nutze dein bestehendes System
- Bereite einen Texteditor für die Dokumentation vor

---

**Teil 1: IT-Infrastruktur-Dokumentation (60 Minuten)**

Dokumentiere die IT-Infrastruktur eines fiktiven Unternehmens (Muster GmbH, 50 Mitarbeiter):

1. **Hardware-Inventar**
   - Erstelle eine Tabelle mit allen PCs, Laptops, Druckern und Servern
   - CPU, RAM, Festplatte, Betriebssystem-Version notieren

2. **Netzwerk-Dokumentation**
   - Subnetzmaske, Gateway, DNS-Server
   - WLAN-SSID und Verschlüsselungsmethode
   - Switch-Ports und Kabelverläufe

3. **Software-Inventar**
   - Installierte Programme auf 3 Referenz-PCs
   - Lizenzierung und Updates

4. **Benutzer- und Rechteverwaltung**
   - Active Directory Struktur (OU-Struktur)
   - Gruppenrichtlignen (Passwort-Politik, Sperrrichtlinien)
   - Freigaben und NTFS-Rechte

**Erwartetes Ergebnis:** Ein konsistentes Dokument mit allen Tabellen und Beschreibungen.

---

**Teil 2: Prüfungssimulation (90 Minün)**

Beantworte die folgenden Fragen unter realen Prüfungsbedingungen (keine Hilfsmittel, Zeitlimit):

1. **PC startet nicht — BIOS POST-Code 1 Long, 2 Short.** Was bedeutet das?
2. **Ein Benutzer kann nicht auf eine Netzwerkfreigabe zugreifen.** Beschreibe deine Diagnose in 5 Schritten.
3. **Windows Update schlägt fehler mit Fehlercode 0x80070002.** Wie gehst du vor?
4. **Ein Drucker druckt gestrichene Zeichen.** Was prüfst du?
5. **Benutzer meldet: „Mein PC ist langsam."** Welche 3 Befehle/Dienstprogramme verwendest du zur Diagnose?

**Selbstbewertung:**
- Vergleiche deine Antworten mit den Lösungen weiter unten
- Markiere Themen, die unsicher sind → Wiederholung in den entsprechenden Modulen

---

**Teil 3: Reflexion (15 Minuten)**

1. Welche Module fielen dir leicht?
2. Wo hast du Lücken bemerkt?
3. Erstelle einen Lernplan für die nächsten Wochen.

---

## Berühmte Fehler + Lösungen

### Fehler 1: Zeitmanagement in der Prüfung schlecht

- **Symptom:** Nicht alle Fragen bearbeitet, obwohl die Antworten gewusst wurden
- **Ursache:** Zu viel Zeit für einzelne Fragen aufgewendet
- **Diagnose-Schritte:**
  1. Nach der Prüfung: Wie viel Zeit habe ich pro Frage gebraucht?
  2. Identifiziere, welche Fragearten am meisten Zeit beansprucht haben
  3. Prüfe, ob du PBQs zuerst oder zuletzt bearbeitet hast
- **Lösung:**
  - In der Prüfung: Maximal 1 Minute pro Multiple-Choice-Frage
  - PBQs zuerst bearbeiten (diese sind am zeitraubendsten)
  - Unsicher gemarkte Fragen überspringen und später nacharbeiten
- **Prävention:** Zeitübungen im Vorfeld durchführen — 3 Mal 90-Minuten-Simulationen absolvieren

---

### Fehler 2: PBQs (Performance-Based Questions) falsch angegangen

- **Symptom:** Fragen übersprungen oder falsch gelöst, obwohl der Stoff bekannt war
- **Ursache:** Keine Erfahrung mit der simulierten Umgebung
- **Diagnose-Schritte:**
  1. Prüfe, ob du in der Vorbereitung Übungsaufgaben mit simulierten Umgebungen gemacht hast
  2. Überlege, ob du die Aufgabe richtig verstanden hast, bevor du loslegst
  3. Analysiere, ob du das notwendige Hintergrundwissen hattest
- **Lösung:**
  - CompTIA bietet offizielle Übungstests mit PBQs an (Practice Tests)
  - Microsoft Learn bietet interaktive Labs für Windows-Konfiguration
  - Übe mit virtuellen Maschinen, um die Oberfläche kennenzulernen
- **Prävention:** Mindestens 2 komplette Practice-Tests mit PBQs absolvieren

---

### Fehler 3: Dokumentation unvollständig

- **Symptom:** Kollege kann übernommene Tickets nicht bearbeiten, fehlende Infos
- **Ursache:** Routine-Mangel, Dokumentation als nachträgliche Aufgabe empfunden
- **Diagnose-Schritte:**
  1. Prüfe 5 zufällige Tickets auf Vollständigkeit
  2. Stelle die Frage: „Könnte ein Kollege ohne Rückfragen weiterarbeiten?"
  3. Identifiziere fehlende Felder (Befund, Lösung, Verifizierung)
- **Lösung:**
  - Vor der Schließung eines Tickets: Checkliste durchgehen
  - Template für häufige Anfragen erstellen (Passwort-Reset, Drucker-Einrichtung, etc.)
  - Peer-Review: Kollege prüft die Dokumentation
- **Prävention:** Dokumentation als festen Bestandteil des Ticket-Workflows etablieren

---

### Fehler 4: Prüfungsangst und unvorbereiteter Start

- **Symptom:** Panik in der Prüfung, Fragen werden falsch gelesen
- **Ursache:** Unzureichende Vorbereitung, keine Simulationsprüfungen absolviert
- **Diagnose-Schritte:**
  1. Bewerte dein Vorbereitungsniveau ehrlich (1–10)
  2. Prüfe, ob du alle Prüfungsthemen abgedeckt hast
  3. Überlege, ob du ausreichend Schlaf und Pausen in der Vorbereitung eingebaut hast
- **Lösung:**
  - 2 Wochen vor der Prüfung: Tägliche 30-Minuten-Übungen
  - 1 Woche vor der Prüfung: Vollständige Simulation unter realen Bedingungen
  - 1 Tag vor der Prüfung: Keine neuen Themen mehr, nur Wiederholung
- **Prävention:** Frühzeitige Planung — mindestens 4 Wochen Vorbereitungszeit einplanen

---

## Mini-Quiz

**Frage 1:** Wie lange dauert eine CompTIA A+-Prüfung?
- A) 60 Minuten
- B) 90 Minuten
- C) 120 Minuten
- D) 180 Minuten

**Antwort:** B — 90 Minuten pro Prüfung.

---

**Frage 2:** Was bedeutet die Abkürzung PBQ?
- A) Performance-Based Question
- B) Practice-Based Quiz
- C) Pre-Board Question
- D) Personal Benchmark Query

**Antwort:** A — Performance-Based Question.

---

**Frage 3:** Welche A+-Prüfung behandelt Betriebssysteme und Sicherheit?
- A) 220-1101 (Core 1)
- B) 220-1102 (Core 2)
- C) 220-1103 (Core 3)
- D) 220-1104 (Core 4)

**Antwort:** B — 220-1102 (Core 2) behandelt Operating Systems, Security und Software Troubleshooting.

---

**Frage 4:** Welches ist die beste Methode, um Prüfungsangst zu reduzieren?
- A) Viele neue Themen kurz vor der Prüfung lernen
- B) Simulationsprüfungen unter realen Bedingungen absolvieren
- C) Ausreichend Schlaf in der Nacht vor der Prüfung
- B) Koffein in großen Mengen konsumieren

**Antwort:** B — Simulationsprüfungen schaffen Vertrautheit mit dem Format und reduzieren Unsicherheit.

---

**Frage 5:** Was ist der wichtigste Bestandteil der Ticket-Dokumentation?
- A) Lange, komplexe Sätze
- B) Alle Schritte, Befunde und Lösungen nachvollziehbar dokumentieren
- C) Nur das Endergebnis notieren
- D) Persönliche Meinungen zum Benutzer einfügen

**Antwort:** B — Nachvollziehbarkeit ist das A und O der Dokumentation.

---

## Ticket-Szenario

**Situation:**

Du bist der IT-Support der Muster GmbH (50 Mitarbeiter). Am Montagmorgen kommen drei Tickets gleichzeitig:

- **T1 (P1):** Der Server im Raum 100 startet nicht mehr. Alle Mitarbeiter haben keinen Zugriff auf die Freigaben. Chef ist informiert.
- **T2 (P2):** Buchhaltung meldet: Excel öffnet nicht mehr — seit dem Update letzte Woche.
- **T3 (P3):** Neue Mitarbeiterin (heute erster Tag) braucht einen Arbeitsplatz: Monitor, Tastatur, Zugang zu Teams und E-Mail.

**Aufgabe:**

1. Priorisiere die Tickets und begründe deine Reihenfolge.
2. Beschreibe deine Diagnose für T1 in 4 Schritten.
3. Was ist dein erster Schritt bei T2?
4. Erstelle eine Checkliste für T3 (neuer Arbeitsplatz).

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorisierung:**

| Ticket | Priorität | Begründung |
|--------|-----------|------------|
| T1 | P1 | Kompletter Serverausfall, kein Workaround, alle betroffen |
| T2 | P2 | Einzelne Software, Workaround möglich (anderes Office-Programm) |
| T3 | P3 | Standard-Request, kein Produktionsstopp |

**2. Diagnose T1 (Server-Ausfall):**

1. **Physikalische Prüfung:** Ist der Server angeschlossen? LED-Status? Lüfter?
2. **POST/BIOS:** Einstecken und beobachten — Fehlermeldungen notieren
3. **Monitor anschließen:** Bekomme ich ein Bild? BIOS-Post-Codes deuten auf Hardware-Fehler hin
4. **Hardware isolate:** Netzteil, RAM, Kabel prüfen — ggf. Ersatzteile testen

**3. Erster Schritt T2 (Excel-Problem):**

- Windows Update-Verlauf prüfen: `Einstellungen → Windows Update → Updateverlauf`
- Reparatur von Office starten: `Systemsteuerung → Programme → Microsoft Office → Ändern → Schnellreparatur`
- Alternativ: Office-Reparatur über `C:\Program Files\Microsoft Office\root\Office16\officec2rclient.exe` (Version variiert)

**4. Checkliste T3 (neuer Arbeitsplatz):**

- [ ] PC/Laptop bereitstellen und anschließen
- [ ] Windows-Benutzerkonto im AD anlegen
- [ ] E-Mail-Postfach erstellen und Outlook konfigurieren
- [ ] Teams-Client installieren und anmelden
- [ ] Drucker-Zugriff einrichten
- [ ] NTFS-Rechte auf benötigte Freigaben setzen
- [ ] Willkommens-E-Mail mit Zugangsdaten versenden
- [ ] Erstlogin und Funktionstest durchführen

</details>

---

## Quellen

- [CompTIA A+ Zertifizierung](https://www.comptia.org/certifications/a) — abgerufen am 2026-10-19
- [Microsoft Learn](https://learn.microsoft.com/de-de/training/) — abgerufen am 2026-10-19
- [IHK — Industrie- und Handelskammer](https://www.ihk.de/) — abgerufen am 2026-10-19
- [Microsoft Windows Dokumentation](https://learn.microsoft.com/de-de/windows/) — abgerufen am 2026-10-19