---
title: "Modul 0: Homelab — Deine IT-Support-Übungsumgebung"
level: 1
module: 0
last_verified: 2026-10-19
windows_version: "Windows 11 23H2 / Windows Server 2022"
sources:
  - url: "https://en.wikipedia.org/wiki/VMware_Workstation"
    abrufdatum: 2026-10-19
  - url: "https://www.free-codecs.com/download/vmware-workstation-pro.htm"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/paths/windows-server-network-infrastructure/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows-server/get-started/evaluation"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst, warum ein Homelab für IT-Support-Training unverzichtbar ist
2. Du kennst die Einschränkungen von Windows 11 Home und kannst sie umgehen
3. Du kannst VMware Workstation Pro installieren und konfigurieren
4. Du kannst Windows 11 Pro und Windows Server 2022 als Evaluation-VMs einrichten
5. Du verstehst Netzwerkdesign-Optionen (NAT, Host-only, Internal) für VMs
6. Du kannst typische Fehler im Lab reproduzieren (DNS, DHCP, Treiber, Dienste)
7. Du kennst die Hardwareanforderungen und kannst sie realistisch einschätzen

---

## Theorie: Warum ein Homelab?

### Was ist ein Homelab?

Ein Homelab (Home Laboratory) ist eine isolierte Testumgebung auf deinem eigenen PC, in der du IT-Systeme installieren, konfigurieren, "kaputt machen" und wieder reparieren kannst — ohne echte Systeme zu gefährden.

### Warum ist es für IT-Support unverzichtbar?

| Ohne Homelab | Mit Homelab |
|--------------|-------------|
| Theorie bleibt abstrakt | Praxis mit echten Systemen |
| Fehler sind gefährlich | Fehler sind gewollt |
| Keine Reproduzierbarkeit | Snapshots ermöglichen Wiederholung |
| Keine echten Fehlerfälle | Fehler gezielt erzeugbar |
| Keine Erfolgserlebnisse | Sichtbare Ergebnisse |

### Einschränkungen von Windows 11 Home

Windows 11 Home hat bewusste Einschränkungen, die für IT-Training relevant sind:

| Feature | Windows 11 Home | Workaround |
|---------|-----------------|------------|
| Hyper-V-Host | ❌ Nicht verfügbar | VMware Workstation Pro oder VirtualBox |
| gpedit.msc (GPO-Editor) | ❌ Nicht verfügbar | Direkte Registry-Edits oder RSAT-Tools |
| RDP-Host (eingehend) | ❌ Nicht verfügbar | VMware-Konsole oder Quick Assist |
| Domain-Join | ❌ Nicht verfügbar | Nur Azure AD Join (nicht für lokales AD) |
| BitLocker | ❌ Nicht verfügbar | Nur Device Encryption (eingeschränkt) |

**Fazit:** Windows 11 Home reicht als Host-Betriebssystem. Für alle fortgeschrittenen Features (AD, GPO, RDP) nutzen wir VMs mit Windows 11 Pro oder Windows Server.

---

## Praxis-Übung im Homelab

### Vorbereitung

**Benötigte Software:**
- VMware Workstation Pro (kostenlos, siehe Schritt 1)
- Windows 11 Pro Evaluation ISO (von Microsoft)
- Windows Server 2022 Evaluation ISO (von Microsoft)

**Hardwareanforderungen (realistisch):**

| Komponente | Minimum | Empfohlen |
|------------|---------|-----------|
| RAM | 16 GB | 32 GB |
| CPU | 4 Kerne | 6+ Kerne |
| SSD | 100 GB frei | 200 GB frei |
| Host-OS | Windows 11 Home | Windows 11 Pro |

---

### Schritt 1: VMware Workstation Pro installieren

1. **Download:** https://support.broadcom.com (offizieller Broadcom-Download-Portal)
   - Suche nach "VMware Workstation Pro"
   - Wähle die aktuellste Version (26H1u1 oder neuer)
   - **Kostenlos** — kein License Key nötig (seit November 2024)

