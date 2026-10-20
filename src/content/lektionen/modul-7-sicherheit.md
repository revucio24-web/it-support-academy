---
title: "Modul 7: Sicherheit Basics — Defender, Phishing, MFA, Fernwartung"
level: 1
module: 7
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/windows-defender-security-center"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-security-center-antivirus"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/modules/securing-you-basics-beyond/2-phishing"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remotepc/remote-desktop-allow-access"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/wdsc-firewall-network-protection"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Grundlagen der Windows-Sicherheit und kennst die Windows Security App
2. Du kannst Microsoft Defender Antivirus aktivieren, konfigurieren und Scans durchführen
3. Du erkennst Phishing-E-Mails und kennst die richtigen Gegenmaßnahmen
4. Du verstehst Multi-Factor Authentication (MFA) und kannst sie erklären
5. Du kannst Remote Desktop sicher konfigurieren und kennst die Risiken der Fernwartung

---

## Theorie

### 1. Windows Security — Die zentrale Sicherheitszentrale

Die **Windows Security App** ist die integrierte Sicherheitszentrale in Windows 10 und Windows 11. Sie bündelt mehrere Sicherheitskomponenten in einer Oberfläche:

| Bereich | Funktion |
|---------|----------|
| Virus & threat protection | Microsoft Defender Antivirus, Scans, Ransomware-Schutz |
| Account protection | Anmeldeoptionen, Windows Hello, dynamische Sperrung |
| Firewall & network protection | Windows Firewall, Netzwerkprofile |
| App & browser control | SmartScreen, Exploit-Schutz |
| Device security | TPM, Core Isolation, Secure Boot |
| Device performance & health | Treiber, Speicherplatz, Windows Update |

**Öffnen der Windows Security App:**
- Startmenü → "Windows Security" eingeben
- Oder: Einstellungen → Datenschutz & Sicherheit → Windows Security

*(Quelle: Microsoft Learn — Windows Security, abgerufen am 2026-10-19)*

### 2. Microsoft Defender Antivirus

**Microsoft Defender Antivirus** ist der in Windows integrierte Virenschutz. Er bietet:

- **Echtzeit-Schutz (Real-time protection):** Überwacht Dateien und Programme beim Öffnen und Ausführen
- **Verhaltensüberwachung:** Erkennt verdächtige Aktivitäten auch ohne bekannte Signatur
- **Heuristik:** Erkennt neue, unbekannte Bedrohungen anhand von Verhaltensmustern
- **Cloud-gestützter Schutz:** Schickt verdächtige Dateien zur Analyse an Microsoft

**Wichtige Einstellungen (Windows Security → Virus & threat protection → Einstellungen verwalten):**

| Einstellung | Empfehlung |
|-------------|------------|
| Echtzeit-Schutz | Immer aktiviert lassen |
| Cloud-gestützter Schutz | Aktiviert lassen |
| Automatische Beispielübermittlung | Aktiviert lassen |
| Veränderungsschutz (Tamper Protection) | Aktiviert lassen |

**Scan-Typen:**

| Scan-Typ | Beschreibung |
|----------|--------------|
| Schnellscan | Überwacht Systemordner und häufig infizierte Bereiche |
| Vollscan | Prüft alle Dateien und Laufwerke |
| Benutzerdefinierter Scan | Einzelner Ordner oder Laufwerk |
| Microsoft Defender Offline Scan | Startet Windows neu und scannt vor dem Systemstart |

**Hinweis:** Wenn ein Drittanbieter-Antivirus installiert wird, deaktiviert sich Microsoft Defender Antivirus automatisch. In der Windows Security App wird dann der Drittanbieter als aktiver Schutz angezeigt.

*(Quelle: Microsoft Learn — Microsoft Defender Antivirus in the Windows Security app, abgerufen am 2026-10-19)*

### 3. Windows Firewall

Die **Windows Firewall** filtert ein- und ausgehende Netzwerkverbindungen und schützt vor unbefugtem Zugriff.

**Netzwerkprofile:**

| Profil | Verwendung |
|--------|------------|
| Domäne | Unternehmensnetzwerk mit Domänencontroller |
| Privat | Vertrauenswürdige Netzwerke (z. B. Heimnetzwerk) |
| Öffentlich | Nicht vertrauenswürdige Netzwerke (z. B. Café, Flughafen) |

**Konfiguration:** Windows Security → Firewall & Netzwerkschutz → Netzwerkprofil auswählen → Microsoft Defender Firewall ein-/ausschalten

**Wichtig:** Die Firewall sollte grundsätzlich aktiviert bleiben. Wenn eine App blockiert wird, sollte eine Ausnahmeregel erstellt werden, anstatt die Firewall komplett zu deaktivieren.

