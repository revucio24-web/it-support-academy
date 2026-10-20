---
title: "Modul 15: Backup, Recovery, Patch-Management"
level: 2
module: 15
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wbadmin"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-manage-updates-wsus"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows/privacy/windows-diagnostic-data"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows/whats-new/whats-new-windows-11-version-23h2"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du kennst die wichtigsten Backup-Typen (Voll-, Differenzial-, Inkrementell) und kannst sie unterscheiden
2. Du verstehst die 3-2-1-Backup-Regel und kannst sie in einem Szenario anwenden
3. Du beherrschst die Windows-Tools für Backup und Recovery (Dateiversionshistorie, Sicherung und Wiederherstellung, Systemimage)
4. Du kennst den Unterschied zwischen System-Image-Backup und Datei-Backup
5. Du verstehst die Grundlagen des Patch-Managements und kennst die verschiedenen Patch-Typen
6. Du kannst ein sicheres Update- und Patch-Verfahren für Windows-Systeme beschreiben

---

## Theorie

### 1. Backup — Grundlagen

Ein Backup ist eine Kopie von Daten, die im Falle eines Datenverlusts (Hardware-Defekt, Ransomware, Löschfehler, Diebstahl) zur Wiederherstellung dient. Das Ziel eines Backups ist **nicht** die Datensicherung an sich, sondern die **Wiederherstellbarkeit** — ein Backup, das nicht wiederhergestellt werden kann, ist wertlos.

**Die 3-2-1-Regel (empfohlenes Backup-Konzept):**

| Regel | Bedeutung |
|-------|-----------|
| **3** | Drei Kopien der Daten (Original + 2 Backups) |
| **2** | Zwei verschiedene Speichermedien (z. B. HDD + USB-Stick oder HDD + Cloud) |
| **1** | Eine Kopie extern / offline (gegen Ransomware und Diebstahl) |

> **Quelle:** Microsoft Learn, „Backup and restore" — abgerufen am 2026-10-19; CompTIA A+ (220-1102), Backup-Strategien — abgerufen am 2026-10-19.

### 2. Backup-Typen

| Typ | Beschreibung | Wiederherstellung | Speicherbedarf |
|-----|--------------|-------------------|----------------|
| **Vollbackup** (Full) | Sichert alle ausgewählten Daten vollständig | Schnell (ein Satz) | Hoch |
| **Differenzialbackup** | Sichert alle Daten, die sich seit dem letzten Vollbackup geändert haben | Mittel (Voll + letztes Differenzial) | Mittel |
| **Inkrementellbackup** | Sichert nur Daten, die sich seit dem letzten Backup (egal welcher Art) geändert haben | Langsam (Voll + alle Inkrementale seitdem) | Niedrig |

> **Quelle:** CompTIA A+ (220-1102), „Backup and recovery concepts" — abgerufen am 2026-10-19.

**Beispiel-Zeitplan (Voll + Differenzial):**
- Montag: Vollbackup (500 GB)
- Dienstag: Differenzial (12 GB)
- Mittwoch: Differenzial (15 GB)
- Donnerstag: Differenzial (9 GB)
- Freitag: Vollbackup (neue Basis)

**Wiederherstellung am Donnerstag:** Vollbackup vom Montag + Differenzial vom Donnerhtag (2 Bänder/Sätze).

### 3. Windows-Backup-Tools

Windows 11 bietet mehrere integrierte Tools für Backup und Recovery:

| Tool | Zweck | Zugriff |
|------|-------|---------|
| **Dateiversionshistorie** | Sichert persönliche Dateien regelmäßig auf Laufwerk/NAS | Einstellungen → System → Speicher → Erweiterte Speichereinstellungen → Dateiversionshistorie |
| **Sicherung und Wiederherstellung (Windows 7)** | Erstellt Datei-Backups und Systemimages | Systemsteuerung → System und Sicherheit → Sicherung und Wiederherstellung (Windows 7) |
| **Systemimage** | Komplettes Abbiss des Laufwerks in einer VHDX-Datei | Wird über „Sicherung und Wiederherstellung" erstellt |
| **wbadmin.exe** | Kommandozeilen-Tool für Backup und Recovery | Eingabeaufforderung / PowerShell (Admin) |
| **Wiederherstellungsmedium** | USB-Stick zum Reparieren/Installieren des Systems | Einstellungen → System → Wiederherstellung → Wiederherstellungslaufwerk |