2. **Installation:**
   - Installationsdatei ausführen
   - "I want to license VMware Workstation Pro for personal use" **abwählen** (nicht nötig)
   - Telemetrie/Marketing-Optionen abwählen (optional)
   - Installation abschließen
   - Neustart des Hosts

3. **Nach Installation:**
   - VMware Workstation Pro starten
   - Lizenzierung: "Free for personal and commercial use" auswählen
   - Kein Product Key nötig

**Quelle:** https://en.wikipedia.org/wiki/VMware_Workstation (abgerufen 2026-10-19)

---

### Schritt 2: Windows 11 Pro Evaluation VM erstellen

1. **ISO herunterladen:**
   - https://www.microsoft.com/en-us/evalcenter/evaluate-windows-11-enterprise
   - Wähle "Windows 11 Enterprise" (Evaluation)
   - Sprache: Deutsch
   - Download: ISO-Datei (~5 GB)

2. **Neue VM in VMware:**
   - "Create a New Virtual Machine"
   - Typ: "Typical (recommended)"
   - Installationsquelle: "Installer disc image file (ISO)"
   - ISO-Datei auswählen
   - Gastbetriebssystem: "Microsoft Windows" → "Windows 10 x64" (VMware erkennt Win 11 nicht immer korrekt)
   - VM-Name: `Win11-Client-01`
   - Speicherort: `C:\VMs\Win11-Client-01` (oder gewünschter Pfad)

3. **Hardware-Konfiguration:**
   - Prozessoren: 2 Kerne
   - RAM: 4096 MB (4 GB)
   - Festplatte: 80 GB (single file)
   - Netzwerkadapter: NAT (Standard)

4. **Installation:**
   - VM starten
   - Windows-Setup durchführen (Sprache, Tastatur, Lizenzbedingungen)
   - Installationstyp: "Benutzerdefiniert: nur Windows installieren"
   - Partition: gesamte Festplatte verwenden
   - Lokalen Benutzer erstellen (kein Microsoft-Konto nötig für Eval)
   - VM-Tools installieren (VMware → VM → Install VMware Tools)

5. **Nach Installation:**
   - Windows aktivieren: Eval-Version ist automatisch aktiviert für 180 Tage
   - Windows Update ausführen
   - Snapshot erstellen: "VM → Snapshot → Take Snapshot" → Name: `Clean-Install`

**Quelle:** https://learn.microsoft.com/en-us/windows-server/get-started/evaluation (abgerufen 2026-10-19)

---

### Schritt 3: Windows Server 2022 Evaluation VM erstellen

1. **ISO herunterladen:**
   - https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2022
   - Wähle "Windows Server 2022" (Evaluation)
   - Sprache: Deutsch
   - Download: ISO-Datei (~5 GB)

2. **Neue VM in VMware:**
   - VM-Name: `Server-01`
   - Gastbetriebssystem: "Microsoft Windows" → "Windows Server 2022"
   - Prozessoren: 2 Kerne
   - RAM: 4096 MB (4 GB)
   - Festplatte: 80 GB
   - Netzwerkadapter: **Host-only** (für isoliertes Lab-Netzwerk)

3. **Installation:**
   - VM starten
   - Windows Server Setup: "Windows Server 2022 Standard Evaluation (Desktop Experience)"
   - Lokalen Administrator erstellen
   - VM-Tools installieren

4. **Nach Installation:**
   - Server-Manager öffnen
   - Lokaler Server → Eigenschaften → Computername ändern: `SRV01`
   - Neustart
   - Snapshot: `Clean-Install`

**Quelle:** https://learn.microsoft.com/en-us/windows-server/get-started/evaluation (abgerufen 2026-10-19)

---

### Schritt 4: Netzwerkdesign konfigurieren

VMware bietet drei Netzwerkmodi:

| Modi | Beschreibung | Use-Case |
|------|--------------|----------|
| **NAT** | VM teilt IP des Hosts, Internetzugang | Updates, Downloads |
| **Bridged** | VM ist eigenes Gerät im physischen Netzwerk | Echte Netzwerk-Tests |
| **Host-only** | VMs kommunizieren nur untereinander + Host | Isoliertes Lab |
| **Internal** | VMs kommunizieren nur untereinander (ohne Host) | Komplett isoliert |

