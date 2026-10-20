---
title: "Modul 2: Hardware — PC-Aufbau, Diagnose, Peripherie, Drucker"
level: 1
module: 2
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
  - url: "https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/modules/troubleshoot-device-driver-failures/2-examine-tools-manage-troubleshoot-device-drivers"
    abrufdatum: 2026-10-19
  - url: "https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-not-found-and-printer-not-recognized-errors-in-windows"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du kennst die wichtigsten PC-Komponenten und kannst ihre Funktion beschreiben
2. Du kannst den Aufbau eines PCs (Desktop) erklären und kennst die Bauformen
3. Du beherrschst die grundlegende Hardware-Diagnose (POST, Beep-Codes, Bluescreen)
4. Du kennst gängige Peripheriegeräte und deren Anschlüsse und kannst Verbindungsprobleme eingrenzen
5. Du kannst Drucker-Fehler systematisch diagnostizieren und beheben

---

## Theorie

### 1. PC-Aufbau — Die Hauptkomponenten

Der PC (Personal Computer) besteht aus mehreren zentralen Komponenten, die auf der Motherboard miteinander verbunden sind. Der Support-Techniker muss diese Komponenten identifizieren, verstehen und bei Austausch korrekt handhaben können.

| Komponente | Funktion | Typische Fehler |
|------------|----------|-----------------|
| **CPU** (Prozessor) | Führt alle Berechnungen aus | Überhitzung, falscher Sockel, defekt |
| **RAM** (Arbeitsspeicher) | Temporäre Speicherung von Daten | Defekte Module, falscher Typ, falscher Sitz |
| **SSD/HDD** (Massenspeicher) | Permanente Speicherung von OS und Daten | Boot-Fehler, Datenverlust, langsame Ladezeiten |
| **GPU** (Grafikkarte) | Berechnet Bildausgabe für Monitor | Artefakte, Überhitzung, Treiberprobleme |
| **PSU** (Netzteil) | Versorgt alle Komponenten mit Strom | Kein Start,Spannungsschwankungen, defekt |
| **Motherboard** | Verbindet alle Komponenten | Defekte Anschlüsse, BIOS-Fehler, defekte Anschlüsse |
| **Gehäuse** | Schutz und Montage aller Komponenten | Überhitzung, defekte Lüfter |

**Wichtig beim PC-Aufbau:** Immer an Erdung denken (anti-statisches Armband oder Gehäuse berühren), bevor Komponenten berührt werden. PSU nie im Netzbetrieb öffnen. (Quelle: CompTIA A+ 220-1101, Hardware Domain, abgerufen am 2026-10-19)

### 2. Bauformen und Faktoren

Die gängigsten Desktop-Bauformen:

| Bauform | Typische Anwendung | Merkmal |
|---------|-------------------|---------|
| **ATX** | Standard-Desktop-PC | Vollausbau, viele PCIe-Slots |
| **Micro-ATX (mATX)** | Kompakte Desktops | Kleinere Platine, weniger Slots |
| **Mini-ITX** | HTPC, kleine Systeme | Sehr kompakt, 1 PCIe-Slot |

**Sockel-Kompatibilität:** CPU, RAM und Motherboard müssen zueinander passen. Eine Intel CPU passt nicht zu einem AMD-Sockel und umgekehret. DDR4-RAM passt nicht in einen DDR5-Sockel. (Quelle: CompTIA A+ 220-1101, Hardware Domain, abgerufen am 2026-10-19)

### 3. BIOS/UEFI

Das BIOS (Basic Input/Output System) bzw. UEFI (Unified Extensible Firmware Interface) ist die Firmware, die beim Starten geläuft und die Hardware initialisiert wird. Es wird häufig bei der Hardware-Diagnose verwendet.

**Wichtige BIOS/UEFI-Einstellungen:**
- Boot-Reihenfolge (Boot Order)
- RAM-Takt und -Konfiguration
- CPU-Temperaturen und Lüfterdrehzahlen
- Secure Boot
- SATA-Modus (AHCI/RAID)

**Zugang:** Beim Starten eine bestimmte Taste drücken (häufig Entf oder F2, je nach Hersteller). (Quelle: Professor Messer, 220-1101, 220-1101-video, abgerufen am 2026-10-19)