> **Quelle:** Microsoft Learn, „wbadmin" — abgerufen am 2026-10-19; Microsoft Learn, „Dateiversionshistorie" — abgerufen am 2026-10-19; CompTIA A+ (220-1102), „Windows recovery tools" — abgerufen am 2026-10-19.

**Wichtig:** Die „Sicherung und Wiederherstellung (Windows 7)" ist in Windows 11 weiterhin vorhanden, wird aber nicht mehr aktiv weiterentwickelt. Für moderne Backup-Lösungen empfiehlt Microsoft Drittanbieter-Tools oder OneDrive.

> **Quelle:** Microsoft Learn, „Sicherung und Wiederherstellung in Windows 11" — abgerufen am 2026-10-19.

### 4. System-Image-Backup vs. Datei-Backup

| Merkmal | System-Image-Backup | Datei-Backup |
|---------|---------------------|--------------|
| **Inhalt** | Komplettes Laufwerk (Windows, Programme, Einstellungen, Dateien) | Ausgewählte Ordner und Dateien |
| **Wiederherstellung** | Komplettes System auf identische Hardware | Einzelne Dateien oder Ordner |
| **Größe** | Sehr groß (hunderte GB) | Abhängig von Daten |
| **Verwendung** | Totalausfall, Hardware-Defekt | Gelöschte Dateien, einzelne Wiederherstellung |
| **Hardware-Abhängigkeit** | Ja — Wiederherstellung nur auf identische oder ähnliche Hardware | Nein — Dateien übertragbar |

> **Quelle:** CompTIA A+ (220-1102), „Image vs. file-level backup" — abgerufen am 2026-10-19.

### 5. Recovery — Grundlagen

Recovery ist der Prozess der Wiederherstellung von Daten, Dateien oder dem gesamten System aus einem Backup. Wichtige Konzepte:

**Wiederherstellungs-Modi (Windows 11):**

| Modus | Beschreibung |
|-------|--------------|
| **Systemwiederherstellung** | Setzt System auf einen früheren Wiederherstellungspunkt zurück |
| **Systemimage-Wiederherstellung** | Stellt das komplette System aus einem System-Image wieder her |
| **Windows neu installieren** | Saubere Installation über USB-/ISO-Medium |
| **Erweiterter Start** | Startet in die Windows-Wiederherstellungsumgebung (WinRE) |

**Zugriff auf die Windows-Wiederherstellungsumgebung (WinRE):**
- Einstellungen → System → Wiederherstellung → Erweiterter Start (sofort neu starten)
- Oder: Shift + Neustart

> **Quelle:** Microsoft Learn, „Windows Recovery Environment" — abgerufen am 2026-10-19.

**Wichtige Regel:** Recovery-Pläne müssen **regelmäßig getestet** werden. Ein ungetestetes Backup ist ein Backup ohne Gewähr.

> **Quelle:** CompTIA A+ (220-1102), „Disaster recovery" — abgerufen am 2026-10-19.

### 6. Patch-Management

Patch-Management ist der Prozess der Planung, Testung, Installation und Verwaltung von Software-Updates (Patches) auf Systemen.

**Patch-Typen:**

| Typ | Beschreibung | Beispiel |
|-----|--------------|----------|
| **Quality Update** | Sicherheitsupdates, Bugfixes, kumulierte Updates | „KB5034441" |
| **Feature Update** | Neue Windows-Version, größere Funktionen | Windows 11 23H2 → 24H2 |
| **Driver Update** | Treiber-Updates für Hardware-Geräte | NVIDIA-Treiber-Update |
| **Definition Update** | Aktualisierung von Viren-Definitionen | Microsoft Defender Antivirus-Update |

