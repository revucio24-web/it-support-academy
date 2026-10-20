---
title: "Modul 13: PowerShell für Support-Automatisierung"
level: 2
module: 13
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/de-de/powershell/scripting/overview"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/powershell/scripting/learn/ps101/00-introduction"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/powershell/module/microsoft.powershell.management/get-process"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/content/guides/comptia-a-plus-certification"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Grundlagen der PowerShell und kannst Cmdlets erklären
2. Du kannst Systeminformationen mit PowerShell abfragen (Prozesse, Dienste, Ereignisse)
3. Du kennst die Pipeline und kannst Befehle verketten
4. Du kannst einfache Skripte zur Automatisierung von Support-Aufgaben erstellen
5. Du kannst PowerShell zur Fehlerbehebung und Systemdiagnose nutzen

---

## Theorie

### 1. Was ist PowerShell?

PowerShell ist eine taskorientierte Skriptsprache und Befehlszeilenumgebung (Shell), die auf .NET aufbaut. Entwickelt von Microsoft, dient sie zur Automatisierung von Verwaltungsaufgaben in Windows-Umgebungen.

**Wichtige Eigenschaften:**

- **Objektbasiert** — Im Gegensatz zu anderen Shells (z. B. CMD) arbeitet PowerShell mit strukturierten Objekten statt mit reinem Text
- **Cmdlets** — Eingebaute Befehle im Muster `Verb-Noun` (z. B. `Get-Process`, `Set-Service`)
- **Pipeline** — Befehle können über die Pipe `|` verkettet werden, sodass Ausgabe eines Befehls als Eingabe des nächsten dient
- **Skriptsprache** — Wiederholbare Aufgaben können in `.ps1`-Dateien gespeichert und automatisiert werden

**Relevante Versionen:**

| Version | Beschreibung | Hinweis |
|---------|--------------|---------|
| Windows PowerShell 5.1 | Standard in Windows 10/11 enthalten | Eingebettet, unterstützt .NET Framework |
| PowerShell 7+ | Plattformübergreifend (Windows, Linux, macOS) | Modern, quelloffen, .NET Core-basiert |

