---
title: "Modul 18: Linux & macOS für den IT-Support"
level: 1
module: 18
last_verified: 2026-10-26
windows_version: "—"
schwerpunkt: ["Bash", "Dateisysteme", "macOS", "Support-Szenarien"]
sources:
  - url: "https://www.linux.com/"
    abrufdatum: 2026-10-26
  - url: "https://support.apple.com/de-de/ht201261"
    abrufdatum: 2026-10-26
---

## Lernziele

1. Du kennst die wichtigsten Befehlszeilenbefehle unter Linux (Bash) und kannst diese sicher anwenden
2. Du verstehst die Unterschiede zwischen Linux-Distributionen und macOS für den Support-Alltag
3. Du kannst häufige Probleme bei der Administration von Linux-Servern und macOS-Geräten erkennen und lösen
4. Du kennst die Grundlagen der Paketverwaltung (apt, yum, brew) und kannst Software installieren/update
5. Du kannst Benutzer- und Rechteverwaltung unter Linux macOS-basierten Systemen durchführen

## Theorie: Bash & Shell Grundlagen

### 1. Die Shell interpretieren

Die Bash (Bourne Again SHell) ist der Standard-Shell-Interpreter unter den meisten Linux-Distributionen und macOS (bis Catalina). Sie nimmt Eingaben entgegen, interpretiert Befehle und gibt das Ergebnis zurück.

**Wichtige Konzepte:**

| Konzept | Beschreibung |
|---------|--------------|
| **Prompt** | `user@host:$` – zeigtBereitchaft zur Eingabe an |
| **Befehle** | Einzelanweisungen, z. B. `ls`, `cd`, `mkdir` |
| **Argumente** | Optionen und Parameter, z. B. `ls -l /home` |
| **Optionen** | Kurz- (`-l`) und Langoptionen (`--list`) |

### 2. Wichtige Befehle der Bash

| Befehl | Funktion | Beispiel |
|--------|----------|----------|
| `ls` | Verzeichnisinhalte auflisten | `ls -la` |
| `cd` | In ein Verzeichnis wechseln | `cd /var/log` |
| `mkdir` | Verzeichnis erstellen | `mkdir neue-mappe` |
| `rm` | Dateien/Verzeichnisse löschen | `rm alter-bericht.txt` |
| `cp` | Dateien kopieren | `cp vorlage.txt kopie.txt` |
| `mv` | Verschieben/Umschreiben | `mv altername neuername` |
| `cat` | Dateiinhalt anzeigen | `cat datei.txt` |
| `echo` | Text ausgeben | `echo "Hallo Welt"` |

### 3. Dateisystemstruktur

Linux folgt dem hierarchischen Dateisystembaum (Filesystem Hierarchy Standard, FHS):

| Verzeichnis | Inhalt |
|------------|--------|
| `/` | Wurzelverzeichnis |
| `/bin` | Wichtige Benutzer-Binär-Executables |
| `/etc` | Systemkonfigurationsdateien |
| `/home` | Benutzer-Home-Verzeichnisse |
| `/var` | Variable Dateien (Logs, Cache) |
| `/tmp` | Zeitweise Dateien |
| `/usr` | Unix-Software (read-only) |

## Praxis-Übung: Erste Schritte in der Bash

### Exercise 1: Verzeichnisnavigation

1. Wechsle in dein Home-Verzeichnis: `cd ~`
2. Liste alle Dateien inklusive versteckter auf: `ls -la`
3. Erstelle ein neues Verzeichnis: `mkdir it-support-lernen`
4. Wechsle in das neue Verzeichnis: `cd it-support-lernen`
5. Erstelle eine Textdatei: `echo "Hallo IT-Support" > willkommen.txt`
6. Zeige den Inhalt: `cat willkommen.txt`

### Exercise 2: Rechteverwaltung

1. Prüfe die Berechtigungen einer Datei: `ls -l datei.txt`
2. Ändere die Berechtigungen: `chmod u+rwx datei.txt`
3. Wechsle den Besitzer: `chown benutzer:gruppe datei.txt`

## macOS-spezifische Besonderheiten

### 1. Terminal unter macOS

Seit macOS Catalina Standard-Shell ist **zsh**, Bash bleibt aber verfügbar:

```bash
# Bash starten
bash

# Aktuelle Shell prüfen
echo $SHELL
```

### 2. Unterschiede zu Linux

| Aspekt | Linux | macOS |
|--------|-------|-------|
| **Paketverwaltung** | apt (Debian/Ubuntu), yum (RHEL/CentOS) | brew (Homebrew), port (MacPorts) |
| **Dateisystem** | meistens APFS oder HFS+ | APFS oder HFS+ |
| **Systemintegrität** | varies by distro | System Integrity Protection (SIP) |

## macOS-Support-Szenarien

### Häufige Probleme und Lösungen

| Problem | Lösung |
|---------|--------|
| **App startet nicht** | 1. Überprüfe Konsolenprotokolle (`Console.app` oder `log` Befehl) 2. Setze die App zurück (App löschen & neu installieren) 3. Prüfe auf Kompatibilität mit der macOS-Version |
| **Netzwerkverbindung fehlgeschlagen** | 1. TCP/IP-Stack zurücksetzen: `sudo networksetup -setnetworkserviceenabled off/on` 2. DNS ändern in Systemeinstellungen |
| **Benutzer kann sich nicht anmelden** | 1. Überprüfe das Passwort und dasKennwort-Rücksetzungstool 2. Starte im Safe Mode (`Umschaltdrücken beim Hochfahren`) |

