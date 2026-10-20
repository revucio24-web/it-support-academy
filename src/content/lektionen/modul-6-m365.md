---
title: "Modul 6: Microsoft 365 — Outlook, Teams Basics, Passwort-Resets"
level: 1
module: 6
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/en-us/training/paths/describe-microsoft-365-core-services-concepts/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/microsoft-365/admin/setup/setup-outlook?view=o365-worldwide"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/microsoftteams/teams-overview"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/microsoftteams/teams-channels-overview"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/reset-passwords?view=o365-worldwide"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/let-users-reset-passwords?view=o365-worldwide"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Grundstruktur von Microsoft 365 und kannst die wichtigsten Dienste benennen
2. Du kannst Outlook in Microsoft 365 einrichten und grundlegende E-Mail-Funktionen erklären
3. Du kennst die Grundlagen von Microsoft Teams und kannst Teams, Kanäle und Besprechungen unterscheiden
4. Du beherrschst den Passwort-Reset über das Microsoft 365 Admin Center
5. Du kennst die Self-Service-Password-Reset-Option (SSPR) und kannst sie administrativ einrichten

---

## Theorie

### 1. Microsoft 365 — Überblick

Microsoft 365 ist die cloudbasierte Produktivitätsplattform von Microsoft. Sie verbindet Office-Anwendungen (Word, Excel, PowerPoint, Outlook) mit Clouddiensten wie Exchange Online, SharePoint Online und Microsoft Teams. Microsoft 365 nutzt Microsoft Entra ID (früher Azure Active Directory) als Identitäts- und Zugriffsverwaltung.

**Kernkomponenten:**

| Komponente | Beschreibung |
|------------|--------------|
| Exchange Online | E-Mail, Kalender, Kontakte |
| SharePoint Online | Dokumentenmanagement und -speicherung |
| Microsoft Teams | Chat, Besprechungen, Anruf |
| OneDrive | Persönlicher Cloud-Speicher |
| Microsoft Entra ID | Identitätsverwaltung, Authentifizierung |

Microsoft 365 ist als Software-as-a-Service (SaaS) modelliert — Anwendungen und Daten werden in Microsoft-Rechenzentren gehostet und über das Internet genutzt.

### 2. Outlook in Microsoft 365

Outlook ist der E-Mail- und Personal-Information-Manager in Microsoft 365. Er ermöglicht E-Mail-Kommunikation, Kalenderverwaltung, Kontaktverwaltung und Aufgabenverwaltung.

**Einrichtung in Microsoft 365:**

1. Outlook über das Startmenü öffnen
2. Microsoft 365-E-Mail-Adresse eingeben und **Verbinden** wählen
3. Zusätzliche E-Mail-Adressen hinzufügen (optional)
4. Passwort eingeben und anmelden
5. Outlook lädt E-Mail und andere Daten herunter

**Outlook-Modi:**

- **Cached Exchange Mode**: Eine lokale Kopie der Postfachinhalte wird auf dem Client gespeichert, damit der Benutzer auch offline arbeiten kann
- **Online-Modus**: Direkte Verbindung zum Exchange-Server ohne lokale Zwischenspeicherung

Für IT-Support ist der **Cached Exchange Mode** relevant, da Probleme mit dem lokalen Cache (z. B. veraltete Anmeldeinformationen) zu Anmeldefehlern führen können.

### 3. Microsoft Teams — Grundlagen

Microsoft Teams ist die zentrale Collaboration-Plattform in Microsoft 365. Es kombiniert Chat, Audio-/Videoanrufe, Online-Besprechungen und Dateifreigabe in einem Tool.

**Architektur:**

Teams basiert auf Microsoft 365-Gruppen und Microsoft Graph. Beim Erstellen eines Teams werden automatisch folgende Ressourcen bereitgestellt:

- Eine Microsoft 365-Gruppe
- Eine SharePoint-Website mit Dokumentbibliothek
- Ein Exchange Online-Postfach und -Kalender
- Ein OneNote-Notizbuch