### 4. POST und Beep-Codes

Der POST (Power On Self Test) ist ein Selbsttest, der beim Hochfahren die Hauptkomponenten (CPU, RAM, GPU, Storage) prüft, bevor das Betriebssystem geladen wird.

**POST-Fehler werden durch:**
- Bildschirm-Fehlermeldungen (bei Grafikinitialisierung)
- Beep-Codes (Muster von Pieptönen, kein Bild)
- Debug-LEDs oder Post-Code-Displays auf der Motherboard

**Beispiele gängiger Beep-Code-Muster (Herstellerspezifisch):**

| Muster | Mögliche Bedeutung |
|--------|-------------------|
| 1 kurzer Beep | POST erfolgreich (normaler Start) |
| 1 kurzer + 1 kurzer | POST-Fehler (je nach BIOS-Hersteller unterschiedlich) |
| Dauerhaft piept | RAM oder GPU-Problem |
| 1 lang + 2 kurz | Grafikkarte nicht erkannt oder defekt |

**Wichtig:** Die genaue Bedeutung der Beep-Codes variiert je nach BIOS-Hersteller (AMI, Award, Phoenix). Immer die Dokumentation des Motherboard-Herstellers konsultieren. (Quelle: Professor Messer, 220-1101, 5.2, abgerufen am 2026-10-19)

### 5. Bluescreen (BSOD)

Der "Blue Screen of Death" (Stop-Fehler) ist ein kritischer Windows-Fehler, bei dem das System angehalten wird, um Datenverlust zu vermeiden.

**Typische BSOD-Fehlercodes:**
- **MEMORY_MANAGEMENT**: RAM-Problem
- **CRITICAL_PROCESS_DIED**: Systemprozess beendet
- **DRIVER_IRQL_NOT_LESS_OR_EQUAL**: Treiberproblem (häufig Netzwerk-/Grafiktreiber)
- **NTFS_FILE_SYSTEM**: Dateisystem-Fehler
- **KERNEL_DATA_INPAGE_ERROR**: Storage-/RAM-Problem

**Vorgehen bei BSOD:**
1. Fehlercode notieren
2. System neu starten
3. Falls reproduzierbar: Treiber aktualisieren
4. Windows Event Viewer prüfen
5. RAM testen (Windows Memory Diagnostic)
6. Speicher testen (chkdsk)

(Quelle: Microsoft Learn, "Examine tools for managing and troubleshooting device drivers", abgerufen am 2026-10-19)

### 6. Windows-Diagnose-Tools

| Tool | Zweck | Aufruf |
|------|-------|--------|
| **Device Manager** | Geräte- und Treiberverwaltung | `devmgmt.msc` oder Start → Geräte-Manager |
| **System Information** | Hardware-Informationen einsehen | `msinfo32` |
| **Windows Memory Diagnostic** | RAM-Test | `mdsched.exe` |
| **Check Disk** | Dateisystem-Fehler prüfen | `chkdsk /f /r` |
| **SFC** | Systemdateien reparieren | `sfc /scannow` |
| **DISM** | Windows-Image reparieren | `DISM /Online /Cleanup-Image /RestoreHealth` |
| **Task Manager** | Prozesse und Ressourcen | Strg+Umschalt+Esc |

(Quelle: Microsoft Learn, "Examine tools for managing and troubleshooting device drivers", abgerufen am 2026-10-19)

### 7. Peripherie — Anschlüsse und Klassen

| Anschlüsse | Max. Datenrate (theoretisch) | Typische Geräte |
|------------|------------------------------|-----------------|
| USB 2.0 | 480 Mbit/s | Tastatur, Maus, Stick |
| USB 3.2 Gen 1 | 5 Gbit/s | SSD, Drucker |
| USB 3.2 Gen 2 | 10 Gbit/s | externe SSD, Hub |
| USB4/Thunderbolt 3 | 40 Gbit/s | Docking, externe GPU |
| HDMI 2.1 | 48 Gbit/s | Monitor, Beamer |
| DisplayPort 2.1 | 80 Gbit/s | Monitor |
| Bluetooth 5.3 | 3 Mbit/s | Tastatur, Maus, Kopfhörer |
| RJ-45 (Ethernet) | 1–10 Gbit/s | Netzwerk |
| 3,5 mm Klinke | Analog | Kopfhörer, Mikrofon |