**Windows Update-Kategorien:**
- **Sicherheitsupdates** — schließen Sicherheitslücken (kritisch)
- **Nicht-Sicherheitsupdates** — Verbesserungen, neue Funktionen
- **Optionale Updates** — Treiber, Feature Updates, nicht-kritische Verbesserungen

> **Quelle:** Microsoft Learn, „Windows Update for Business" — abgerufen am 2026-10-19.

### 7. WSUS und zentrales Patch-Management

Für Unternehmen bietet Microsoft **WSUS (Windows Server Update Services)** die zentrale Verwaltung von Updates:

- Administratoren genehmigen oder lehnen Updates vor der Verteilung ab
- Updates werden intern auf einem Server zwischengespeichert
- Clients ziehen Updates statt aus dem Internet
- Berichtsfunktion zur Update-Compliance

**Alternative in Windows 11:** Windows Update for Business (cloud-basiert) ermöglicht ringweise Rollouts und Rückzugsmechanismen.

> **Quelle:** Microsoft Learn, „Manage updates with WSUS" — abgerufen am 2026-10-19.

### 8. Patch-Management-Prozess (Best Practice)

1. **Inventarisieren** — alle Systeme und Software auflisten
2. **Bewerten** — Updates auf Relevanz und Risiko prüfen
3. **Testen** — Updates in einer Testumgebung installieren
4. **Planen** — Wartungsfenster festlegen
5. **Bereitstellen** — Updates auf Zielsysteme verteilen
6. **Verifizieren** — Erfolg prüfen, Dokumentation aktualisieren

> **Quelle:** CompTIA A+ (220-1102), „Patch management" — abgerufen am 2026-10-19.

---

## Praxis-Übung im Homelab

### Übung: Backup-Strategie erstellen und Recovery testen

**Vorbereitung:**
- Windows 11 VM oder Test-PC
- Externes USB-Laufwerk oder Netzlaufwerk

**Aufgabe:**

1. **Backup-Typen vergleichen:**
   - Erstelle ein Vollbackup (Sicherung und Wiederherstellung → Einstellungen → Sicherung einrichten)
   - Ändere eine Datei und erstelle ein Differenzialbackup (nächste geplante Sicherung starten)
   - Vergröße der Backups (Rechtsklick → Eigenschaften)

2. **Dateiversionshistorie konfigurieren:**
   - Einstellungen → System → Speicher → Erweiterte Speichereinstellungen → Dateiversionshistorie
   - Laufwerk auswählen
   - Einen Ordner zur Sicherung hinzufügen
   - Eine Datei ändern und eine frühere Version wiederherstellen

3. **Wiederherstellungsmedium erstellen:**
   - Einstellungen → System → Wiederherstellung → Wiederherstellungslaufwerk
   - USB-Stick (mindestens 16 GB) auswählen und erstellen

4. **Systemimage erstellen:**
   - Systemsteuerung → System und Sicherheit → Sicherung und Wiederherstellung (Windows 7) → Systemimage erstellen
   - Auf externes Laufwerk sichern

5. **Patch-Status prüfen:**
   - Einstellungen → Windows Update → Updateverlauf
   - Notiere die letzten 5 installierten Updates
   - Prüfe, ob ein neues Update verfügbar ist

**Erwartetes Ergebnis:**

| Schritt | Ergebnis |
|---------|----------|
| Vollbackup | VHDX-Datei auf USB-Laufwerk (ca. 20–40 GB je nach System) |
| Differenzialbackup | Kleinere Datei als Vollbackup |
| Dateiversionshistorie | Datei in früherer Version wiederherstellbar |
| Wiederherstellungsmedium | Bootfähiger USB-Stick |
| Systemimage | VHDX-Datei mit komplettem Systemabbiss |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Backup ohne Recovery-Test

