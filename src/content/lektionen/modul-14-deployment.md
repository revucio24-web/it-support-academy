---
title: "Modul 14: Software-Deployment, Intune/Entra ID Grundlagen"
level: 2
module: 14
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/intune/intune-service/apps/apps-windows-10-app-deploy"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/manage-roles-portal"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/modules/intro-to-endpoint-manager/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/modules/manage-devices-with-microsoft-endpoint-manager/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Grundlagen des Software-Deployments und kannst verschiedene Deployment-Methoden unterscheiden
2. Du kennst Microsoft Intune als MDM/MAM-Lösung und verstehst deren Hauptfunktionen
3. Du verstehst Microsoft Entra ID (ehemals Azure AD) und dessen Rolle bei Identitäts- und Zugriffsverwaltung
4. Du kannst die Unterschiede zwischen Geräte- und App-Verwaltung erklären
5. Du kennst typische Fehlerquellen bei Software-Deployment und deren Vermeidung

---

## Theorie

### 1. Software-Deployment — Grundlagen

Software-Deployment beschreibt den Prozess, Software auf Geräte oder in eine Umgebung zu verteilen, zu installieren und zu konfigurieren. Im enterprise IT-Support ist die Planung und Durchführung von Deployments eine Kernaufgabe des IT-Administrators.

**Ziele eines guten Deployments:**
- Konsistente Softwareumgebung über alle Geräte hinweg
- Minimale Unterbrechung der Benutzerproduktivität
- Nachvollziehbare und dokumentierte Verteilung
- Rollback-Fähigkeit im Fehlerfall

**Deployment-Methoden im Überblick:**

| Methode | Beschreibung | Typische Anwendung |
|---------|--------------|-------------------|
| **Manuell** | Installation durch Administrator oder Benutzer per Hand | Einmalige Installationen, kleine Umgebungen |
| **Automatisiert (MDM)** | Verwaltung über Mobile Device Management (Intune) | Große Umgebungen, Standardsoftware |
| **Gruppenrichtlinie (GPO)** | Verteilung über Active Directory Gruppenrichtlinien | Domänengebundene Windows-Geräte |
| **SCCM/MECM** | System Center Configuration Manager für komplexe Deployments | Sehr große Umgebungen, Betriebssystem-Imaging |
| **Cloud-basiert** | SaaS-Apps über Intune oder Portale wie Company Portal | moderne hybride Arbeitsumgebungen |

Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

### 2. Microsoft Intune — MDM und MAM

Microsoft Intune ist ein cloudbasierter Endpoint-Management-Dienst, der die Geräte und Apps einer Organisation verwaltet und schützt. Laut Microsoft Learn ist Intune um drei Säulen aufgebaut: **Identitäten** (Anmeldungen), **Geräte** (von denen aus angemeldet wird) und **Apps** (mit denen die Arbeit erledigt wird). Identitätsdaten laufen über Microsoft Entra ID (Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19).

**Hauptfunktionen von Intune:**

- **Geräteverwaltung (MDM):** Windows-, macOS-, iOS- und Android-Geräte registrieren und verwalten
- **App-Verwaltung (MAM):** Apps zuweisen, konfigurieren und schützen — auch auf BYOD-Geräten
- **Compliance-Richtlinien:** Geräte-Compliance überprüfen (z. B. Verschlüsselung aktiviell, PIN mindestens 6-stellig)
- **Conditional Access:** Zugriff auf Unternehmensressourcen basierend auf Geräte-Compliance und Benutzerkontext
- **Software-Updates:** Windows-Updates über Windows Update for Business steuern
- **Remote-Actions:** Gerät zurücksetzen, sperren oder Informationen abrufen

**Wichtig:** Intune speichert keine Benutzeridentitäten und führt keine Authentifizierung durch. Es verlässt sich auf Microsoft Entra ID für Benutzerkonten, Gruppen, Authentifizierung und Conditional Access (Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19).

**Intune-Rollenbasierte Zugriffsverwaltung:**

| Rolle | Berechtigung |
|-------|--------------|
| Intune-Administrator | Vollzugriff auf alle Intune-Funktionen |
| Policy- und Profil-Manager | Nur Verwaltung von Richtlinien und Profilen |
| App-Manager | Nur Verwaltung von Apps |
| Helpdesk-Agent | Remote-Actions und Lesen von Geräteinformationen |
| Leseberechtigter | Nur-Lese-Zugriff auf alle Bereiche |

Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

**Intune-Architektur (vereinfacht):**