> **Quelle:** [Microsoft Learn — PowerShell-Skriptübersicht](https://learn.microsoft.com/de-de/powershell/scripting/overview) — abgerufen am 2026-10-19

### 2. Cmdlets — Die Sprache der PowerShell

Cmdlets (Befehlseinheiten) folgen einer festen Namenskonvention: **Verb-Noun** (Tanzwort-Substantiv).

**Häufige Verben:**

| Verb | Bedeutung | Beispiel |
|------|-----------|----------|
| Get | Abrufen/Anzeigen | `Get-Process` |
| Set | Setzen/Ändern | `Set-Service` |
| Start | Starten | `Start-Service` |
| Stop | Stoppen | `Stop-Process` |
| New | Erstellen | `New-Item` |
| Remove | Entfernen | `Remove-Item` |

**Wichtige Cmdlets im Support-Alltag:**

| Cmdlet | Beschreibung |
|--------|--------------|
| `Get-Process` | Laufende Prozesse anzeigen |
| `Get-Service` | Systemdienste anzeigen |
| `Get-EventLog` | Ereignisanzeige-Protokolle auslesen |
| `Get-ComputerInfo` | Systeminformationen abrufen |
| `Get-NetIPAddress` | IP-Konfiguration anzeigen |
| `Get-ChildItem` | Dateien/Ordner auflisten |
| `Get-Date` | Aktuelles Datum/Uhrzeit anzeigen |
| `Get-Help` | Hilfe zu Cmdlets anzeigen |

> **Quelle:** [Microsoft Learn — PowerShell 101 Einführung](https://learn.microsoft.com/de-de/powershell/scripting/learn/ps101/00-introduction) — abgerufen am 2026-10-19

### 3. Pipeline und Objekte

Die Pipeline `|` ist das Kernmerkmal der PowerShell. Ein Befehl gibt Objekte aus, die der nächste Befehl als Eingabe erhält.

**Beispiel:**

```powershell
Get-Process | Where-Object {$_.WorkingSet -gt 100MB}
```

**Erklärung:**
1. `Get-Process` erzeugt ein Objekt für jeden laufenden Prozess
2. `Where-Object` filtert Prozesse, deren Speicherbedarf (`WorkingSet`) über 100 MB liegt
3. `$_` repräsentiert das aktuelle Objekt in der Pipeline

**Vorteil gegenüber CMD:** Da Objekte (nicht Text) übergeben werden, können Eigenschaften direkt angesprochen werden, ohne Text parsen zu müssen.

> **Quelle:** [Microsoft Learn — PowerShell-Skriptübersicht](https://learn.microsoft.com/de-de/powershell/scripting/overview) — abgerufen am 2026-10-19

### 4. Systemdiagnose mit PowerShell

PowerShell ermöglicht eine schnelle Systemdiagnose über die Befehlszeile. Besonders hilfreich bei der Fehlersuche aufSystemen ohne grafische Oberfläche oder bei Fernzugriff.

**Typische Diagnose-Befehle:**

```powershell
# Alle laufenden Prozesse mit Speicherbedarf anzeigen
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10

# Alle Dienste und deren Status
Get-Service

# Letzte Fehler im System-Protokoll
Get-EventLog -LogName System -EntryType Error -Newest 20

# Systeminformationen auf einen Blick
Get-ComputerInfo

# IP-Konfiguration
Get-NetIPAddress | Format-Table
```

> **Quelle:** [Microsoft Learn — Get-Process](https://learn.microsoft.com/de-de/powershell/module/microsoft.powershell.management/get-process) — abgerufen am 2026-10-19

### 5. Skripte zur Automatisierung

Wiederkehrende Aufgaben lassen sich in PowerShell-Skripten (`.ps1`-Dateien) automatisieren. Dies spart Zeit und reduziert Fehler.

**Beispiel: Automatisierte Systeminformationen-Sammlung**

```powershell
# systeminfo.ps1 — Sammelt wichtige Systeminformationen
$report = @()
$report += "=== Systembericht $(Get-Date) ==="
$report += ""
$report += "--- Computer ---"
$report += (Get-ComputerInfo | Select-Object CsName, OsName, OsVersion | Out-String)
$report += "--- Prozesse (Top 10 nach Speicher) ---"
$report += (Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10 Name, WorkingSet | Out-String)
$report += "--- Fehlermeldungen (System) ---"
$report += (Get-EventLog -LogName System -EntryType Error -Newest 10 | Select-Object TimeGenerated, Source, Message | Out-String)
$report | Out-File -FilePath "C:\Temp\Systembericht.txt"
```

**Hinweis zur Ausführungsrichtlinie (Execution Policy):** Standardmäßig ist die Ausführung von Skripten aus Sicherheitsgründen eingeschränkt. Mit `Get-ExecutionPolicy` kannst du die aktuelle Richtlinie prüfen. Für den eigenen Einsatz kann `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` verwendet werden.

> **Quelle:** [Microsoft Learn — PowerShell-Skriptübersicht](https://learn.microsoft.com/de-de/powershell/scripting/overview) — abgerufen am 2026-10-19

### 6. Remote-Verwaltung mit PowerShell

Mit PowerShell können Remote-Systeme verwaltet werden. Dazu dient der Befehl `Enter-PSSession` oder `Invoke-Command`.

**Grundlagen:**

```powershell
# Interaktive Sitzung mit einem Remote-Computer
Enter-PSSession -ComputerName "PC-02"

# Einzelnen Befehl auf mehreren Computern ausführen
Invoke-Command -ComputerName "PC-01", "PC-02" -ScriptBlock {
    Get-Service | Where-Object {$_.Status -eq "Stopped"}
}
```

**Voraussetzung:** PowerShell Remoting muss auf dem Zielcomputer aktiviert sein (`Enable-PSRemoting`).

> **Quelle:** [Microsoft Learn — PowerShell-Skriptübersicht](https://learn.microsoft.com/de-de/powershell/scripting/overview) — abgerufen am 2026-10-19

---

## Praxis-Übung im Homelab

### Übung: Systemdiagnose mit PowerShell

**Vorbereitung:**
- Öffne PowerShell (als Administrator): `Win + X` → „Windows PowerShell (Admin)"
- Notiere die Ausgaben der folgenden Befehle

**Aufgabe:**

1. **Prozessanalyse:** Führe `Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10` aus
   - Notiere die 3 Prozesse mit dem höchsten Speicherbedarf
   - Was sind die Spalten `Name`, `Id` und `WorkingSet`?

2. **Dienstestatus:** Führe `Get-Service | Where-Object {$_.Status -eq "Running"} | Measure-Object` aus
   - Wie viele Dienste laufen aktuell auf dem System?
   - Welche drei Dienste benötigen den meisten Speicher? (Tipp: `Get-Service | Select-Object Name, Status, DependentServices`)

3. **EventLog-Analyse:** Führe `Get-EventLog -LogName System -EntryType Error -Newest 10` aus
   - Notiere die 5 häufigsten Fehlerquellen (`Source`)
   - Gibt es Muster?

4. **Einfaches Skript:** Erstelle ein Skript `C:\Temp\diagnose.ps1` mit folgendem Inhalt:
   ```powershell
   $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
   $output = "C:\Temp\diagnose_$timestamp.txt"
   "=== Diagnose-Bericht $timestamp ===" | Out-File $output
   "" | Out-File $output -Append
   "--- Laufende Prozesse ---" | Out-File $output -Append
   Get-Process | Select-Object Name, Id, WorkingSet | Out-File $output -Append
   "" | Out-File $output -Append
   "--- Fehler im System-Protokoll ---" | Out-File $output -Append
   Get-EventLog -LogName System -EntryType Error -Newest 10 | Select-Object TimeGenerated, Source, Message | Out-File $output -Append
   Write-Host "Bericht gespeichert: $output"
   ```
   - Führe das Skript aus und prüfe die Ausgabedatei

**Erwartetes Ergebnis:**

| Aufgabe | Ergebnis |
|---------|----------|
| 1 | Liste der Top-10-Prozesse nach Speicherbedarf |
| 2 | Anzahl der laufenden Dienste, drei wichtigste Dienste |
| 3 | Liste der 10 letzten Fehler im System-Protokoll mit Quellen |
| 4 | Erstellter Bericht in `C:\Temp\diagnose_TIMESTAMP.txt` |

---

## Berühmte Fehler + Lösungen

### Fehler 1: PowerShell-Skript wird nicht ausgeführt

- **Symptom:** Fehlermeldung „Das Ausführen von Skripten ist auf diesem System deaktiviert"
- **Ursache:** Die Execution Policy (Ausführungsrichtlinie) blockiert die Skriptausführung
- **Diagnose-Schritte:**
  1. `Get-ExecutionPolicy` ausführen — zeigt die aktuelle Richtlinie
  2. Prüfen, ob die Richtlinie `Restricted` ist
  3. Den Scope prüfen: `Get-ExecutionPolicy -List`
- **Lösung:**
  - `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` ausführen
  - Danach sollte `Get-ExecutionPolicy` den Wert `RemoteSigned` zurückgeben
- **Prävention:** Execution Policy bei der Einrichtung der Testumgebung korrekt konfigurieren

---

### Fehler 2: Cmdlet wird nicht erkannt

- **Symptom:** Fehlermeldung „Der Begriff 'Get-Process' wird nicht als Name eines Cmdlets erkannt"
- **Ursache:** falsche Modul-Pfad oder nicht importiertes Modul
- **Diagnose-Schritte:**
  1. Prüfen, ob das Modul vorhanden ist: `Get-Module -ListAvailable`
  2. Prüfen, ob das Modul geladen ist: `Get-Module`
  3. Ggf. Modul manuell importieren: `Import-Module Microsoft.PowerShell.Management`
- **Lösung:**
  - Modul-Pfad überprüfen und ggf. PATH-Umgebungsvariable korrigieren
  - In PowerShell 7: `Get-Module -ListAvailable` nutzen, um verfügbare Module zu finden
- **Prävention:** Module beim Anmelden automatisch laden (Profile-Skript in `$PROFILE`)

---

### Fehler 3: Pipeline-Fehler bei fehlenden Eigenschaften

- **Symptom:** Leere Ausgabe oder Fehlermeldung beim Verketten von Befehlen
- **Ursache:** Eigenschaft existiert nicht oder ist `$null`; falsche Objektstruktur
- **Diagnose-Schritte:**
  1. Objekttyp prüfen: `Get-Process | Get-Member`
  2. Verfügbare Eigenschaften anzeigen: `(Get-Process -Name "powershell").PSObject.Properties.Name`
  3. Prüfen, ob Eigenschaften NULL sind: `Get-Process | Select-Object Name, Id, WorkingSet`
- **Lösung:**
  - `Select-Object` nutzen, um benötigte Eigenschaften auszuwählen
  - `Where-Object` mit korrekten Eigenschaftsnamen verwenden
  - Bei `$null`-Werten: `if ($null -ne $variable)` prüfen
- **Prävention:** Vor der Pipeline die Struktur des Objekts mit `Get-Member` prüfen

---

### Fehler 4: Zugriffsverweigert bei Remote-Befehlen

- **Symptom:** Fehlermeldung „Zugriff verweigert" bei `Invoke-Command` oder `Enter-PSSession`
- **Ursache:** PowerShell Remoting nicht aktiviert oder fehlende Administratorrechte auf Zielcomputer
- **Diagnose-Schritte:**
  1. Prüfen, ob Remoting aktiviert: `Test-WSMan -ComputerName "PC-02"`
  2. Prüfen, ob der aktuelle Benutzer Administrator auf dem Zielcomputer ist
  3. Windows-Firewall-Regeln für WinRM prüfen
- **Lösung:**
  - Auf dem Zielcomputer: `Enable-PSRemoting -Force` ausführen (als Administrator)
  - Windows-Dienste `WinRM` starten: `Start-Service WinRM`
  - Firewall-Ausnahme für WinRM überprüfen
- **Prävention:** Remoting bei der Systemeinrichtung aktivieren und dokumentieren

---

## Mini-Quiz

**Frage 1:** Was bedeutet die Pipeline `|` in PowerShell?
- A) Sie trennt Befehle voneinander
- B) Sie leitet die Ausgabe eines Befehls als Eingabe an den nächsten Befehl weiter
- C) Sie beendet einen Befehl
- D) Sie erstellt eine neue Datei

**Antwort:** B — Die Pipeline leitet Objekte vom ersten zum nächsten Befehl weiter.

---

**Frage 2:** Welches Cmdlet zeigt alle laufenden Prozesse an?
- A) `Get-Process`
- B) `Show-Process`
- C) `List-Process`
- D) `Display-Process`