**Hinweis:** Die tatsächliche Datenrate hängt vom schwächsten Glied der Kette ab (Kabel, Gerät, Port). Ein USB-3.0-Gerät an einem USB-2.0-Port läuft mit USB-2.0-Geschwindigkeit. (Quelle: CompTIA A+ 220-1101, Hardware Domain, abgerufen am 2026-10-19)

### 8. Drucker — Typen und Funktionsweise

| Typ | Funktionsweise | Typische Anwendung |
|-----|----------------|-------------------|
| **Tintenstrahldrucker** | Tinte wird durch Düsen spritzgedrückt | zu Hause, kleine Büros, Fotos |
| **Laserdrucker** | Toner wird mit Hitze fixiert | Büro, große Mengen, schwarz/weiß |
| **Thermodrucker** | Wärme erzeugt Punkte auf thermischem Papier | Kassen, Quittungen, Labels |
| **Matrixdrucker** | Nadeln schlagen Farbband | Mehrfachformulare, Industrie |

**Druckertreiber und -Wartung:**
- Treiber installieren (Windows Update oder Hersteller-Website)
- Druckwarteschlange leeren (bei Hängern)
- Testseite drucken
- Farbkalibrierung durchführen
- Papierstaus beheben
- Reinigungsmuster/Modus ausführen

(Quelle: Professor Messer, 220-1101, 5.6, abgerufen am 2026-10-19)

---

## Praxis-Übung im Homelab

### Übung: PC-Komponenten identifizieren und Diagnose durchführen

**Vorbereitung:**
- Öffne die Systeminformation auf deinem Windows-11-PC: `msinfo32`
- Öffne den Geräte-Manager: `devmgmt.msc` oder Start → "Geräte-Manager"
- Öffne den Task-Manager: Strg+Umschalt+Esc

**Aufgabe:**

1. **Systeminformation sammeln:**
   - CPU-Modell: \_\_\_\_\_\_\_\_\_\_\_\_\_
   - Installierter RAM (GB): \_\_\_\_\_\_\_\_\_\_\_\_\_
   - Systemtyp (32/64-bit): \_\_\_\_\_\_\_\_\_\_\_\_\_
   - Windows-Version: \_\_\_\_\_\_\_\_\_\_\_\_\_

2. **Geräte-Manager durchsuchen:**
   - Liste alle Gerätekategorien auf, die mindestens ein Gerät enthalten
   - Gibt es Geräte mit einem gelben Ausrufezeichen (!)?

3. **Ressourcen prüfen (Task-Manager → Leistung):**
   - CPU-Auslastung im Leerlauf: \_\_\_\_\_\_\_\_\_
   - RAM-Auslastung im Leerlauf: \_\_\_\_\_\_\_\_\_
   - Festplatten-Auslastung: \_\_\_\_\_\_\_\_\_

4. **Speicher prüfen:**
   - Führe `chkdsk` in der Eingabeaufforderung aus (als Administrator): `chkdsk C: /f` (Hinweis: Laufwerk C: ist möglicherweise beschützt; notiere das Ergebnis)
   - Falls nicht möglich: Start → "Eingabeaufforderung" → Rechtsklick → "Als Administrator ausführen" → `chkdsk C: /f /r` → Neustart bestätigen

5. **Treiber-Update prüfen:**
   - Geräte-Manager öffnen
   - Eine Kategorie wählen (z. B. "Netzwerkadapter")
   - Rechtsklick auf Gerät → "Treiber aktualisieren"
   - Dokumentiere, ob ein Update gefunden wurde

**Erwartetes Ergebnis:**
- Du kannst die wichtigsten Systeminformationen deines PCs ablesen
- Du kennst die Geräte-Manager-Funktion zur Treiber-Update-Prüfung
- Du kannst grundlegende Diagnose-Tools verwenden

---