```
Microsoft Entra ID
       │
       ▼
  Intune-Dienst
       │
       ├── Geräte (Windows, macOS, iOS, Android)
       ├── Apps (LOB, Store, Web)
       ├── Compliance-Richtlinien
       ├── Konfigurationsprofile
       └── Conditional Access
```

### 3. Microsoft Entra ID — Grundlagen

Microsoft Entra ID (bis Mai 2022 als "Azure Active Directory" bekannt) ist der cloudbasierte Identity Provider (IdP) von Microsoft. Es ist die zentrale Identitäts- und Zugriffsverwaltungslösung für Microsoft 365 und viele andere Cloud-Dienste.

**Wichtige Begriffe:**

| Begriff | Definition |
|---------|------------|
| **Tenant** | Eine dedizierte Instanz von Entra ID, die automatisch erstellt wird, wenn sich eine Organisation für einen Microsoft-Clouddienst registriert (z. B. Microsoft 365, Intune) (Quelle: Microsoft Learn — "Fundamentals of securing with Microsoft Entra ID" — abgerufen am 2026-10-19) |
| **User** | Einzelner Benutzer mit Identität im Tenant |
| **Group** | Sammlung von Benutzern oder Geräten für gemeinsame Richtlinien |
| **App Registration** | Anwendung, die sich in Entra ID anmelden kann |
| **Conditional Access** | Richtlinie, die Zugriff basierend auf Bedingungen steuert |
| **MFA** | Multi-Factor Authentication — zusätzliche Sicherheitsstufe |
| **SSO** | Single Sign-On — einmalige Anmeldung für mehrere Dienste |

**Entra ID im IT-Support — typische Aufgaben:**

- Benutzer erstellen, deaktivieren und löschen
- Gruppenmitgliedschaft verwalten
- Passwort-Resets durchführen (Self-Service oder Admin-Reset)
- MFA für Benutzer aktivieren oder deaktivieren
- App-Zugriffe und Berechtigungen überwachen
- Conditional Access-Richtlinien verwalten

Quelle: Microsoft Learn — "What is Microsoft Entra ID?" — abgerufen am 2026-10-19.

### 4. Entra ID und Intune — Zusammenarbeit

Intune und Entra ID arbeiten eng zusammen. Entra ID liefert die Identität, Intune setzt die Geräte- und App-Richtlinien durch.

**Typischer Authentifizierungsfluss:**

1. Benutzer meldet sich bei einem Gerät an
2. Gerät authentifiziert sich gegen Entra ID
3. Entra ID prüft Conditional Access-Richtlinien
4. Intune sendet den Geräte-Compliance-Status an Entra ID
5. Conditional Access kombiniert Compliance-Status mit Benutzer-, App-, Standort- und Risikosignalen → Zugriff wird zugelassen oder blockiert

Dieser Ansatz schließt den Zero-Trust-Zyklus: Zugriffsentscheidungen basieren auf dem tatsächlichen Gerätezustand und nicht darauf, ob sich das Gerät im Unternehmensnetzwerk befindet (Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19).

**Geräteregistrierung in Intune:**

| Registrierungstyp | Beschreibung |
|-------------------|--------------|
| **Automatische Registrierung** | Gerät registriert sich automatisch bei Entra ID und Intune (Microsoft 365 E3/E5) |
| **Benutzerinitiierte Registrierung** | Benutzer registriert Gerät selbst über Company Portal-App |
| **Bulk-Enrollment** | Mehrere Geräte gleichzeitig über einen Token oder Paket |

Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

### 5. Software-Deployment mit Intune

### 5. Software-Deployment mit Intune

Intune bietet verschiedene Wege, Software zu verteilen:

**App-Typen in Intune:**

| Typ | Beschreibung | Beispiel |
|-----|------------|----------|
| **Microsoft Store-App** | App aus dem Microsoft Store | Microsoft Teams, Edge |
| **LOB-App (Line of Business)** | Eigene oder Drittanbieter-Apps — Dateierweiterungen `.msi`, `.appx`, `.appxbundle` | Branchenspezifische Software |
| **Win32-App** | Konvertiert mit dem Microsoft Win32 Content Prep Tool in `.intunewin`-Format | Klassische Windows-Desktop-Apps |
| **Web-App** | Verknüpfung auf eine Webanwendung | Internes Webportal |
| **iOS-/Android-App** | Mobile Apps aus den Stores | Outlook Mobile |

**Verfahren zum Bereitstellen von Win32-Apps in Intune:**