**Antwort:** A — `Get-Process` ist das Standard-Cmdlet zur Anzeige laufender Prozesse.

---

**Frage 3:** Wie nennt man die Grundstruktur eines PowerShell-Befehls?
- A) `Verb-Noun`
- B) `Substantiv-Verb`
- C) `Befehl-Option`
- D) `Get-Set`

**Antwort:** A — PowerShell-Cmdlets folgen dem Muster `Verb-Noun` (z. B. `Get-Service`).

---

**Frage 4:** Was passiert, wenn du ein Skript mit `.\skript.ps1` startest und die Execution Policy ist `Restricted`?
- A) Das Skript wird ohne Warnung ausgeführt
- B) Das Skript wird nicht ausgeführt und eine Fehlermeldung erscheint
- C) Windows Installiert das Skript automatisch
- D) Der Computer wird neu gestartet

**Antwort:** B — Die Execution Policy `Restricted` verhindert die Skriptausführung.

---

**Frage 5:** Welches Cmdlet liest die Windows-Ereignisanzeige aus?
- A) `Get-EventLog`
- B) `Read-Event`
- C) `Show-Event`
- D) `Get-Log`

**Antwort:** A — `Get-EventLog` liest Einträge aus den Windows-Ereignisprotokollen.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter meldet: "Mein PC ist seit gestern extrem langsam. Ich habe viele Programme offen, aber das Problem trat auch nach einem Neustart auf. Ich arbeite dringend an einer Präsentation für heute."