- **Symptom:** Nach einem Hardware-Defekt stellt sich heraus, dass das Backup beschädigt oder unlesbar ist
- **Ursache:** Backup wurde erstellt, aber nie eine Wiederherstellung getestet
- **Diagnose-Schritte:**
  1. Prüfe die Backup-Datei auf Integrität (Größe, Zeitstempel)
  2. Versuche eine einzelne Datei aus dem Backup wiederherzustellen
  3. Prüfe, ob das Backup-Laufwerk lesbar ist
- **Lösung:**
  - Recovery-Test durchführen (mindestens quartalsweise)
  - Backup auf neues Medium migrieren, falls Fehler erkannt
  - Zwei Backup-Medien verwenden (3-2-1-Regel)
- **Prävention:** Automatisierte Recovery-Tests in den Backup-Zeitplan integrieren

---

### Fehler 2: System-Image auf anderer Hardware wiederhergestellt

- **Symptom:** BSOD (Blue Screen) nach Systemimage-Wiederherstellung auf einen anderen PC
- **Ursache:** Systemimage ist hardwaregebunden (andere CPU, Chipsatz, Treiber)
- **Diagnose-Schritte:**
  1. Starte im abgesicherten Modus (F8 oder Shift + Neustart)
  2. Prüfe die angeschlossenen Treiber (Geräte-Manager)
  3. Deinstalliere Hardware-spezifische Treiber
- **Lösung:**
  - Treiber der Zielhardware installieren
  - Falls nicht bootfähig: Wiederherstellungsmedium verwenden und Reparatur starten
- **Prävention:** Systemimages nur für identische Hardware verwenden; für Hardwarewechsel Dateibackup + saubere Installation bevorzugen

---

### Fehler 3: Patches ohne Test direkt auf Produktivsysteme

- **Symptom:** Nach dem Update startet ein kritischer Dienst nicht mehr (z. B. Datenbank, Buchhaltungs-Software)
- **Ursache:** Update wurde ohne Testumgebung auf allen Systemen gleichzeitig installiert
- **Diagnose-Schritte:**
  1. Updateverlauf prüfen (Einstellungen → Windows Update → Updateverlauf)
  2. Identifiziere das zuletzt installierte Update
  3. Prüfe Hersteller-Kompatibilität der betroffenen Software
- **Lösung:**
  - Problematic Update deinstallieren (Updateverlauf → Updates deinstallieren)
  - Warten auf Korrektur-Update
  - Auf betroffenen Systemen Update pausieren
- **Prävention:** Ringweiser Rollout — erst Testgruppe, dann Pilotgruppe, dann gesamte Produktionsumgebung

---

### Fehler 4: Kein Offline-Backup — Ransomware verschlüsselt auch Backup-Laufwerk

- **Symptom:** Sowohl Produktionsdaten als auch das angeschlossene Backup-Laufwerk sind verschlüsselt
- **Ursache:** Backup-Laufwerk war dauerhaft angeschlossen und wurde von der Ransomware mitverschlüsselt
- **Diagnose-Schritte:**
  1. Prüfe, welche Laufwerke verschlüsselt sind (Dateierweiterung, Readme-Datei)
  2. Identiziere die Ransomware-Variante
  3. Prüfe, ob ein offline Backup (nicht angeschlossen) existiert
- **Lösung:**
  - Offline-Backup herstellen
  - Falls nicht vorhanden: Versuch einer Entschlüsselung (NoMoreRansom.org) oder neu aufsetzen
- **Prävention:** Mindestens ein Backup-Laufwerk physischalisch trennen oder Cloud-Backup mit Versionierung verwenden

---

## Mini-Quiz

**Frage 1:** Was besagt die 3-2-1-Backup-Regel?
- A) 3 Backups, 2 Medien, 1 Cloud
- B) 3 Kopien der Daten, 2 verschiedene Medien, 1 Kopie offline
- C) 3 verschiedene Backup-Typen, 2 Wiederherstellungen, 1 Test
- D) 3 Tage zwischen Backups, 2 Laufwerke, 1 Administrator

**Antwort:** B — 3 Kopien, 2 Medien, 1 Kopie offline.