1. App in ein `.intunewin`-Paket konvertieren (mit dem Microsoft Win32 Content Prep Tool)
2. App in Intune hochladen
3. Installations- und Deinstallationsbefehle definieren
4. Erkennungsregeln konfigurieren (ob App installiert ist)
5. App zu Gruppe zuweisen (Erforderlich, Verfügbar oder Deinstallieren)

**Praxis-Tipp:** Das Microsoft Win32 Content Prep Tool ist als Befehlstool verfügbar und wandelt Setup-Dateien (z. B. `.exe`, `.msi`) in das `.intunewin`-Format um (Quelle: Microsoft Learn — "Windows App Deployment by Using Microsoft Intune" — abgerufen am 2026-10-19).

Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

### 6. CompTIA A+ Perspektive — Deployment im Support-Kontext

Aus CompTIA A+ Sicht ist Software-Deployment ein Bestandteil der operativen IT. Der A+ Lehrplan behandelt:

- **Bereitstellungsmethoden:** Unattended Installation (Antwortdatei), Sliding Deployment (stufenweise Einführung), Pilot-Deployment (Testgruppe zuerst)
- **Imaging:** Sysprep, Capture-Image, Apply-Image
- **Patch-Management:** Windows Update, WSUS, Drittanbieter-Tools
- **Dokumentation:** Change Management, Asset-Verwaltung

**Wichtige A+ Konzepte:**

| Konzept | Beschreibung |
|---------|-------------|
| **Unattended Installation** | Installation ohne Benutzereingriff über Antwortdatei (z. B. `unattend.xml`) |
| **Pilot-Deployment** | Software wird zunächst an eine kleine Benutzergruppe verteilt |
| **Rollback** | Rückkehr zur vorherigen Version bei Fehlern |
| **Compatibility Testing** | Prüfung, ob Software mit System und anderen Apps kompatibel ist |

Quelle: CompTIA A+ — "How to Study" — abgerufen am 2026-10-19.

---

## Praxis-Übung im Homelab

### Übung: Win32-App-Paket in Intune vorbereiten (theoretisch)

**Hinweis:** Für diese Übung wird ein Microsoft 365 Tenant mit Intune-Lizenz benötigt. In einem Homelab kann ein kostenloses Entra ID Konto mit Intune-Testabonnement verwendet werden.

**Vorbereitung:**
- Microsoft 365 Entra ID (kostenlos unter azure.microsoft.com/testen)
- Intune-Testabonnement (kostenlos verfügbar)
- Einfache Test-App (z. B. 7-Zip oder Notepad++)
- Microsoft Win32 Content Prep Tool (verfügbar als Download)

**Aufgabe:**
1. Beschreibe den Prozess, eine Win32-App in Intune zu verpacken und bereitzustellen
2. Erstelle eine Checkliste für die Win32-App-Bereitstellung
3. Skizziere, wie du eine App-Gruppe in Intune zuweisen würdigen (Pflicht vs. verfügbar)
4. Erkläre den Unterschied zwischen einer LOB-App und einer Microsoft Store-App

**Erwartetes Ergebnis:**

| Schritt | Beschreibung |
|---------|-------------|
| 1. App vorbereiten | Setup-Datei (`.exe` oder `.msi`) sicherstellen |
| 2. Packen | Microsoft Win32 Content Prep Tool ausführen → `.intunewin`-Datei |
| 3. Hochladen | App in Intune-Portal unter "Apps" → "Windows-App (Win32)" hochladen |
| 4. Befehle definieren | Installations- und Deinstallationsbefehle eingeben |
| 5. Erkennung | Erkennungsregeln konfigurieren (z. B. Registry-Prüfung oder Datei-Existenz) |
| 6. Zuweisung | App zu Benutzergerätengruppe als "Erforderlich" oder "Verfügbar" zuweisen |
| 7. Überwachung | Installationsstatus im Intune-Portal überprüfen |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Gerät wird nicht automatisch in Intune registriert

- **Symptom:** Gerät ist mit Entra ID verbunden, erscheint aber nicht in Intune
- **Ursache:** Automatische MDM-Registrierung ist nicht konfiguriert oder die Intune-Lizenz fehlt
- **Diagnose-Schritte:**
  1. Prüfe, ob eine Intune-Lizenz für den Benutzer oder das Gerät zugewiesen ist
  2. Prüfe unter Entra ID → Mobility (MDM und MAM) → Microsoft Intune die MDM-Benutzereinstellung
  3. Prüfe, ob die automatische Registrierung konfiguriert ist
- **Lösung:**
  1. Intune-Lizenz für den Benutzer zuweisen
  2. Unter Entra ID → Mobility (MDM und MAM) die automatische Registrierung aktivieren
  3. Alternative: Benutzer registriert Gerät manuell über die Company Portal-App