**Empfohlene Konfiguration:**

| VM | Adapter 1 | Adapter 2 |
|----|-----------|-----------|
| Win11-Client-01 | NAT (Internet) | Host-only (Lab) |
| Server-01 | Host-only (Lab) | — |

**Konfiguration in VMware:**
1. VM → Settings → Network Adapter
2. Adapter 1: NAT
3. Adapter 2: Add → Network Adapter → Host-only
4. VM starten
5. In Windows: `ipconfig` — zwei Adapter mit unterschiedlichen IP-Bereichen

**Erwartetes Ergebnis:**
- Client-01: NAT-IP (z. B. 192.168.x.x) + Host-only-IP (z. B. 192.168.56.x)
- Server-01: Host-only-IP (z. B. 192.168.56.x)
- Client kann Server pingen (über Host-only-IP)
- Client hat Internet (über NAT)

---

### Schritt 5: Typische Fehler im Lab reproduzieren

Damit Übungen reproduzierbar sind, hier die Anleitung zum gezielten "Kaputtmachen":

#### Fehler 1: DNS-Auflösung stoppen

**Aufgabe:** Den DNS-Client-Dienst auf dem Server stoppen.

```powershell
# Auf Server-01 (als Administrator):
Stop-Service -Name "Dnscache" -Force
Set-Service -Name "Dnscache" -StartupType Disabled
```

**Erwartetes Ergebnis:** Client-01 kann keine Domainnamen mehr auflösen (`nslookup google.com` schlägt fehl), aber IP-Verbindungen funktionieren noch.

**Reparatur:**
```powershell
Set-Service -Name "Dnscache" -StartupType Automatic
Start-Service -Name "Dnscache"
```

#### Fehler 2: DHCP deaktivieren

**Aufgabe:** Den DHCP-Client-Dienst auf dem Client stoppen.

```powershell
# Auf Win11-Client-01 (als Administrator):
Stop-Service -Name "Dhcp" -Force
Set-Service -Name "Dhcp" -StartupType Disabled
```

**Erwartetes Ergebnis:** Client bekommt keine IP-Adresse mehr (nur APIPA 169.254.x.x).

**Reparatur:**
```powershell
Set-Service -Name "Dhcp" -StartupType Automatic
Start-Service -Name "Dhcp"
ipconfig /release
ipconfig /renew
```

#### Fehler 3: Falscher Treiber installieren

**Aufgabe:** Einen inkompatiblen Treiber installieren.

```powershell
# Auf Win11-Client-01:
# Geräte-Manager → Netzwerkadapter → Treiber aktualisieren → 
# "Auf meinem Computer nach Treibern suchen" → 
# "Auswahl aus Liste" → Älteren Treiber wählen
```

**Erwartetes Ergebnis:** Netzwerkadapter funktioniert nicht mehr oder nur eingeschränkt.

**Reparatur:**
```powershell
# Geräte-Manager → Netzwerkadapter → Treiber zurücksetzen
# Oder: Systemwiederherstellung vor dem Fehler
```

#### Fehler 4: Windows Update blockieren

**Aufgabe:** Windows Update-Dienst deaktivieren.

```powershell
# Auf Win11-Client-01 (als Administrator):
Stop-Service -Name "wuauserv" -Force
Set-Service -Name "wuauserv" -StartupType Disabled
```

**Erwartetes Ergebnis:** Windows Update findet keine Updates mehr.

**Reparatur:**
```powershell
Set-Service -Name "wuauserv" -StartupType Automatic
Start-Service -Name "wuauserv"
```

---

### Schritt 6: Snapshots und Wiederherstellung

Snapshots sind das wichtigste Feature für das Homelab:

1. **Snapshot erstellen:**
   - VM → Snapshot → Take Snapshot
   - Name: `Vor-Fehler-1`
   - Beschreibung: "Zustand vor DNS-Fehler"

2. **Snapshot wiederherstellen:**
   - VM → Snapshot → Snapshot Manager
   - Snapshot auswählen → "Go to"
   - VM kehrt exakt in den Snapshot-Zustand zurück