**Teams und Kanäle:**

| Begriff | Beschreibung |
|---------|--------------|
| **Team** | Sammlung von Personen, Inhalten und Tools rund um ein Projekt oder eine Abteilung |
| **Kanal** | Bereich innerhalb eines Teams für geordnete Unterhaltungen nach Themen |
| **Standardkanal** | Für alle Teammitglieder sichtbar |
| **Privater Kanal** | Nur für ausgewählte Teammitglieder sichtbar |
| **Geteilter Kanal** | Für Personen innerhalb und außerhalb des Teams sichtbar |

**Team-Rollen:**

- **Team-Ersteller** (Team owner): Kann Einstellungen verwalten, Mitglieder einladen, Kanäle erstellen
- **Team-Mitglieder** (Team members): Standard-Benutzer mit Teilnahmeberechtigung

### 4. Passwort-Reset über das Microsoft 365 Admin Center

Der Passwort-Reset ist eine der häufigsten Aufgaben im IT-Support. In Microsoft 365 kann ein Administrator über das Admin Center ein Benutzerkonto zurücksetzen.

**Voraussetzungen:**

- Microsoft 365 Business-Abonnement
- Zugewiesene Rolle: **Password Administrator** oder höher (z. B. Global Administrator)

**Schritte zum Zurücksetzen eines Benutzerpassworts:**

1. Im Microsoft 365 Admin Center zu **Benutzer** > **Aktive Benutzer** navigieren
2. Den Benutzer auswählen und **Passwort zurücksetzen** wählen
3. Ein neues Passwort generieren oder manuell festlegen
4. Optional: Benutzer muss Passwort bei nächster Anmeldung ändern
5. **Passwort zurücksetzen** bestätigen
6. Neue Anmeldedaten sicher an den Benutzer weitergeben

**Wichtige Rollen für Passwort-Resets:**

| Rolle | Berechtigung |
|-------|--------------|
| Global Administrator | Volle Zugriffsrechte, inkl. alle anderen Administratoren |
| Password Administrator | Kann Passwörter für Nicht-Administratoren zurücksetzen |
| User Administrator | Kann Passwörter zurücksetzen und Benutzerkonten verwalten |
| Helpdesk Administrator | Kann Passwörter für Benutzer ohne Administratorrechte zurücksetzen |

### 5. Self-Service Password Reset (SSPR)

Mit dem Self-Service Password Reset (SSPR) können Benutzer ihr eigenes Passwort zurücksetzen, ohne den IT-Support zu kontaktieren. SSPR ist standardmäßig nicht aktiviert und muss vom Administrator eingerichtet werden.

**Voraussetzungen für SSPR:**

- Microsoft 365 Business-, Education- oder Nonprofit-Zahlungsaktivierung (keine Testversion)
- Nutzt Microsoft Entra ID (Azure) als Authentifizierungsanbieter
- Bei lokalem Active Directory: Microsoft Entra ID P1 oder P2 erforderlich

**SSPR einrichten:**

1. Im Microsoft 365 Admin Center: **Einstellungen** > **Organisationseinstellungen**
2. Registerkarte **Sicherheit und Datenschutz** wählen
3. **Self-Service-Password-Reset** auswählen und im Microsoft Entra Admin Center konfigurieren
4. Für alle Benutzer oder ausgewählte Gruppen aktivieren
5. Authentifizierungsmethoden festlegen (z. B. E-Mail, Telefon, Authenticator-App)

**Vorteile von SSPR:**

- Reduziert Helpdesk-Anrufe für vergessene Passwörter
- 24/7-Verfügbarkeit ohne Administrator-Eingriff
- Benutzer können Passwort auch außerhalb der Geschäftszeiten zurücksetzen

---

## Praxis-Übung im Homelab

### Übung: Passwort-Reset und Outlook-Probleme diagnostizieren

