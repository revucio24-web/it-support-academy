---
title: "Modul 10: Boot- und Wiederherstellungsprobleme — WinRE, SFC, DISM, BitLocker-Recovery"
level: 2
module: 10
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference?view=windows-11"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/recovery-overview"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/repair-a-windows-image?view=windows-11"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/answers/questions/2320913/using-system-file-checker-and-restoring-corrupted"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst den Windows-Recovery-Environment (WinRE) und kennst die Einstiegspunkte
2. Du kannst SFC (System File Checker) und DISM (Deployment Image Servicing and Management) erklären und anwenden
3. Du kennst die richtige Reihenfolge bei der Boot-Wiederherstellung
4. Du verstehst den BitLocker-Recovery-Prozess und kannst deaktivierte Laufwerke entsperren
5. Du kannst typische Boot-Fehler diagnostizieren und beheben

---

## Theorie

### 1. Windows Recovery Environment (WinRE)

WinRE (Windows Recovery Environment) ist eine Wiederherstellungsumgebung, die bei häufigen Ursachen für nicht startfähige Betriebssysteme zur Reparatur eingesetzt wird. WinRE basiert auf der Windows Preinstallation Environment (Windows PE) und kann mit zusätzlichen Treibern, Sprachen und Tools angepasst werden. WinRE ist standardmäßig in Windows 10 und Windows 11 für Desktop-Editionen (Home, Pro, Enterprise, Education) vorinstalliert.[Microsoft Learn — WinRE, 2026-10-19]

**Einstiegspunkte in WinRE:**

| Methode | Beschreibung |
|---------|--------------|
| Shift + Restart | Auf dem Anmeldebildschirm auf „Herunterfahren" klicken und beim Klick auf „Neustart" die Umschalttaste gedrückt halten |
| Einstellungen | Start > Einstellungen > Update & Sicherheit > Wiederherstellung > unter „Erweiterter Start" auf „Jetzt neu starten" klicken |
| Installationsmedium | Booten vom Windows-Installationsmedium und „Computer reparieren" wählen |
| Automatisch | Nach zwei aufeinanderfolgenden Fehlstarts, zwei unerwarteten Abschaltungen innerhalb von zwei Minuten nach dem Booten, Secure-Boot-Fehlern oder BitLocker-Fehlern auf Touch-Geräten[Microsoft Learn — WinRE, 2026-10-19][CompTIA A+, 2026-10-19] |

**Wichtige Tools in WinRE:**

- **Startup Repair** — Automatische Diagnose und Behebung von Boot-Problemen
- **System Restore** — Rückkehr zu einem früheren Wiederherstellungspunkt
- **System Image Recovery** — Wiederherstellung aus einem Systemimage
- **Command Prompt** — Manuelle Reparatur mit SFC, DISM, bootrec, chkdsk
- **Startup Settings** — Safe Mode, Boot-Protokoll, etc.

### 2. System File Checker (SFC)

System File Checker (SFC) ist ein Windows-Tool, das geschützte Systemdateien auf Korruption überprüft und bei Bedarf repariert. Der Befehl `sfc /scannow` scannt alle geschützten Systemdateien und ersetzt korrupte Dateien mit einer zwischengespeicherten Kopie aus `%WinDir%\System32\dllcache`.[Microsoft Learn — SFC, 2026-10-19]

**Wichtige SFC-Befehle:**

| Befehl | Beschreibung |
|---------|--------------|
| `sfc /scannow` | Scannt und repariert alle geschützten Systemdateien |
| `sfc /verifyonly` | Scannt nur, ohne Änderungen vorzunehmen |
| `sfc /scannow /offbootdir=D:\ /offwindir=D:\Windows` | Offline-Scan für Windows-Installationen, die nicht starten[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19] |

**Hinweis:** Wenn SFC meldet, dass es korrupte Dateien nicht reparieren konnte, sollte DISM ausgeführt werden, um das Windows-Image zu reparieren, und anschließend SFC erneut ausgeführt werden.[Microsoft Learn — SFC, 2026-10-19]

### 3. DISM — Deployment Image Servicing and Management

DISM (Deployment Image Servicing and Management) ist ein Befehlszeilentool, das Windows-Images und den Komponenten-Store (WinSxS) reparieren kann. DISM kann den Komponenten-Store scannen und reparieren, von dem SFC abhängig ist.[Microsoft Learn — WinRE, 2026-10-19][Microsoft Learn — BitLocker, 2026-10-19]