**Aufgabe:**
1. Erstelle einen Diagnose-Befehl mit PowerShell, der die CPU- und Speicherauslastung aktueller Prozesse anzeigt
2. Identifiziere mögliche Ursache für die langsame Leistung
3. Dokumentiere deine Befehle und Ergebnisse für den Fallbericht

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Diagnose-Befehl:**

```powershell
# Top-10-Prozesse nach CPU-Zeit
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 Name, Id, CPU, WorkingSet

# Top-10-Prozesse nach Speicherbedarf
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10 Name, Id, WorkingSet
```

**2. Mögliche Ursache:**
- Ein Prozess verbraucht übermäßig viele Ressourcen (CPU oder Speicher)
- Mögliche Ursachen: defekter Treiber, böswillige Software, zu viele Hintergrundprozesse

**3. Dokumentation:**
- Befehl: `Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 Name, Id, CPU, WorkingSet`
- Ergebnis: Prozess „chrome.exe" verbraucht 45% CPU und 1,2 GB Speicher
- Massnahme: Prozess beenden (`Stop-Process -Id 1234`) und ggf. Virenscan durchführen

</details>

---

## Quellen

- [Microsoft Learn — PowerShell-Skriptübersicht](https://learn.microsoft.com/de-de/powershell/scripting/overview) — abgerufen am 2026-10-19
- [Microsoft Learn — PowerShell 101 Einführung](https://learn.microsoft.com/de-de/powershell/scripting/learn/ps101/00-introduction) — abgerufen am 2026-10-19
- [Microsoft Learn — Get-Process](https://learn.microsoft.com/de-de/powershell/module/microsoft.powershell.management/get-process) — abgerufen am 2026-10-19
- [CompTIA A+ Certification Guide](https://www.comptia.org/content/guides/comptia-a-plus-certification) — abgerufen am 2026-10-19