- **Prävention:** Automatische Registrierung bei allen neuen Geräten von Anfang an konfigurieren

---

### Fehler 2: App-Installation schlägt fehl, obwohl App zugewiesen ist

- **Symptom:** Benutzer sieht App im Company Portal, Installation schlägt aber fehl
- **Ursache:** Falscher Installationsbefehl oder fehlende Erkennungsregel
- **Diagnose-Schritte:**
  1. Prüfe den Installationsbefehl in der Intune-App-Konfiguration
  2. Prüfe, ob die App auf dem Gerät bereits installiert ist (Evtl. wurde eine vorherige Installation nicht erkannt)
  3. Prüfe das Intune-Protokoll unter dem Gerät in Intune
- **Lösung:**
  1. Installationsbefehle überprüfen und ggf. korrigieren
  2. Erkennungsregeln anpassen (z. B. korrekten Pfad oder Registry-Schlüssel prüfen)
  3. App manuell deinstallieren und neu zuweisen
- **Prävention:** Apps vor der Zuweisung auf einem Referenzgerät testen

---

### Fehler 3: Benutzer kann sich nicht anmelden — Conditional Access blockiert Zugriff

- **Symptom:** Benutzer meldet sich mit korrekten Zugangsdaten an, erhält aber Zugriffsverweigerung
- **Ursache:** Conditional Access-Richtlinie blockiert den Zugriff (z. B. Gerät nicht compliant, falscher Standort)
- **Diagnose-Schritte:**
  1. Prüfe die Anmelde-Protokolle in Entra ID unter "Überwachen" → "Anmelde-Protokolle"
  2. Prüfe, welche Conditional Access-Richtlinie den Zugriff blockiert hat
  3. Prüfe die Geräte-Compliance in Intune
- **Lösung:**
  1. Geräte-Compliance prüfen und ggf. Compliance-Richtlinie anpassen
  2. Conditional Access-Richtlinie anpassen (z. B. Ausnahme für bestimmte Benutzergruppe)
  3. Benutzer über den Blockierenden Zustand informieren und Lösung kommunizieren
- **Prävention:** Conditional Access-Richtlenien erst im "Berichtsmodus" aktivieren, bevor sie erzwungen werden

---

### Fehler 4: Passwort-Reset funktioniert nicht — SSPR konfiguriert falsch

- **Symptom:** Benutzer kann Passwort nicht über Self-Service Password Reset (SSPR) zurücksetzen
- **Ursache:** SSPR ist nicht aktiviert oder die Authentifizierungsmethoden sind falsch konfiguriert
- **Diagnose-Schritte:**
  1. Prüfe unter Entra ID → "Kennwortzurücksetzung" ob SSPR aktiviert ist
  2. Prüfe, welche Authentifizierungsmethoden konfiguriert sind
  3. Prüfe, ob der Benutzer für SSPR berechtigt ist (Gruppenzuweisung)
- **Lösung:**
  1. SSPR in Entra ID aktivieren
  2. Mindestens eine Authentifizierungsmethode konfigurieren (z. B. E-Mail oder Mobiltelefon)
  3. SSPR-Benutzergruppe überprüfen
- **Prävention:** SSPR bei der Einführung von Entra ID konfigurieren und Schulungsmaterial für Benutzer bereitstellen

---

## Mini-Quiz

**Frage 1:** Was ist der Hauptunterschied zwischen MDM und MAM bei Intune?
- A) MDM verwaltet nur Windows-Geräte, MAM nur mobile Geräte
- B) MDM verwaltet das gesamte Gerät, MAM verwaltet nur einzelne Apps
- C) MDM ist kostenlos, MAM kostet extra
- D) Es gibt keinen Unterschied

**Antwort:** B — MDM (Mobile Device Management) verwaltet das gesamte Gerät, MAM (Mobile Application Management) verwaltet nur einzelne Apps, auch auf BYOD-Geräten. Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

---

**Frage 2:** Was ist der erste Schritt beim Bereitstellen einer Win32-App in Intune?
- A) App in ein `.intunewin`-Paket konvertieren
- B) App im Microsoft Store suchen
- C) App manuell auf jedem Gerät installieren
- D) Conditional Access-Richtlinie erstellen

**Antwort:** A — Die Win32-App muss zuerst mit dem Microsoft Win32 Content Prep Tool in ein `.intunewin`-Paket konvertiert werden. Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

---

**Frage 3:** Was bedeutet der Begriff "Tenant" in Entra ID?
- A) Ein physischer Server im Rechenzentrum
- B) Eine Instanz von Entra ID für eine Organisation
- C) Ein Benutzerkonto
- D) Ein Netzwerksegment