*(Quelle: Microsoft Learn — Firewall and network protection, abgerufen am 2026-10-19)*

### 4. Phishing und Social Engineering

**Phishing** ist eine Form des Social Engineering, bei der Angestellte durch gefälschte E-Mails, Websites oder Nachrichten dazu verleitet werden, vertrauliche Daten preiszugeben.

**Erkennungsmerkmale für Phishing-E-Mails:**

| Merkmal | Beispiel |
|---------|----------|
| Unerwartete Anhänge | "Rechnung_2024.pdf.exe" — ausführbare Datei als Anhang |
| Verdächtige Links | Mauszeiger über Link halten — Ziel-URL sieht verdächtig aus |
| Dringlichkeit | "Ihr Konto wird in 24 Stunden gesperrt!" |
| Rechtschreibfehler | Ungewöhnliche Formulierungen, falsche Grammatik |
| Falsche Absender | Absender-Adresse weicht vom angegebenen Namen ab |

**Arten von Phishing:**

| Art | Beschreibung |
|-----|--------------|
| Phishing | Massen-E-Mails an viele Empfänger |
| Spear Phishing | Gezielte Angriffe auf bestimmte Personen |
| Whaling | Spear Phishing auf Führungskräfte |
| Vishing | Phishing über Telefon (Voice) |
| Smishing | Phishing über SMS |

**Gegenmaßnahmen:**
1. **Nicht klicken** auf Links oder Anhänge in verdächtigen E-Mails
2. **E-Mail melden:** In Outlook → "Melden" → "Phishing" wählen
3. **E-Mail löschen** nach dem Melden
4. **Verifizieren:** Bei Unsicherheit den Absender über einen anderen Kanal kontaktieren
5. **Benutzer-Schulung:** Regelmäßige Sensibilisierung der Mitarbeiter

*(Quelle: Microsoft Learn — Identify and protect yourself from phishing, abgerufen am 2026-10-19; CompTIA A+ 220-1102, Security Domain)*

### 5. Multi-Factor Authentication (MFA)

**Multi-Factor Authentication** verlangt mindestens zwei verschiedene Nachweise für die Identität:

| Faktor | Beschreibung | Beispiel |
|--------|--------------|----------|
| Etwas, das man weiß | Wissen | Passwort, PIN |
| Etwas, das man hat | Besitz | Smartphone, Hardware-Token |
| Etwas, das man ist | Biometrie | Fingerabdruck, Gesichtserkennung |

**Vorteile von MFA:**
- Selbst bei kompromittiertem Passwort bleibt das Konto geschützt
- Reduziert das Risiko von Identitätsdiebstahl
- Erfüllt Compliance-Anforderungen (z. B. GDPR, ISO 27001)

**Hinweis:** MFA ist keine Garantie für absolute Sicherheit, aber sie erhöht die Sicherheit erheblich. SMS-basierte MFA ist besser als keine MFA, aber anfällig für SIM-Swapping-Angriffe. Authenticator-Apps oder Hardware-Tokens sind sicherer.

*(Quelle: CompTIA A+ 220-1102, Security Domain — Authentication, abgerufen am 2026-10-19)*

### 6. Fernwartung (Remote Desktop)

**Remote Desktop Protocol (RDP)** ermöglicht die Fernsteuerung eines anderen Windows-Computers über ein Netzwerk.

**Voraussetzungen für den Remote-Desktop-Host:**
- Windows 11 Pro, Enterprise oder Education (Windows 11 Home kann nicht als Host dienen)
- Computer muss eingeschaltet und mit dem Netzwerk verbunden sein
- Remote Desktop muss aktiviert sein

**Aktivierung (auf dem Host-PC):**
1. Einstellungen → System → Remote Desktop
2. "Remote Desktop" auf "Ein" stellen
3. Bestätigen

**Verbindung herstellen (vom Client-PC):**
1. Startmenü → "Remote Desktop-Verbindung" eingeben
2. Computername oder IP-Adresse des Host-PCs eingeben
3. "Verbinden" klicken
4. Anmeldeinformationen eingeben

**Sicherheitsaspekte:**
- **Network Level Authentication (NLA):** Erfordert Authentifizierung bevor eine Sitzung aufgebaut wird
- **Starke Passwörter:** Fernwartungszugänge sollten immer starke Passwörter haben
- **Nur in vertrauenswürdigen Netzwerken:** Remote Desktop nicht in öffentlichen Netzwerken aktivieren
- **MFA verwenden:** Wo möglich, MFA für Remote Desktop aktivieren
- **Port 3389:** Standard-RDP-Port — sollte nicht ohne Firewall-Schutz offen sein

*(Quelle: Microsoft Learn — Enable Remote Desktop on your PC, abgerufen am 2026-10-19)*

---

## Praxis-Übung im Homelab