**Wichtige DISM-Befehle:**

| Befehl | Beschreibung |
|---------|--------------|
| `Dism /Online /Cleanup-Image /ScanHealth` | Scannt den Komponenten-Store auf Korruption |
| `Dism /Online /Cleanup-Image /CheckHealth` | Prüft, ob das Image als beschädigt markiert ist |
| `Dism /Online /Cleanup-Image /RestoreHealth` | Repariert das Image automatisch (benötigt Internet für Windows Update)[Microsoft Learn — WinRE, 2026-10-19][Microsoft Learn — BitLocker, 2026-10-19] |
| `Dism /Image:D:\ /Cleanup-Image /RestoreHealth` | Offline-Reparatur eines nicht startenden Systems[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19] |
| `Dism /Online /Cleanup-Image /RestoreHealth /Source:X:\sources\install.wim /LimitAccess` | Reparatur mit lokaler Quelle statt Windows Update[Microsoft Learn — WinRE, 2026-10-19] |

**SFC/DISM-Beziehung:** Wenn SFC geschützte Dateien nicht reparieren kann, weil der Komponenten-Store selbst beschädigt ist, muss DISM den Komponenten-Store reparieren. Nach erfolgreicher DISM-Reparatur sollte SFC erneut ausgeführt werden, um die Systemdateien zu reparieren.[Microsoft Learn — SFC, 2026-10-19][CompTIA A+, 2026-10-19]

### 4. BitLocker-Recovery

BitLocker ist Microsofts Festplattenverschlüsselungstechnologie, die in den Editionen Windows Pro und Enterprise verfügbar ist und ein TPM (Trusted Platform Module) verwenden kann. Wenn ein Laufwerk mit BitLocker geschützt ist und der Standard-Entsperrmodus fehlschlägt, wird der 48-stellige BitLocker-Recovery-Schlüssel benötigt.[Microsoft Learn — WinRE, 2026-10-19][CompTIA A+, 2026-10-19]

**BitLocker-Eintrittspunkte für Recovery:**

| Symptom | Vorgehen |
|---------|----------|
| BitLocker-Recovery-Bildschirm | 48-stelligen Recovery-Schlüssel eingeben |
| Keine Eingabe möglich | Power-Button 2–3× gedrückt halten, bis WinRE erscheint |
| WinRE verfügbar | Troubleshoot > Erweiterte Optionen > Eingabeaufforderung[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19] |

**Wichtige manage-bde-Befehle:**

| Befehl | Beschreibung |
|---------|--------------|
| `manage-bde -status C:` | Zeigt BitLocker-Status des Laufwerks C: |
| `manage-bde -unlock C: -rp <48-stelliger-Schlüssel>` | Entsperrt das Laufwerk mit dem Recovery-Kennwort[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19] |
| `manage-bde -protectors -disable C:` | Deaktiviert den BitLocker-Schutz temporär[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19] |
| `manage-bde -protectors -enable C:` | Reaktiviert den BitLocker-Schutz[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19] |

**Wo findet man den Recovery-Schlüssel?**
- Microsoft-Konto (online unter account.microsoft.com/devices/recoverykey)
- Active Directory (in Umgebungen mit Domäne)
- Ausgedruckt oder als Textdatei gespeichert
- USB-Stick

**Wichtig:** Wenn der Recovery-Schlüssel nicht gefunden werden kann, können die verschlüsselten Daten nicht entsperrt werden. Die einzige verbleibende Option ist ein Reset oder eine Neuinstallation von Windows, was die verschlüsselten Daten auf diesem Laufwerk löscht.[Microsoft Learn — Repair, 2026-10-19]

### 5. Boot-Reparatur-Toolchain (Reihenfolge)

Bei Boot-Problemen gibt es eine bewährte Reihenfolge der Reparaturwerkzeuge:

```
WinRE → Startup Repair → System Restore → chkdsk → SFC → DISM → Neuinstallation
```

| Schritt | Tool | Wann einsetzen |
|---------|------|----------------|
| 1 | Startup Repair | Automatische Reparatur von Boot-Problemen |
| 2 | System Restore | Problem trat nach einer Änderung auf |
| 3 | chkdsk /f /r | Dateisystem-Fehler oder fehlerhafte Sektoren |
| 4 | SFC /scannow | Korrupte Systemdateien |
| 5 | Dism /Online /Cleanup-Image /RestoreHealth | SFC kann nicht reparieren (Komponenten-Store defekt) |
| 6 | Neuinstallation | Letzte Option bei irreparablen Schäden[Microsoft Learn — SFC, 2026-10-19][CompTIA A+, 2026-10-19] |