3. **Best Practice:**
   - Nach jeder erfolgreichen Übung: Snapshot erstellen
   - Vor jedem "Kaputtmachen": Snapshot erstellen
   - Snapshot-Baum nutzen (mehrere Zweige)

---

## Berühmte Fehler + Lösungen

### Fehler 1: "VMware Workstation Pro ist nicht kostenlos"

- **Symptom:** VMware verlangt einen Product Key bei der Installation
- **Ursache:** Falsche Version installiert (z. B. VMware Player oder alte Version)
- **Diagnose-Schritte:**
  1. Überprüfe die installierte Version: VMware → Help → About
  2. Prüfe, ob du die aktuelle Version (26H1u1 oder neuer) hast
  3. Überprüfe die Download-Quelle (muss support.broadcom.com sein)
- **Lösung:** Neueste Version von https://support.broadcom.com downloaden und installieren
- **Prävention:** Immer die aktuelle Version vom offiziellen Broadcom-Portal verwenden

**Quelle:** https://en.wikipedia.org/wiki/VMware_Workstation (abgerufen 2026-10-19)

---

### Fehler 2: "Windows 11 Evaluation läuft ab"

- **Symptom:** Windows meldet "Windows ist nicht aktiviert" nach 180 Tagen
- **Ursache:** Evaluation-Laufzeit abgelaufen
- **Diagnose-Schritte:**
  1. `slmgr /xpr` in Eingabeaufforderung als Administrator ausführen
  2. Zeigt "Windows ist dauerhaft aktiviert" oder Ablaufdatum
- **Lösung:**
  - Option A: VM löschen und neu erstellen (Eval-ISO erneut verwenden)
  - Option B: `slmgr /rearm` (verlängert Eval um 180 Tage, max. 5 Mal)
  - Option C: Snapshot von "Clean-Install" wiederherstellen
- **Prävention:** Regelmäßige Snapshots erstellen, Eval-Laufzeit im Kalender notieren

**Quelle:** https://learn.microsoft.com/en-us/windows-server/get-started/evaluation (abgerufen 2026-10-19)

---

### Fehler 3: "VM hat keinen Internetzugang"

- **Symptom:** VM kann keine Websites auflösen oder pingen
- **Ursache:** Falscher Netzwerkadapter-Modus
- **Diagnose-Schritte:**
  1. `ipconfig` in der VM ausführen
  2. Prüfe, ob eine IP-Adresse im NAT-Bereich (z. B. 192.168.x.x) vorhanden ist
  3. Prüfe VMware-Einstellungen: VM → Settings → Network Adapter
  4. Prüfe, ob "Connected" und "Connect at power on" aktiviert sind
- **Lösung:**
  - Netzwerkadapter auf "NAT" stellen
  - VM neu starten
  - `ipconfig /release` und `ipconfig /renew` ausführen
- **Prävention:** Netzwerkadapter-Einstellungen vor dem ersten Start prüfen

---

### Fehler 4: "Windows 11 Home kann keine VMs mit Hyper-V"

- **Symptom:** Hyper-V-Option fehlt in Windows 11 Home
- **Ursache:** Hyper-V ist nur in Pro/Enterprise/Education verfügbar
- **Diagnose-Schritte:**
  1. `winver` ausführen → Windows 11 Home bestätigt
  2. "Windows-Features aktivieren oder deaktivieren" → Hyper-V nicht vorhanden
- **Lösung:** VMware Workstation Pro verwenden (läuft auf Home, benötigt kein Hyper-V)
- **Prävention:** VMware Workstation Pro als Hypervisor für Home-Benutzer empfehlen

---

## Mini-Quiz

**Frage 1:** Was ist der Hauptgrund, warum Windows 11 Home für IT-Training nicht ausreicht?
- A) Es gibt keine Eingabeaufforderung
- B) Hyper-V, GPO-Editor und RDP-Host fehlen
- C) Windows 11 Home kann keine VMs ausführen
- D) Es gibt keinen Geräte-Manager

**Antwort:** B — Hyper-V, gpedit.msc und RDP-Host sind in Home nicht verfügbar.

---