**Vorbereitung:**
- Melde dich mit einem Administratorkonto am Microsoft 365 Admin Center an
- Nutze ein Testkonto (z. B. `testbenutzer@deineorganisation.de`)

**Aufgabe:**

1. **Passwort-Reset durchführen:**
   - Navigiere zu **Benutzer** > **Aktive Benutzer**
   - Wähle das Testkonto aus
   - Setze das Passwort zurück und aktiviere „Passwort bei nächster Anmeldung ändern"
   - Dokumentiere den Vorgang

2. **SSPR prüfen:**
   - Navigiere zu **Einstellungen** > **Organisationseinstellungen** > **Sicherheit und Datenschutz**
   - Prüfe, ob SSPR aktiviert ist
   - Falls nicht: Aktiviere SSPR für eine Testgruppe

3. **Outlook-Cache Problem identifizieren:**
   - Beschreibe den Vorgang, wenn ein Benutzer nach einer Passwortänderung nicht mehr auf Outlook zugreifen kann
   - Erkläre, warum der Credential Manager (Windows) in solchen Fällen relevant ist

4. **Teams-Struktur erklären:**
   - Erstelle ein Team mit zwei Kanälen (Standard und Privat)
   - Füge einen Gast hinzu und dokumentiere die Unterschiede zu regulären Mitgliedern

**Erwartetes Ergebnis:**

| Aufgabe | Ergebnis |
|---------|----------|
| Passwort-Reset | Testkonto-Passwort zurückgesetzt, Benutzer muss bei Anmeldung ändern |
| SSPR | Prüfung dokumentiert, SSPR-Status erfasst |
| Outlook-Cache | Erklärung: Credential Manager speichert alte Anmeldeinformationen |
| Teams-Struktur | Team mit Kanälen erstellt, Gast-Berechtigungen dokumentiert |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Administrator hat keine passende Rolle für Passwort-Reset

- **Symptom:** Administrator-Konto meldet „Nicht autorisiert", obwohl es ein Admin-Konto ist
- **Ursache:** Nicht jeder Administrator hat automatisch das Recht, Passwörter zurückzusetzen. Nur spezifische Rollen wie Password Administrator oder Global Administrator dürfen Passwörter zurücksetzen.
- **Diagnose-Schritte:**
  1. Prüfe im Microsoft 365 Admin Center unter **Benutzer** > **Aktive Benutzer** die zugewiesene Rolle
  2. Vergleiche mit der Rollen-Tabelle in Abschnitt 4
  3. Prüfe, ob die Rolle die Berechtigung „Passwort zurücksetzen" enthält
- **Lösung:**
  - Weise dem Administrator die Rolle „Password Administrator" zu
  - Alternativ: Lass das Passwort von einem Global Administrator zurücksetzen
- **Prävention:** Dokumentiere, welche Rollen welche Berechtigungen haben. Verweise auf die Microsoft Learn-Dokumentation zur Rollenverteilung.

---

### Fehler 2: SSPR funktioniert nicht für Benutzer

- **Symptom:** Benutzer können ihr Passwort nicht selbst zurücksetzen, obwohl SSPR aktiviert ist
- **Ursache:** SSPR ist nicht für alle Benutzer aktiviert oder es fehlt eine Authentifizierungsmethode
- **Diagnose-Schritte:**
  1. Prüfe im Microsoft Entra Admin Center, ob SSPR auf „Alle" oder „Ausgewählt" gestellt ist
  2. Prüfe, ob die Benutzer in der ausgewählten Gruppe enthalten sind
  3. Prüfe, ob für die Benutzer eine Authentifizierungsmethode (E-Mail, Telefon) konfiguriert ist
- **Lösung:**
  - Aktiviere SSPR für alle Benutzer oder füge die betroffenen Benutzer der Gruppe hinzu
  - Weise eine Authentifizierungsmethode zu (z. B. E-Mail oder Mobiltelefonnummer)