---

## Praxis-Übung im Homelab

### Übung: WinRE-Wiederherstellung und BitLocker-Recovery simulieren

**Vorbereitung:**
- Windows 11 VM (Hyper-V, VirtualBox oder VMware)
- Windows 11 Installations-ISO (Media Creation Tool)
- USB-Stick (mind. 8 GB)

**Aufgabe:**

**Teil A — WinRE aufrufen und SFC/DISM durchführen:**

1. Starte die VM und melde dich an
2. Öffne die Einstellungen und navigiere zu: **System > Wiederherstellung > Erweiterter Start > Jetzt neu starten** (oder halte Shift gedrückt und klicke auf Neustart)
3. Wähle **Problembehandlung > Erweiterte Optionen > Eingabeaufforderung**
4. Identifiziere den Laufwerksbuchstaben der Windows-Partition mit `BCDEdit` — notiere den Wert neben `osdevice`
5. Führe SFC offline aus: `sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows`
6. Führe DISM offline aus: `Dism /Image:C:\ /Cleanup-Image /RestoreHealth`
7. Starte den PC neu und prüfe, ob Windows normal startet

**Teil B — BitLocker-Recovery simulieren:**

1. Aktiviere BitLocker auf einem Testlaufwerk (z. B. USB-Stick): `manage-bde -on C: -recoverypassword`
2. Notiere den angezeigten 48-stelligen Recovery-Schlüssel
3. Starte den PC neu und unterbreche den Bootvorgang 2–3× mit dem Power-Button, bis WinRE erscheint
4. Navigiere zu **Problembehandlung > Erweiterte Optionen > Eingabeaufforderung**
5. Entsperre das Laufwerk: `manage-bde -unlock C: -rp <dein-Recovery-Schlüssel>`
6. Prüfe den Status: `manage-bde -status C:`

**Erwartetes Ergebnis:**

| Übung | Erwartetes Ergebnis |
|-------|-------------------|
| WinRE-Einstieg | WinRE startet und zeigt Optionen an |
| SFC offline | Scan wird durchgeführt, ggf. Korrekturen vorgenommen |
| DISM offline | Komponenten-Store wird geprüft/repariert |
| BitLocker-Recovery | Laufwerk wird mit Recovery-Schlüssel entsperrt |

**Teil C — SFC und DISM im Online-Modus (wenn Windows startet):**

1. Öffne Eingabeaufforderung als Administrator
2. Führe SFC aus: `sfc /scannow`
3. Wenn SFC Fehler nicht beheben kann, führe DISM aus: `Dism /Online /Cleanup-Image /RestoreHealth`
4. Führe SFC erneut aus: `sfc /scannow`
5. Starte den PC neu

**Hinweis:** Die Befehle `DISM` und `Dism` sind in Windows identisch (Groß-/Kleinschreibung ist bei Windows-Befehlen nicht relevant). In der Microsoft-Dokumentation wird die Schreibweise `Dism` verwendet.

---

## Berühmte Fehler + Lösungen

### Fehler 1: SFC und DISM in falscher Reihenfolge

- **Symptom:** SFC meldet „Windows Resource Protection found corrupt files but was unable to fix some of them" — DISM wird nicht ausgeführt
- **Ursache:** Kenntnis der Abhängigkeit zwischen SFC und DISM fehlt
- **Diagnose-Schritte:**
  1. SFC-Logfile prüfen: `findstr /c:"[SR]" %windir%\Logs\CBS\CBS.log > "%userprofile%\Desktop\sfcdetails.txt"`
  2. Prüfen, ob SFC Dateien nicht reparieren konnte
  3. Prüfen, ob der Komponenten-Store beschädigt ist: `Dism /Online /Cleanup-Image /CheckHealth`
- **Lösung:**
  - DISM ausführen: `Dism /Online /Cleanup-Image /RestoreHealth`
  - Nach DISM-Schluss SFC erneut ausführen: `sfc /scannow`
  - SFC und DISM können mehrmals nacheinander ausgeführt werden, um alle Fehler zu beheben[Microsoft Learn — SFC, 2026-10-19]
- **Prävention:** Immer zuerst SFC, dann DISM, dann SFC erneut — diese Reihenfolge ist am effektivsten

---

### Fehler 2: Falscher Laufwerksbuchstabe in WinRE