## Berühmte Fehler + Lösungen

### Fehler 1: PC startet nicht — PSU-Problem

- **Symptom:** PC reagiert nicht auf den Power-Button, keine Lüfter, keine LEDs
- **Ursache:** Netzteil defekt oder nicht korrekt angeschlossen
- **Diagnose-Schritte:**
  1. Prüfe, ob das Netzkabel in der Steckdose und im PSU steckt
  2. Prüfe, ob der Netzschalter am PSU auf "I" (ein) steht
  3. Prüfe, ob das 24-Pin-Motherboard-Kabel und das 8-Pin-CPU-Kabel fest sitzen
  4. Falls verfügbar: PSU mit einem Multimeter testen oder gegen einen bekannten guten PSU tauschen
- **Lösung:**
  - PSU austauschen (nur durch geschultes Personal!)
  - Korrekte Wattzahl beachten (mindestens 20 % Reserve)
- **Prävention:** PSU-Auswahl immer mit Reserve planen, qualitativ hochwertige Komponenten verwenden

---

### Fehler 2: Blue Screen — RAM-Problem

- **Symptom:** PC startet, aber irgendwann BSOD mit MEMORY_MANAGEMENT oder CRITICAL_PROCESS_DIED
- **Ursache:** Defektes RAM-Modul oder falscher RAM-Typ
- **Diagnose-Schritte:**
  1. BSOD-Fehlercode notieren
  2. Windows Memory Diagnostic ausführen: `mdsched.exe` → Neustart
  3. Bei Fehler: Module einzeln testen (eines nach dem anderen entfernen)
  4. RAM-Typ mit Motherboard-Kompatibilität prüfen
- **Lösung:**
  - Defektes RAM-Modul austauschen
  - Module korrekt einsetzen (bis der Klick zu hören ist)
  - Kompatiblen RAM-Typ verwenden (DDR4/DDR5 je nach Motherboard)
- **Prävention:** RAM-Käufe immer an Motherboard-Sockel anpassen

---

### Fehler 3: USB-Gerät wird nicht erkannt

- **Symptom:** USB-Gerät angeschlossen, aber Windows zeigt nichts an oder "USB-Gerät nicht erkannt"
- **Ursache:** Treiberproblem, defektes Kabel, defekter USB-Port oder Gerät defekt
- **Diagnose-Schritte:**
  1. Gerät an einem anderen USB-Port testen
  2. Gerät an einem anderen PC testen
  3. Kabel tauschen
  4. Geräte-Manager → USB-Controller → Treiber aktualisieren
  5. Gerät deinstallieren und neu starten
- **Lösung:**
  - Treiber aktualisieren oder neu installieren
  - USB-Port oder Kabel austauschen
  - Falls Gerät defekt: Austausch
- **Prävention:** Hohe Kabelqualität verwenden, Geräte sicher entfernen (Safely Remove Hardware)

---

### Fehler 4: Drucker druckt nicht

- **Symptom:** Drucker ist angeschlossen, aber Druckaufträge bleiben in der Warteschlange oder es wird nichts gedruckt
- **Ursache:** Treiberproblem, Verbindungsproblem, Papierstau oder Druckerwarteschlange blockiert
- **Diagnose-Schritte:**
  1. Prüfe, ob Drucker eingeschaltet ist
  2. Prüfe die Verbindung (USB-Kabel oder Netzwerk)
  3. Prüfe die Druckwarteschlange: Start → "Drucker und Scanner" → Drucker wählen → "Druckwarteschlange öffnen"
  4. Falls Aufträge hängen: Warteschlause leeren (Alle Aufträge abbrechen)
  5. Testseite drucken: Einstellungen → Drucker → "Testseite drucken"
  6. Treiber prüfen: Geräte-Manager → Drucker → Treiber aktualisieren
- **Lösung:**
  - Druckwarteschlange leeren und neu starten
  - Treiber aktualisieren oder neu installieren
  - Verbindung prüfen (Kabel/Netzwerk)
  - Drucker-Einstellungen prüfen (Papier, Farbe, Duplex)
- **Prävention:** Regelmäßige Wartung, aktuelle Treiber, Druckwarteschlause bei Störungen zuerst prüfen