- **Prävention:** SSPR bei der Einführung direkt für alle Benutzer aktivieren und Authentifizierungsmethoden im Onboarding-ProzessPflicht machen.

---

### Fehler 3: Outlook fragt nach Passwort-Reset weiterhin nach Passwort

- **Symptom:** Nach erfolgreichem Passwort-Reset fragt Outlook wiederholt nach dem Passwort, auch wenn es korrekt eingegeben wird
- **Ursache:** Der Windows Credential Manager speichert die alten Anmeldeinformationen
- **Diagnose-Schritte:**
  1. Prüfe, ob der Benutzer im Active Directory das korrekte Passwort hat
  2. Öffne den Credential Manager (Systemsteuerung > Benutzerkonten > Credential Manager)
  3. Suche nach Einträgen, die auf Outlook/Exchange verweisen
- **Lösung:**
  - Credential Manager öffnen und die betroffenen Einträge entfernen
  - Outlook neu starten — es sollte nach dem neuen Passwort fragen
- **Prävention:** Schulung für Benutzer: Nach Passwortänderung auch Credential Manager prüfen. Alternative: Gruppenrichtlinie zur automatischen Aktualisierung konfigurieren.

---

### Fehler 4: Teams-Kanäle falsch angelegt

- **Symptom:** Benutzer können Dateien nicht teilen oder haben zu viel/zugriff auf vertrauliche Kanäle
- **Ursache:** Falsche Kanal-Typen (Standard vs. Privat) oder fehlende Verständnis der Sichtbarkeitsregeln
- **Diagnose-Schritte:**
  1. Prüfe im Teams Admin Center die Kanal-Einstellungen
  2. Prüfe, wer auf den Kanal zugreifen kann
  3. Vergleiche mit den gewünschten Zugriffsrichtlinien
- **Lösung:**
  - Erstelle einen privaten Kanal für vertrauliche Themen
  - Dokumentiere die Sichtbarkeitsregeln für jeden Kanal-Typ
  - Entferne unnötige Berechtigungen
- **Prävention:** Erstelle eine Richtlinie für Kanal-Typen. Standardmäßig Standardkanäle nur für allgemeine Themen, private Kanäle nur für sensible Projekte.

---

## Mini-Quiz

**Frage 1:** Welche Rolle benötigt ein Administrator, um Passwörter zurückzusetzen?
- A) Teams Administrator
- B) Password Administrator oder Global Administrator
- C) SharePoint Administrator
- D) Exchange Administrator

**Antwort:** B — Nur Password Administrator oder höhere Rollen dürfen Passwörter zurücksetzen.

---

**Frage 2:** Was wird beim Erstellen eines Teams automatisch erstellt?
- A) Nur ein SharePoint
- B) Eine Microsoft 365-Gruppe, SharePoint-Site, Exchange-Postfach und OneNote-Notizbuch
- C) Nur ein Exchange-Postfach
- D) Ein lokaler Active Directory-Benutzer

**Antwort:** B — Teams basiert auf Microsoft 365-Gruppen und erstellt automatisch die zugehörigen Ressourcen.

---

**Frage 3:** Wo kann ein Administrator in Microsoft 365 ein Benutzerpasswort zurücksetzen?
- A) Teams Admin Center
- B) SharePoint Admin Center
- C) Microsoft 365 Admin Center > Benutzer > Aktive Benutzer
- D) OneDrive Admin Center

**Antwort:** C — Das Microsoft 365 Admin Center unter „Benutzer > Aktive Benutzer" ist der richtige Ort.

---

**Frage 4:** Was bedeutet SSPR?
- A) Secure System Password Recovery
- B) Self-Service Password Reset
- C) Single Sign-On Password Reset
- D) System Service Protection Reset

**Antwort:** B — Self-Service Password Reset. Benutzer können ihr Passwort selbst zurücksetzen.

---