- **Symptom:** SFC/DISM-Fehler „The system cannot find the path specified" — Windows-Laufwerk ist in WinRE nicht C:
- **Ursache:** In WinRE kann das Windows-Laufwerk einen anderen Laufwerksbuchstaben haben (oft D: oder E:)
- **Diagnose-Schritte:**
  1. In WinRE-Eingabeaufforderung: `BCDEdit` ausführen
  2. Unter „Windows Boot Loader" den Wert neben `osdevice` notieren
  3. Alternativ: `diskpart` → `list volume` → Windows-Partition identifizieren → `exit`[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19]
  4. Prüfen mit: `dir C:\Windows` oder `dir D:\Windows`
- **Lösung:**
  - SFC mit korrektem Laufwerk: `sfc /scannow /offbootdir=D:\ /offwindir=D:\Windows`
  - DISM mit korrektem Laufwerk: `Dism /Image:D:\ /Cleanup-Image /RestoreHealth`[Microsoft Learn — BitLocker, 2026-10-19][Microsoft Learn — Repair, 2026-10-19]
- **Prävention:** Immer vor SFC/DISM den Laufwerksbuchstaben mit `BCDEdit` oder `diskpart` prüfen

---

### Fehler 3: BitLocker-Recovery-Schlüssel verloren

- **Symptom:** User meldet „BitLocker verlangt Recovery-Schlüssel, aber ich habe ihn nicht"
- **Ursache:** Recovery-Schlüssel wurde nicht an einem sicheren Ort gespeichert oder die TPM-Konfiguration wurde geändert
- **Diagnose-Schritte:**
  1. Prüfen, ob der Schlüssel im Microsoft-Konto verfügbar ist: Benutzer auffordern, sich unter account.microsoft.com/devices/recoverykey anzumelden
  2. In einer Domänen-Umgebung: AD-Objekt des Computers öffnen und Recovery-Schlüssel auslesen
  3. Prüfen, ob ein Ausdruck oder eine Textdatei vorhanden ist
- **Lösung:**
  - Wenn Schlüssel gefunden: in WinRE oder auf dem BitLocker-Bildschiff eingeben
  - Wenn Schlüssel nicht gefunden: Datenrettung durch spezialisierte Dienstleister (teilerfolg)
  - Letzter Ausweg: Windows zurücksetzen oder neu installieren (Datenverlust)[Microsoft Learn — Repair, 2026-10-19]
- **Prävention:** BitLocker-Recovery-Schlüssel in Active Directory sichern und/oder im Microsoft-Konto speichern; Benutzer instruieren, den Schlüssel auszudrucken

---

### Fehler 4: Boot-Schleife — Startup Repair meldet „Couldn't repair your PC"

- **Symptom:** PC startet wiederholt neu, Startup Repair schlägt fehl, System Restore ist nicht verfügbar
- **Ursache:** Systemdateien oder BCD (Boot Configuration Data) sind stark beschädigt
- **Diagnose-Schritte:**
  1. WinRE öffnen: Eingabeaufforderung
  2. BCD reparieren: `bootrec /fixmbr`, `bootrec /fixboot`, `bootrec /rebuildbcd`[CompTIA A+, 2026-10-19]
  3. Partitionstyp prüfen: `diskpart` → `list disk` → `select disk 0` → `list partition`
  4. Prüfen, ob EFI-Partition vorhanden und aktiv ist
- **Lösung:**
  - BCDStore neu erstellen: `bootrec /rebuildbcd`
  - Wenn fehlgeschlagen: BCD manuell neu erstellen mit `bcdedit`
  - Als letzte Option: Neuinstallation mit „Benutzerdefinierte Installation" (Dateien behalten, wenn möglich)[CompTIA A+, 2026-10-19]
- **Prävention:** Regelmäßige Systemimages erstellen; Windows Updates nicht abbrechen; SSD/Gesundheit der Festplatte überwachen

---

## Mini-Quiz