---

## Mini-Quiz

**Frage 1:** Was bedeutet POST?
- A) Power Off System Test
- B) Power On Self Test
- C) Peripheral Operation System Test
- D) Personal Office Startup Test

**Antwort:** B — Power On Self Test.

---

**Frage 2:** Ein PC startet nicht (keine Lüfter, keine LEDs). Was ist die wahrscheinlichste Ursache?
- A) Defekte Festplatte
- B) Defektes Netzteil
- C) Defekte Grafikkarte
- D) Defekter Monitor

**Antwort:** B — Defektes Netzteil (PSU-Problem).

---

**Frage 3:** Ein USB-Gerät wird nicht erkannt. Was ist der erste Schritt?
- A) Windows neu installieren
- B) An einem anderen USB-Port testen
- C) Treiber aktualisieren
- D) PC neu starten

**Antwort:** B — An einem anderen USB-Port testen.

---

**Frage 4:** Welcher Fehlercode deutet auf ein RAM-Problem hin?
- A) CRITICAL_PROCESS_DIED
- B) NTFS_FILE_SYSTEM
- C) MEMORY_MANAGEMENT
- D) DRIVER_IRQL_NOT_LESS_OR_EQUAL

**Antwort:** C — MEMORY_MANAGEMENT.

---

**Frage 5:** Was ist der erste Schritt bei einem Druckerproblem?
- A) Windows neu installieren
- B) Druckerwarteschlange prüfen und leeren
- C) Drucker zurücksetzen
- D) Treiber deinstallieren

**Antwort:** B — Druckerwarteschlange prüfen und leeren.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter meldet: "Ich habe gestern einen neuen USB-Hub angeschlossen und seitdem funktioniert meine Tastatur nicht mehr. Die Maus geht noch. Ich habe schon versucht, die Tastatur an einen anderen USB-Port zu stecken, aber nichts hilft. Ich muss dringend meine E-Mails beantworten."

**Aufgabe:**
1. Was ist die Priorität dieses Tickets?
2. Wie gehst du bei der Diagnose vor?
3. Wie löst du das Problem?
4. Dokumentiere den Fall für die Wissensdatenbank.

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P2 (Hoch) — E-Mail ist betriebskritisch, aber es gibt einen Workaround (Maus funktioniert, On-Screen-Tastatur).

**2. Diagnose:**
- Prüfe, ob der USB-Hub korrekt angeschlossen ist und Strom hat
- Prüfe im Geräte-Manager, ob die Tastatur erkannt wird
- Prüfe, ob die Tastatur direkt (ohne Hub) an einem USB-Port funktioniert
- Prüfe die USB-Treiber im Geräte-Manager
- Prüfe, ob die Tastatur in den Windows-Einstellungen aktiviert ist

**3. Lösung:**
- Tastatur direkt an einen USB-Port des PCs stecken (ohne Hub)
- Falls funktioniert: USB-Hub ist defekt oder liefert nicht genug Strom → Hub austauschen
- Falls nicht funktioniert: Tastatur defekt → austauschen
- Fallback: On-Screen-Tastatur verwenden (Windows: Windows-Taste + Strg + O)

**4. Dokumentation:**
- Problem: USB-Hub verursachte Konflikt mit Tastatur
- Ursache: USB-Hub defekt oder unterversorgt
- Lösung: Tastatur direkt an PC-Port anschließen
- Verifizierung: Tastatur funktioniert direkt angeschlossen

</details>

---

## Quellen

- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
- [Professor Messer — CompTIA 220-1101 A+ Training Course](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) — abgerufen am 2026-10-19
- [Microsoft Learn — Examine tools for managing and troubleshooting device drivers](https://learn.microsoft.com/en-us/training/modules/troubleshoot-device-driver-failures/2-examine-tools-manage-troubleshoot-device-drivers) — abgerufen am 2026-10-19
- [Microsoft Support — Fix printer not found and printer not recognized errors in Windows](https://support.microsoft.com/en-us/windows/hardware/printer/fix-printer-not-found-and-printer-not-recognized-errors-in-windows) — abgerufen am 2026-10-19