**Antwort:** B — Ein Tenant ist eine Instanz von Entra ID, die einer Organisation zugeordnet ist. Quelle: Microsoft Learn — "What is Microsoft Entra ID?" — abgerufen am 2026-10-19.

---

**Frage 4:** Welche Deployment-Methode ist für große Umgebungen mit hunderten Geräten am besten geeignet?
- A) Manuelle Installation
- B) MDM-basiertes Deployment über Intune
- C) Windows Update
- D) Manuelles Kopieren von Dateien

**Antwort:** B — MDM-basiertes Deployment über Intune ist für große Umgebungen am besten geeignet, da es skalierbar und zentral verwaltbar ist. Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

---

**Frage 5:** Was tun, wenn ein Benutzer sich nicht anmelden kann und Conditional Access den Zugriff blockiert?
- A) Das Benutzerkonto löschen
- B) Die Conditional Access-Richtlinie prüfen und ggf. anpassen
- C) Den Benutzer ignorieren
- D) Den PC neu aufsetzen

**Antwort:** B — Die Conditional Access-Richtlinie muss geprüft und ggf. angepasst werden (z. B. Geräte-Compliance überprüfen). Quelle: Microsoft Learn — "What is Microsoft Intune?" — abgerufen am 2026-10-19.

---

## Ticket-Szenario

**Situation:**
Ein neuer Mitarbeiter (Herr Schmidt) erhält sein neues Firmen-Laptop. Das Gerät ist mit Entra ID verbunden, wird aber nicht in Intune registriert. Der Mitarbeiter kann sich nicht bei den Unternehmens-Apps anmelden und bittet um Hilfe.

**Aufgabe:**
1. Was ist die Priorität dieses Tickets?
2. Wie gehst du bei der Diagnose vor?
3. Wie löst du das Problem?
4. Dokumentiere den Fall für die Wissensdatenbank.

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P2 (Hoch) — Der Mitarbeiter kann nicht arbeiten, aber es handelt sich um einen einzelnen Benutzer, nicht um einen systemweiten Ausfall.

**2. Diagnose:**
- Prüfe, ob das Gerät mit Entra ID verbunden ist (Einstellungen → Konten → Auf Arbeits- oder Schulkonto zugreifen)
- Prüfe, ob eine Intune-Lizenz für den Benutzer Herr Schmidt zugewiesen ist
- Prüfe unter Entra ID → Mobility (MDM und MAM) → Microsoft Intune die MDM-Benutzereinstellung
- Prüfe, ob die automatische Registrierung aktiviert ist

**3. Lösung:**
- Intune-Lizenz für Herr Schmidt zuweisen (falls nicht vorhanden)
- Automatische Registrierung in Entra ID aktivieren (falls nicht konfiguriert)
- Gerät neu starten und Registrierung erzwingen
- Alternative: Herr Schmidt registriert das Gerät manuell über die Company Portal-App

**4. Dokumentation:**
- Problem: Neues Gerät wird nicht automatisch in Intune registriert
- Ursache: Intune-Lizenz fehlt oder automatische Registrierung ist nicht konfiguriert
- Lösung: Intune-Lizenz zuweisen, automatische Registrierung aktivieren, Gerät neu starten
- Verifizierung: Gerät erscheint in Intune und Mitarbeiter kann sich bei Unternehmens-Apps anmelden

</details>

---

## Quellen

- [Microsoft Learn — What is Microsoft Intune?](https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune) — abgerufen am 2026-10-19
- [Microsoft Learn — What is Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/fundamentals/whatis) — abgerufen am 2026-10-19
- [Microsoft Learn — Windows App Deployment by Using Microsoft Intune](https://learn.microsoft.com/en-us/intune/intune-service/apps/apps-windows-10-app-deploy) — abgerufen am 2026-10-19
- [Microsoft Learn — Manage Microsoft Entra Roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/manage-roles-portal) — abgerufen am 2026-10-19
- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19
- [Microsoft Learn — Introduction to Microsoft Intune](https://learn.microsoft.com/en-us/training/modules/intro-to-endpoint-manager/) — abgerufen am 2026-10-19
- [Microsoft Learn — Manage Devices with Microsoft Intune](https://learn.microsoft.com/en-us/training/modules/manage-devices-with-microsoft-endpoint-manager/) — abgerufen am 2026-10-19
- [Microsoft Learn — Enable SSO for Enterprise Apps](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso) — abgerufen am 2026-10-19