### Übung: Windows Security konfigurieren und Phishing erkennen

**Vorbereitung:**
- Windows 11 VM oder physischer PC (Pro Edition für Remote Desktop)
- Zugriff auf die Windows Security App

**Aufgabe 1: Windows Security prüfen**
1. Öffne die Windows Security App (Startmenü → "Windows Security")
2. Prüfe, ob Microsoft Defender Antivirus aktiviert ist
3. Prüfe, ob die Echtzeit-Schutz aktiviert ist
4. Starte einen Schnellscan und dokumentiere das Ergebnis
5. Prüfe den Status der Windows Firewall

**Aufgabe 2: Phishing-E-Mail analysieren**
1. Erstelle eine Liste von 5 Merkmalen, die auf Phishing hinweisen
2. Beschreibe, wie du in Outlook eine verdächtige E-Mail meldest
3. Erstelle eine Checkliste für Mitarbeiter: "Was tun bei verdächtiger E-Mail?"

**Aufgabe 3: Remote Desktop konfigurieren (nur Pro Edition)**
1. Prüfe, ob dein Windows 11 Pro als Remote-Desktop-Host dienen kann
2. Aktiviere Remote Desktop in den Einstellungen
3. Füge einen Benutzer für den Fernzugriff hinzu
4. Dokumentiere die Schritte

**Erwartetes Ergebnis:**

| Aufgabe | Ergebnis |
|---------|----------|
| 1 | Windows Security geöffnet, Defender-Status geprüft, Schnellscan durchgeführt |
| 2 | 5 Phishing-Merkmale identiziert, Meldeweg dokumentiert |
| 3 | Remote Desktop aktiviert, Benutzer hinzugefügt (oder Hinweis: Home Edition nicht unterstützt) |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Echtzeit-Schutz deaktiviert

- **Symptom:** Viren werden nicht erkannt, System wird infiziert
- **Ursache:** Echtzeit-Schutz wurde manuell deaktiviert oder durch Drittanbieter-Antivirus
- **Diagnose-Schritte:**
  1. Windows Security → Virus & threat protection → Einstellungen verwalten
  2. Prüfen, ob "Echtzeit-Schutz" aktiviert ist
  3. Prüfen, ob ein Drittanbieter-Antivirus installiert ist
- **Lösung:**
  - Echtzeit-Schutz wieder aktivieren
  - Drittanbieger-Antivirus deinstallieren oder konfigurieren
- **Prävention:** Echtzeit-Schutz nie dauerhaft deaktivieren; bei Problemen temporär deaktivieren und danach sofort wieder aktivieren

---

### Fehler 2: Phishing-E-Mail angeklickt

- **Symptom:** Benutzer hat auf einen Link in einer verdächtigen E-Mail geklickt
- **Ursache:** Fehlende Sensibilisierung, E-Mail sah vertrauenswürdig aus
- **Diagnose-Schritte:**
  1. Prüfen, ob der Benutzer Anhänge geöffnet oder Links angeklickt hat
  2. Prüfen, ob das Passwort eingegeben wurde
  3. System auf Malware scannen
- **Lösung:**
  - Passwort sofort ändern
  - MFA aktivieren falls noch nicht geschehen
  - System mit Microsoft Defender Antivirus vollständig scannen
  - IT-Sicherheitsteam informieren
- **Prävention:** Regelmäßige Schulungen, Phishing-Simulationen, "Melden"-Button in Outlook nutzen

---

### Fehler 3: Firewall deaktiviert

- **Symptom:** Netzwerkverbindungen werden nicht gefiltert, System ist angreifbar
- **Ursache:** Firewall wurde deaktiviert, um eine App zum Laufen zu bringen
- **Diagnose-Schritte:**
  1. Windows Security → Firewall & Netzwerkschutz
  2. Prüfen, ob die Firewall für das aktuelle Netzwerkprofil aktiviert ist
- **Lösung:**
  - Firewall wieder aktivieren
  - Stattdessen eine Ausnahmeregel für die betreffende App erstellen
- **Prävention:** Firewall nie komplett deaktivieren; immer Ausnahmeregeln verwenden

---

### Fehler 4: Remote Desktop ohne Sicherheitsmaßnahmen

- **Symptom:** Remote Desktop ist aktiviert, aber nicht abgesichert
- **Ursache:** Remote Desktop wurde ohne starke Passwörter oder NLA aktiviert
- **Diagnose-Schritte:**
  1. Prüfen, ob Remote Desktop aktiviert ist
  2. Prüfen, ob NLA aktiviert ist
  3. Prüfen, welche Benutzer Zugriff haben
- **Lösung:**
  - NLA aktivieren
  - Starke Passwörter für alle Remote-Benutzer festlegen
  - MFA konfigurieren
  - Remote Desktop nur in vertrauenswürdigen Netzwerken aktivieren