**Frage 5:** Warum kann Outlook nach einer Passwortänderung weiterhin das alte Passwort verlangen?
- A) Outlook ist defekt
- B) Der Credential Manager speichert alte Anmeldeinformationen
- C) Der E-Mail-Server ist offline
- D) Das Konto wurde gelöscht

**Antwort:** B — Der Windows Credential Manager speichert die alten Anmeldeinformationen.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter meldet sich bei dir: „Ich habe gestern mein Passwort geändert, seitdem funktioniert Outlook nicht mehr. Ich bekomme ständig eine Aufforderung, mein Passwort einzugeben, aber wenn ich es eingebe, erscheint wieder die Fehlermeldung. Ich muss dringend E-Mails beantworten. Außerdem muss ich für ein neues Projekt ein Team in Microsoft Teams erstellen — wie geht das?"

**Aufgabe:**
1. Priorisiere das Ticket
2. Diagnose das Outlook-Problem
3. Löse das Problem
4. Erkläre, wie der Benutzer ein neues Team in Microsoft Teams erstellt
5. Dokumentiere den Fall für die Wissensdatenbank

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P2 (Hoch) — E-Mail ist betriebskritisch, aber es gibt einen Workaround (Outlook im Web).

**2. Diagnose:**
- Prüfe, ob der Benutzer im Microsoft Entra ID das korrekte Passwort hat
- Prüfe, ob das Passwort im Microsoft 365 Admin Center korrekt gespeichert ist
- Prüfe, ob Outlook den Cached Exchange Mode verwendet (das alte Passwort ist im Cache gespeichert)
- Prüfe, ob der Benutzer das Passwort in Windows aktualisiert hat (Credential Manager)

**3. Lösung:**
- Credential Manager öffnen (Systemsteuerung > Benutzerkonten > Credential Manager)
- Gespeicherte Anmeldeinformationen für Outlook/Exchange finden und entfernen
- Outlook neu starten — es sollte nach dem neuen Passwort fragen
- Alternative: `control keymgr.dll` ausführen, um den Credential Manager direkt zu öffnen

**4. Teams-Erstellung:**
- In Microsoft Teams auf „Teams beitreten oder erstellen" klicken
- „Team erstellen" wählen
- Vorlage auswählen (z. B. „Standard" oder „Projekt")
- Team-Namen eingeben und Beschreibung hinzufügen
- Sichtbarkeit festlegen (Öffentlich oder Privat)
- Mitglieder hinzufügen

**5. Dokumentation:**
- Problem: Passwort-Change → Outlook fragt wiederholt nach Passwort
- Ursache: Altes Passwort im Windows Credential Manager gespeichert
- Lösung: Credential Manager → Windows-Anmeldeinformationen → Outlook-Eintrag entfernen
- Verifizierung: Outlook startet ohne Passwort-Aufforderung

</details>

---

## Quellen

- [Microsoft Learn — MS-900: Microsoft 365 Fundamentals — Describe Microsoft 365 core services and concepts](https://learn.microsoft.com/en-us/training/paths/describe-microsoft-365-core-services-concepts/) — abgerufen am 2026-10-19
- [Microsoft Learn — Set up Outlook for email](https://learn.microsoft.com/en-us/microsoft-365/admin/setup/setup-outlook?view=o365-worldwide) — abgerufen am 2026-10-19
- [Microsoft Learn — Introduction to Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/teams-overview) — abgerufen am 2026-10-19
- [Microsoft Learn — Overview of teams and channels in Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/teams-channels-overview) — abgerufen am 2026-10-19
- [Microsoft Learn — Reset passwords](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/reset-passwords?view=o365-worldwide) — abgerufen am 2026-10-19
- [Microsoft Learn — Let users reset their own passwords](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/let-users-reset-passwords?view=o365-worldwide) — abgerufen am 2026-10-19
- [CompTIA A+ — How to Study](https://www.comptia.org/en-us/blog/how-to-study-for-comptia-a/) — abgerufen am 2026-10-19