**Frage 2:** Wie lange ist die Evaluation-Laufzeit von Windows 11 Enterprise?
- A) 30 Tage
- B) 90 Tage
- C) 180 Tage
- D) 365 Tage

**Antwort:** C — 180 Tage (verlängerbar mit `slmgr /rearm`).

---

**Frage 3:** Welcher Netzwerkmodi in VMware ermöglicht Internetzugang für die VM?
- A) Host-only
- B) Internal
- C) NAT
- D) Isolated

**Antwort:** C — NAT (Network Address Translation) teilt die Internetverbindung des Hosts.

---

**Frage 4:** Was ist der wichtigste Vorteil von Snapshots in VMware?
- A) Sie beschleunigen die VM
- B) Sie ermöglichen die exakte Wiederherstellung eines früheren Zustands
- C) Sie sparen Festplattenplatz
- D) Sie verbessern die Netzwerkgeschwindigkeit

**Antwort:** B — Snapshots speichern den exakten Zustand der VM und ermöglichen die Wiederherstellung.

---

**Frage 5:** Welches Tool verwenden wir für das Homelab auf Windows 11 Home?
- A) Hyper-V
- B) VirtualBox
- C) VMware Workstation Pro
- D) Sandbox

**Antwort:** C — VMware Workstation Pro (kostenlos, läuft auf Home, kein Hyper-V nötig).

---

## Ticket-Szenario

**Situation:**
Ein Kollege meldet: "Mein PC startet nicht mehr. Ich habe gestern ein Windows-Update installiert und seitdem erscheint nur noch ein blauer Bildschirm mit der Meldung 'INACCESSIBLE_BOOT_DEVICE'."

**Aufgabe:**
1. Was ist die wahrscheinlichste Ursache?
2. Wie würdest du das Problem diagnostizieren?
3. Wie würdest du es lösen?
4. Wie würdest du verhindern, dass das Problem erneut auftritt?

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Wahrscheinlichste Ursache:**
Ein inkompatibler oder beschädigter Speichertreiber, der durch das Update installiert wurde. Der Boot-Vorgang schlägt fehl, weil Windows die Systempartition nicht mehr lesen kann.

**2. Diagnose-Schritte:**
- In den Windows Recovery Environment (WinRE) booten (3x Unterbrechen beim Booten → "Erweiterte Optionen")
- "Problembehandlung" → "Erweiterte Optionen" → "Eingabeaufforderung"
- `chkdsk C: /f /r` ausführen (Festplattenfehler prüfen)
- `sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows` ausführen (Systemdateien prüfen)
- `dism /image:C:\ /cleanup-image /revertpendingactions` ausführen (Update rückgängig machen)

**3. Lösung:**
- Option A: `dism /image:C:\ /cleanup-image /revertpendingactions` — letztes Update rückgängig machen
- Option B: Systemwiederherstellung aus einem Wiederherstellungspunkt
- Option C: `bootrec /fixmbr`, `bootrec /fixboot`, `bootrec /rebuildbcd` — Boot-Sektor reparieren
- Option D: Letzte bekannte gute Konfiguration (F8 beim Start)

**4. Prävention:**
- Vor Updates immer einen Wiederherstellungspunkt erstellen
- Treiber-Updates manuell prüfen (Hersteller-Website)
- Regelmäßige Backups (Datei-Historie oder Systemabbild)
- Im Homelab: Update in VM testen, bevor es auf dem echten System installiert wird

</details>

---

## Quellen

- [VMware Workstation — Wikipedia](https://en.wikipedia.org/wiki/VMware_Workstation) — abgerufen am 2026-10-19
- [VMware Workstation Pro Download — Free-Codecs](https://www.free-codecs.com/download/vmware-workstation-pro.htm) — abgerufen am 2026-10-19
- [Windows Server Evaluation — Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/get-started/evaluation) — abgerufen am 2026-10-19
- [Windows Server Network Infrastructure — Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/windows-server-network-infrastructure/) — abgerufen am 2026-10-19

---

**Nächster Schritt:** Meilenstein M3 — Webapp-Gerüst (Astro, Navigation, Suche, Dark Mode, Quiz)