**Frage 1:** Wie lautet der Befehl, um SFC offline auf ein nicht startendes Windows-System anzuwenden?
- A) `sfc /scannow`
- B) `sfc /scannow /offbootdir=D:\ /offwindir=D:\Windows`
- C) `sfc /offline D:\Windows`
- D) `sfc /repair D:\`

**Antwort:** B — SFC benötigt die Parameter `/offbootdir` und `/offwindir` für die Offline-Nutzung.

---

**Frage 2:** Welches Tool repariert den Komponenten-Store (WinSxS), von dem SFC abhängig ist?
- A) chkdsk
- B) bootrec
- C) DISM
- D) manage-bde

**Antwort:** C — DISM (Deployment Image Servicing and Management) repariert den Komponenten-Store.

---

**Frage 3:** Was tun, wenn SFC meldet, dass es Dateien nicht reparieren konnte?
- A) Den PC neu starten und SFC erneut ausführen
- B) DISM ausführen und anschließend SFC erneut ausführen
- C) Windows neu installieren
- D) Den Fehler ignorieren

**Antwort:** B — DISM repariert den Komponenten-Store, dann kann SFC die Systemdateien reparieren.

---

**Frage 4:** Wie lang ist ein BitLocker-Recovery-Schlüssel?
- A) 16 Zeichen
- B) 24 Zeichen
- C) 48 Ziffern
- D) 64 Zeichen

**Antwort:** C — Der BitLocker-Recovery-Schlüssel besteht aus 48 Ziffern.

---

**Frage 5:** Was ist der erste Schritt bei der Boot-Reparatur, wenn Windows nicht startet?
- A) Windows neu installieren
- B) WinRE öffnen und Startup Repair ausführen
- C) Die Festplatte formatieren
- D) Die BIOS-Einstellungen zurücksetzen

**Antwort:** B — WinRE → Startup Repair ist der erste Schritt, bevor manuelle Reparaturen durchführt.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter aus der Buchhaltung meldet sich: „Ich habe gestern ein Windows-Update installiert und seitdem startet Windows nicht mehr. Der Bildschirm zeigt 'Preparing Automatic Repair', dann geht alles wieder von vorne. Ich komme nicht auf meinen Desktop und habe dringend Dateien auf dem Laptop. Der Laptop ist mit BitLocker verschlüsselt."

**Aufgabe:**
1. Wie gehst du bei der Diagnose vor?
2. Wie löst du das Problem?
3. Wie stellst du sicher, dass die Daten erhalten bleiben?

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Diagnose:**
- Prüfe, ob WinRE erreichbar ist: Power-Button 2–3× gedrückt halten, bis WinRE erscheint
- Navigiere zu **Problembehandlung > Erweiterte Optionen > Eingabeaufforderung**
- Prüfe den Laufwerksbuchstaben: `BCDEdit` — notiere den Wert neben `osdevice`
- Prüfe den BitLocker-Status: `manage-bde -status C:`

**2. Lösung:**
- Wenn BitLocker aktiv: Entsperren mit Recovery-Schlüssel (vom Microsoft-Konto oder AD)
- Startup Repair versuchen: **Problembehandlung > Erweiterte Optionen > Startup Repair**
- Wenn fehlgeschlagen: System Restore zu einem früheren Wiederherstellungspunkt
- Wenn fehlgeschlagen: SFC offline: `sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows`
- Wenn fehlgeschlagen: DISM offline: `Dism /Image:C:\ /Cleanup-Image /RestoreHealth`, dann SFC erneut

**3. Daten-Erhalt:**
- Vor jeder Maßnahme: Daten mit `robocopy` oder über WinRE-Eingabeaufforderung auf einen USB-Stick kopieren
- Wenn Windows nicht repariert werden kann: Neuinstallation mit „Benutzerdefinierte Installation" und Option „Dateien behalten" (wenn verfügbar)
- Wenn die Partition beschädigt ist: Datenrettungstools (z. B. TestDisk) in WinRE nutzen

**4. Dokumentation:**
- Problem: Boot-Schleife nach Windows-Update
- Diagnose: WinRE erreichbar, BitLocker aktiv, Laufwerk C:
- Lösung: DISM + SFC offline, System Restore
- Verifizierung: Windows startet normal

</details>

---

## Quellen

- [Microsoft Learn — Windows Recovery Environment (Windows RE) Technical Reference](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re--technical-reference?view=windows-11) — abgerufen am 2026-10-19
- [Microsoft Learn — BitLocker Recovery Overview](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/recovery-overview) — abgerufen am 2026-10-19
- [Microsoft Learn — Repair a Windows Image](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/repair-a-windows-image?view=windows-11) — abgerufen am 2026-10-19
- [Microsoft Learn — Using System File Checker and Restoring Corrupted System](https://learn.microsoft.com/en-us/answers/questions/2320913/using-system-file-checker-and-restoring-corrupted) — abgerufen am 2026-10-19
- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