---

**Frage 2:** Welcher Backup-Typ benötigt bei der Wiederherstellung das Vollbackup UND alle Inkrementaldaten?
- A) Vollbackup
- B) Differenzialbackup
- C) Inkrementellbackup
- D) Systemimage

**Antwort:** C — Inkrementelle Backups brauchen die komplette Sequenz.

---

**Frage 3:** Was ist der Hauptunterschied zwischen einem System-Image-Backup und einem Datei-Backup?
- A) Ein System-Image ist immer kleiner
- B) Ein System-Image enthält Windows, Programme, Einstellungen und Dateien; ein Datei-Backup nur ausgewählte Dateien
- C) Ein Datei-Backup ist schneller
- D) Es gibt keinen Unterschied

**Antwort:** B — System-Image = komplettes Laufwerk, Datei-Backup = ausgewählte Dateien.

---

**Frage 4:** Was bedeutet WSUS?
- A) Windows System Update Service
- B) Windows Server Update Services
- C) Windows Security Update System
- D) Windows Software Update Service

**Antwort:** B — Windows Server Update Services.

---

**Frage 5:** Warum muss ein Backup regelmäßig auf Wiederherstellbarkeit getestet werden?
- A) Weil Microsoft es vorschreibt
- B) Weil sich sonst die Backup-Datei automatisch löscht
- C) Weil nur ein erfolgreicher Recovery-Test die Integrität beweist
- D) Weil das Backup-Laufwerk sonst defekt wird

**Antwort:** C — Nur ein erfolgreicher Recovery-Test beweist, dass das Backup brauchbar ist.

---

## Ticket-Szenario

**Situation:**
Die Buchhaltung meldet: "Seit dem Windows Update gestern Abend startet Excel nicht mehr. Es kommt sofort ein Fehler 'Excel kann nicht gestartet werden'. Wir müssen heute die Monatsabschluss machen — bitte schnell!"

**Aufgabe:**
1. Was ist die Priorität dieses Tickets?
2. Wie gehst du bei der Diagnose vor?
3. Wie löst du das Problem?
4. Was ist die langfristige Prävention?

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P1 (Kritisch) — die Buchhaltung kann nicht arbeiten, betriebskritisch.

**2. Diagnose:**
- Prüfe den Updateverlauf (Einstellungen → Windows Update → Updateverlauf)
- Identifiziere das Update vor dem Problemstart
- Prüfe, ob weitere Benutzer betroffen sind (Hardware- oder softwareseitig)
- Prüfe das Anwendungsereignisprotokoll (Ereignisanzeige → Windows-Protokolle → Anwendung)

**3. Lösung:**
- Problematic Update deinstallieren: Einstellungen → Windows Update → Updateverlauf → Updates deinstallieren → das betroffende KB entfernen
- Alternativ: Systemwiederherstellung auf einen Punkt vor dem Update
- Falls Excel weiterhin nicht startet: Office-Reparatur starten (Einstellungen → Apps → Installierte Apps → Microsoft 365 → Ändern → Schnellreparatur)

**4. Prävention:**
- Patch-Management mit Testgruppe einführen
- Updates nicht auf allen Systemen gleichzeitig ausrollen
- Ringweiser Rollout: Test → Pilot → Produktion

</details>

---

## Quellen

- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
- [Microsoft Learn — wbadmin (Windows Server Backup CLI)](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wbadmin) — abgerufen am 2026-10-19
- [Microsoft Learn — Manage updates with WSUS](https://learn.microsoft.com/en-us/windows/deployment/update/waas-manage-updates-wsus) — abgerufen am 2026-10-19
- [Microsoft Learn — Windows Recovery Environment](https://learn.microsoft.com/en-us/windows/whats-new/whats-new-windows-11-version-23h2) — abgerufen am 2026-10-19
- [Microsoft Learn — Windows Update for Business](https://learn.microsoft.com/en-us/windows/deployment/update/waas-manage-updates-wsus) — abgerufen am 2026-10-19