- **Prävention:** Remote Desktop nur bei Bedarf aktivieren, regelmäßig überwachen, Zugriffsrechte einschränken

---

## Mini-Quiz

**Frage 1:** Wo findest du die Einstellungen für Microsoft Defender Antivirus in Windows 11?
- A) Systemsteuerung → Programme
- B) Windows Security → Virus & threat protection
- C) Einstellungen → System → Info
- D) Task-Manager → Start

**Antwort:** B — Windows Security → Virus & threat protection.

---

**Frage 2:** Welches ist ein typisches Erkennungsmerkmal für Phishing-E-Mails?
- A) Die E-Mail kommt von einem bekannten Kollegen
- B) Die E-Mail enthält eine dringende Aufforderung und einen verdächtigen Link
- C) Die E-Mail ist in einer Fremdsprache verfasst
- D) Die E-Mail hat kein Betreff

**Antwort:** B — Dringlichkeit und verdächtige Links sind klassische Phishing-Merkmale.

---

**Frage 3:** Was bedeutet MFA?
- A) Multi-Firewall-Activation
- B) Multi-Factor Authentication
- C) Managed File Access
- D) Microsoft Firewall App

**Antwort:** B — Multi-Factor Authentication.

---

**Frage 4:** Welche Windows-Edition kann NICHT als Remote-Desktop-Host dienen?
- A) Windows 11 Pro
- B) Windows 11 Enterprise
- C) Windows 11 Home
- D) Windows 11 Education

**Antwort:** C — Windows 11 Home kann nicht als Remote-Desktop-Host dienen.

---

**Frage 5:** Was solltest du tun, wenn du eine verdächtige E-Mail erhältst?
- A) Auf den Link klicken, um zu prüfen
- B) Die E-Mail an alle Kollegen weiterleiten
- C) Nicht klicken, die E-Mail melden und löschen
- D) Die E-Mail ignorieren und nichts tun

**Antwort:** C — Nicht klicken, melden und löschen.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter meldet sich: "Ich habe heute Morgen eine E-Mail erhalten, die aussieht, als wäre sie von unserer IT-Abteilung. Darin stand, dass mein Passwort abgelaufen ist und ich es über einen Link ändern muss. Ich habe auf den Link geklickt und meine Daten eingegeben. Jetzt habe ich Angst, dass mein Konto kompromittiert ist."

**Aufgabe:**
1. Was ist die Priorität dieses Tickets?
2. Wie gehst du bei der Diagnose vor?
3. Wie löst du das Problem?
4. Dokumentiere den Fall für die Wissensdatenbank.

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P1 (Kritisch) — Möglicherweise kompromittiertes Konto, Gefahr für gesamtes Netzwerk.

**2. Diagnose:**
- Prüfen, ob der Benutzer tatsächlich Daten eingegeben hat
- Prüfen, ob das Konto ungewöhnliche Aktivitäten zeigt (Active Directory / Microsoft Entra ID)
- Prüfen, ob der Benutzer auf weitere Links geklickt oder Anhänge geöffnet hat
- System des Benutzers auf Malware scannen

**3. Lösung:**
- Passwort des Benutzers sofort zurücksetzen
- MFA für das Konto aktivieren (falls nicht bereits geschehen)
- Alle aktiven Sitzungen des Benutzers beenden
- System mit Microsoft Defender Antivirus vollständig scannen
- IT-Sicherheitsteam informieren
- Benutzer über Phishing aufklären

**4. Dokumentation:**
- Problem: Benutzer hat Phishing-E-Mail angeklickt und Daten eingegeben
- Ursache: Fehlende Sensibilisierung, E-Mail sah vertrauenswürdig aus
- Lösung: Passwort zurückgesetzt, MFA aktiviert, System gescannt
- Verifizierung: Keine weiteren Anomalien, Benutzer geschult
- Prävention: Regelmäßige Schulungen, Phishing-Simulationen

</details>

---

## Quellen

- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
- [Microsoft Learn — Windows Security](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/windows-defender-security-center) — abgerufen am 2026-10-19
- [Microsoft Learn — Microsoft Defender Antivirus in the Windows Security app](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-security-center-antivirus) — abgerufen am 2026-10-19
- [Microsoft Learn — Identify and protect yourself from phishing](https://learn.microsoft.com/en-us/training/modules/securing-you-basics-beyond/2-phishing) — abgerufen am 2026-10-19
- [Microsoft Learn — Enable Remote Desktop on your PC](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remotepc/remote-desktop-allow-access) — abgerufen am 2026-10-19
- [Microsoft Learn — Firewall and network protection](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/windows-defender-security-center/wdsc-firewall-network-protection) — abgerufen am 2026-10-19
