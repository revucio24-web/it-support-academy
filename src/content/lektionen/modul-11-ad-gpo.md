---
title: "Modul 11: Active Directory, Gruppenrichtlinien, Benutzer- und Rechteverwaltung"
level: 2
module: 11
last_verified: 2026-10-19
windows_version: "Windows Server 2022"
sources:
  - url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/plan/delegating-administration-by-using-ou-objects"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/manage/delegation-control-wizard"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/plan/creating-an-organizational-unit-design"
    abrufdatum: 2026-10-19
  - url: "https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/active-directory-220-1102/"
    abrufdatum: 2026-10-19
  - url: "https://courseiva.com/learn/a-plus-core-2/windows-group-policy"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Architektur von Active Directory (AD) und deren Rolle in einer Windows-Domäne
2. Du kennst den Aufbau von Organizational Units (OUs) und kannst eine sinnvolle OU-Struktur entwerfen
3. Du verstehst die Funktionsweise von Gruppenrichtlinien (GPOs): Vererbung, Verarbeitungsreihenfolge (LSDOU) und Enforcement
4. Du kannst GPOs erstellen, verknüpfen, blockieren und erzwingen
5. Du beherrschst die Delegierung von Verwaltungsrechten mithilfe des Delegation of Control-Assistenten
6. Du kannst Benutzer-, Gruppen- und Computerobjekte in AD verwalten und Rechte sinnvoll zuweisen

---

## Theorie

### 1. Active Directory (AD) — Die zentrale Verzeichnisdienst

Active Directory (AD) ist ein zentraler Verzeichnisdienst von Windows Server, der Benutzer, Computer, Gruppen und andere Netzwerkressourcen in einer hierarchischen Struktur verwaltet. AD ermöglicht die zentralisierte Authentifizierung und Autorisierung innerhalb einer Domäne. [Microsoft Learn — Group Policy overview for Windows Server, abgerufen am 2026-10-19]

**Kernkomponenten:**

| Komponente | Beschreibung |
|------------|--------------|
| **Domäne** | Logische Gruppe von Benutzern, Computern und Ressourcen mit gemeinsamer Sicherheitsrichtlinie |
| **Gesamtstruktur (Forest)** | Eine oder mehrere Domänen, die eine gemeinsame globale Katalogstruktur teilen |
| **Domain Controller (DC)** | Server, der die AD-Datenbank hostet und Authentifizierung durchführt |
| **Organizational Unit (OU)** | Container innerhalb einer Domäne zur Gruppierung und Delegierung von Objekten |
| **Globale Katalog (GC)** | Verzeichnis mit allen Objekten der Gesamtstruktur, ermöglicht übergreifende Suche |

In der Active Directory-Hierarchie bildet die Gesamtstruktur den obersten Container, darunter befinden sich Domänen und innerhalb der Domänen die OUs. [Microsoft Learn — Understanding the Active Directory Logical Model, abgerufen am 2026-10-19]

### 2. Organizational Units (OUs) — Die Bausteine der Verwaltung

OUs sind Container, die Objekte (Benutzer, Gruppen, Computer) in einer Domäne gruppieren. Sie dienen drei Hauptzwecken: Delegierung der Verwaltung, Anwendung von Gruppenrichtlinien und Einschränkung der Sichtbarkeit von Objekten. [Microsoft Learn — Reviewing OU Design Concepts, abgerufen am 2026-10-19]

**OU-Design-Prinzipien:**

- OUs spiegeln nicht zwingend die Unternehmensstruktur wider, sondern werden für administrative Zwecke erstellt
- Empfohlene maximale Tiefe: 10 Ebenen (Microsoft-Empfehlung aus Gründen der Verwaltbarkeit)
- OUs bieten administrative Grenzen — sie begrenzen den Umfang der Befugnisse von Datenadministratoren
- Es gibt keine technische Begrenzung für die Anzahl der Oubenen, aber Microsoft empfiehlt höchstens 10 Ebenen. [Microsoft Learn — Creating an Organizational Unit Design, abgerufen am 2026-10-19]

**Beispiel für eine OU-Struktur:**

```
Domäne: contoso.local
├── OU=Benutzer
│   ├── OU=Vertrieb
│   ├── OU=Buchhaltung
│   └── OU=IT
├── OU=Computer
│   ├── OU=Arbeitsplätze
│   └── OU=SERVER
└── OU=Gruppen
```

### 3. Gruppenrichtlinien (Group Policy) — Zentrale Konfigurationsverwaltung

Gruppenrichtlinien sind ein Feature von Windows, das zentralisierte Verwaltung und Konfiguration von Betriebssystemen, Anwendungen und Benutzereinstellungen ermöglicht. Sie werden in Gruppenrichtlinienobjekten (GPOs) gespeichert. [Microsoft Learn — Group Policy overview for Windows Server, abgerufen am 2026-10-19]

**Aufbau einer GPO:**

Eine GPO besteht aus zwei Hauptkomponenten:

| Komponente | Speicherort | Inhalt |
|------------|-------------|--------|
| **Group Policy Container (GPC)** | Active Directory-Domänenpartition | Metadaten wie Versionsnummer, Links, Status |
| **Group Policy Template (GPT)** | SYSVOL-Ordner auf jedem Domain Controller | Eigentliche Richtliniendateien (z. B. Registry.pol) |

Der GPT-Pfad folgt dem Muster: `\\<Domäne>\SYSVOL\<Domäne>\Policies\<GPO-GUID>\`. [CompTIA A+ 220-1102 — Group Policy, abgerufen am 2026-10-19]

**Computer- und Benutzerkonfigurationen:**

- **Computer-Konfiguration:** Systemweite Einstellungen, die unabhängig vom angemeldeten Benutzer gelten (z. B. Firewall-Regeln, Energieverwaltung, Sicherheitseinstellungen)
- **Benutzerkonfiguration:** Einstellungen, die nur für den angemeldeten Benutzer gelten (z. B. Desktop-Hintergrund, Ordnerumleitung, Internet Explorer-Einstellungen) [Microsoft Learn — Group Policy overview, abgerufen am 2026-10-19]

### 4. GPO-Verarbeitungsreihenfolge (LSDOU)

GPOs werden in einer festen Reihenfolge verarbeitet — LSDOU:

1. **L** — Lokale GPO
2. **S** — Site-Gruppenrichtlinien
3. **D** — Domänen-Gruppenrichtlinien
4. **OU** — Organizational Units (von oben nach unten)

Die Regel: **Zuletzt angewendet = gewinnt** (Last Writer Wins). In einer verschachtelten OU-Struktur werden zuerst die GPOs der übergeordneten OUs angewendet, dann die der untergeordneten. [Microsoft Learn — Gruppenrichtlinienverarbeitung, abgerufen am 2026-10-19] [CompTIA A+ 220-1102, abgerufen am 2026-10-19]

### 5. Vererbungsmechanismen: Block Inheritance und Enforced

**Block Inheritance (Vererbung blockieren):**

Diese Eigenschaft wird auf einem Container (Domäne oder OU) festlegen und verhindert, dass GPOs von übergeordneten Containern auf die Objekte im blockierten Container angewendet werden. In der GPMC wird dies durch einen blauen Ausrufezeichen auf dem Container-Symbol angezeigt. Block Inheritance verhindert nicht die Anwendung von GPOs, die als **Enforced** markiert sind. [Microsoft Learn — Gruppenrichtlinienverarbeitung, abgerufen am 2026-10-19]

**Enforced (Erzwingen, früher "No Override"):**

Ein GPO-Link kann als Enforced markiert werden. Dadurch wird sichergestellt, dass die Einstellungen dieses GPOs von keinem GPO auf einer tieferen Ebene überschrieben werden können. Enforced wird nach der Block Inheritance verarbeitet und hat Vorrang. [Microsoft Learn — Group Policy Inheritance, abgerufen am 2026-10-19]

| Mechanismus | Auswirkung | Vorrang |
|-------------|-----------|---------|
| Block Inheritance | Blockiert Vererbung von übergeordneten Containern | Niedrig |
| Enforced | Überschreibt alle untergeordneten GPOs, ignoriert Block Inheritance | Höchst |

### 6. Delegation of Control — Rechte gezielt zuweisen

Delegiert bedeutet, administrative Aufgaben an Benutzer oder Gruppen zu übertragen, ohne ihnen vollständige Administratorrechte zu gewähren. Dazu wird der **Delegation of Control-Assistent** in „Active Directory-Benutzer und -Computer" (ADUC) verwendet. [Microsoft Learn — Delegieren der Kontrolle in AD DS, abgerufen am 2026-10-19]

**Häufige delegierte Aufgaben:**

| Aufgabe | Beschreibung |
|---------|--------------|
| Benutzerkonten erstellen/löschen | Erstellen, Löschen und Verwalten von Benutzerkonten |
| Passwort zurücksetzen | Zurücksetzen von Benutzerkennwörtern + Erzwingen der Kennwortänderung beim nächsten Anmelden |
| Gruppenmitgliedschaft verwalten | Erstellen, Löschen und Verwalten von Gruppen |
| Benutzerinformationen lesen | Lesen aller Benutzerinformationen |

**Wichtig:** Berechtigungen können als vererbbar festgelegt werden, sodass sie für alle Unterstrukturen der OU gelten. [Microsoft Learn — Delegieren der Verwaltung mithilfe von OUs, abgerufen am 2026-10-19]

### 7. Typische administrative Tools

| Tool | Zweck |
|------|-------|
| **Active Directory-Benutzer und -Computer (ADUC)** | Verwaltung von Benutzern, Gruppen, Computer, OUs |
| **Group Policy Management Console (GPMC)** | Verwaltung aller GPOs, WMI-Filter und Berechtigungen |
| **Group Policy Management Editor** | Bearbeiten von GPO-Einstellungen |
| **gpupdate /force** | Erzwingt die sofortige Aktualisierung aller Gruppenrichtlinien auf dem Client |
| **gpresult /r** | Zeigt die resultierende Richtlinie (Resultant Set of Policy) für Benutzer/Computer |

[CompTIA A+ 220-1102 — Group Policy, abgerufen am 2026-10-19]

---

## Praxis-Übung im Homelab

### Übung 1: OU-Struktur erstellen und GPO verknüpfen

**Vorbereitung:**
- Windows Server 2022 als Domain Controller (AD DS installiert) oder Windows 11/10 mit RSAT-Tools

**Aufgabe:**

1. Erstelle in „Active Directory-Benutzer und -Computer" (ADUC) folgende OU-Struktur:

```
contoso.local
├── OU=Benutzer
│   ├── OU=Vertrieb
│   └── OU=Buchhaltung
├── OU=Computer
│   ├── OU=Arbeitsplätze
│   └── OU=Server
└── OU=Gruppen
```

2. Erstelle einen Testbenutzer `testuser1` in OU=Vertrieb
3. Erstelle in der GPMC eine neue GPO mit dem Namen `Desktop-Richtlinie Vertrieb`
4. Verknüpfe die GPO mit OU=Vertrieb
5. Öffne den Group Policy Management Editor und konfiguriere unter `Benutzerkonfiguration > Richtlinien > Administrative Vorlagen > Desktop` die Einstellung "Desktop-Hintergrundbild" mit einem gültigen Pfad
6. Melde dich als `testuser1` an einem Client an und führe `gpupdate /force` aus
7. Prüfe mit `gpresult /r`, ob die GPO angewendet wurde

**Erwartetes Ergebnis:**
- OU-Struktur ist in ADUC sichtbar
- Die GPO ist in der GPMC mit einem Link-Symbol auf OU=Vertrieb zu sehen
- gpresult zeigt die GPO unter "Angewendete Gruppenrichtlinienobjekte" an

---

### Übung 2: Delegation of Control — Helpdesk-Rechte zuweisen

**Aufgabe:**

1. Erstelle eine Sicherungsgruppe `Helpdesk-Team` in OU=Gruppen
2. Füge der Gruppe `Helpdesk-Team` das Recht zu, **Passwörter für Benutzer in OU=Benutzer zurückzusetzen**
3. Verwende dazu: ADUC → Rechtsklick auf OU=Benutzer → „Steuerung delegieren"
4. Wähle die Gruppe `Helpdesk-Team` und delegiere die Aufgabe: „Benutzerkennwörter zurücksetzen und die Kennwortänderung bei der nächsten Anmeldung erzwingen"
5. Melde dich als Mitglied von `Helpdesk-Team` an einem Client an und setze das Passwort eines Testbenutzers zurück

**Erwartetes Ergebnis:**
- Die Gruppe kann Passwörter zurücksetzen, ohne Domain-Admin zu sein
- Das Delegierte Recht ist nur für OU=Benutzer gültig, nicht für die gesamte Domäne

---

## Berühmte Fehler + Lösungen

### Fehler 1: GPO wird nicht angewendet — Link an falscher Stelle

- **Symptom:** Die GPO-Einstellungen erscheinen auf dem Client nicht
- **Ursache:** Die GPO wurde nicht mit der richtigen OU oder Domäne verknüpft
- **Diagnose-Schritte:**
  1. Öffne die GPMC und prüfe, ob die GPO mit der gewünschten OU verknüpft ist
  2. Prüfe, ob der GPO-Link aktiviert ist (Link Enabled)
  3. Prüfe mit `gpresult /r` auf dem Client, ob die GPO in der Liste der angewendeten GPOs erscheint
  4. Prüfe, ob die richtigen Sicherheitsberechtigungen auf der GPO vorhanden sind
- **Lösung:**
  - GPO-Link mit der richtigen OU verknüpfen (Rechtsklick auf OU → „Vorh. GPO verknüpfen")
  - Berechtigungen prüfen: Die Benutzer/Gruppe muss über „Lesen" und „Gruppenrichtlinie anwenden" verfügen
- **Prävention:** GPO-Verknüpfungen immer in der GPMC überprüfen, nicht nur den Link erstellen

---

### Fehler 2: Block Inheritance verhindert kritische Sicherheits-GPOs

- **Symptom:** Eine auf Domänenebene konfigurierte Sicherheits-GPO wird auf bestimmte OUs nicht angewendet
- **Ursache:** Auf der OU wurde „Vererbung blockieren" aktiviert
- **Diagnose-Schritte:**
  1. Öffne die GPMC und prüfe die betroffene OU — erscheint ein blauer Ausrufezeichen?
  2. Prüfe die GPO-Links auf der OU — welche sind aktiv?
  3. Identifiziere die GPOs, die durch Block Inheritance blockiert werden
- **Lösung:**
  - Block Inheritance deaktivieren (Rechtsklick auf OU → „Vererbung blockieren" deaktivieren)
  - Alternativ: Die kritische GPO als **Enforced** markieren — Enforced überschreibt Block Inheritance
- **Prävention:** Block Inheritance nur in Ausnahmefällen verwenden; kritische Sicherheits-GPOs sollten als Enforced markiert werden

---

### Fehler 3: Delegierte Rechte funktionieren nicht — falsche Berechtigungsebene

- **Symptom:** Ein Helpdesk-Mitarbeiter kann trotz Delegierung keine Passwörter zurücksetzen
- **Ursache:** Die Delegierung wurde auf der falschen OU oder mit falschen Aufgaben durchgeführt
- **Diagnose-Schritte:**
  1. Prüfe in ADUC: Welche OU wurde delegiert? Enthält sie die betroffenen Benutzerobjekte?
  2. Prüfe im Delegation of Control-Assistenten: Welche Aufgabe wurde delegiert?
  3. Prüfe die Berechtigungen: ADUC → Ansicht → Erweiterte Funktionen → Eigenschaften der OU → Sicherheit → Erweitert
  4. Vergewissere dich, dass die Gruppe über „Kennwort zurücksetzen" für die gewünschten Objekte verfügt
- **Lösung:**
  - Delegierung auf der OU durchführen, die tatsächlich die Benutzer enthält
  - Im Assistenten die korrekte Aufgabe auswählen: „Benutzerkennwörter zurücksetzen und die Kennwortänderung bei der nächsten Anmeldung erzwingen"
  - Alternativ: Benutzer oder Gruppe zu einer Gruppe mit den entsprechenden Berechtigungen hinzufügen
- **Prävention:** Delegierungen dokumentieren und regelmäßig überprüfen; Testen mit einem Testkonto vor der Produktivschaltung

---

### Fehler 4: GPO-Änderungen werden erst nach Neustart angewendet

- **Symptom:** Änderungen an einer GPO werden erst nach einem Neustart des Clients oder einer erneuten Anmeldung des Benutzers wirksam
- **Ursache:** Die GPO wurde nicht aktualisiert
- **Diagnose-Schritte:**
  1. Prüfe, ob der Client die Domäne erreicht (Domänenmitgliedschaft)
  2. Führe `gpupdate /force` aus, um die sofortige Aktualisierung zu erzwingen
  3. Prüfe mit `gpresult /r`, ob die GPO-Liste aktuell ist
  4. Prüfe, ob der Client SYSVOL korrekt erreicht (Netzwerkverbindung zum DC)
- **Lösung:**
  - `gpupdate /force` ausführen (erzwingt die Aktualisierung aller GPOs)
  - Bei Computer-Konfigurationen: Neustart ist oft erforderlich
  - Bei Benutzer-Konfigurationen: Ab- und erneutes Anmeldung reicht in der Regel
- **Prävention:** GPO-Änderungen planen und nach der Änderung `gpupdate /force` auf den betroffenen Clients ausführen

---

## Mini-Quiz

**Frage 1:** In welcher Reihenfolge werden GPOs verarbeitet (LSDOU)?
- A) Local → Site → Domain → OU
- B) Site → Domain → OU → Local
- C) OU → Domain → Site → Local
- D) Domain → Site → OU → Local

**Antwort:** A — Local, Site, Domain, Organizational Unit.

---

**Frage 2:** Was passiert, wenn Block Inheritance auf einer OU aktiviert ist?
- A) Alle GPOs werden angewendet
- B) Die OU erbt keine GPOs von übergeordneten Containern, außer sie sind als Enforced markiert
- C) Die OU erbt nur lokale GPOs
- D) Block Inheritance deaktiviert alle GPOs

**Antwort:** B — Block Inheritance verhindert die Vererbung, außer die GPO ist Enforced.

---

**Frage 3:** Welches Tool wird primär zur Delegierung von Verwaltungsrechten verwendet?
- A) gpedit.msc
- B) Der Delegation of Control-Assistent in ADUC
- C) regedit.exe
- D) services.msc

**Antwort:** B — Der Delegation of Control-Assistent in „Active Directory-Benutzer und -Computer".

---

**Frage 4:** Wo wird der Group Policy Template (GPT) gespeichert?
- A) Nur im Active Directory
- B) Im SYSVOL-Ordner auf jedem Domain Controller
- C) Nur auf dem lokalen Client
- D) In der Registry des Domain Controllers

**Antwort:** B — Der GPT liegt im SYSVOL-Ordner auf jedem Domain Controller unter `\\<Domäne>\SYSVOL\<Domäne>\Policies\<GPO-GUID>\`.

---

**Frage 5:** Welches Kommando erzwingt die sofortige Aktualisierung aller Gruppenrichtlinien auf dem Client?
- A) gpresult /r
- B) gpupdate /force
- C) gpedit.msc
- D) netstat /gp

**Antwort:** B — `gpupdate /force`.

---

## Ticket-Szenario

**Situation:**

Ein Mitarbeiter aus der Buchhaltung meldet sich: „Seit gestern kann ich mich nicht mehr anmelden. Ich bekomme die Fehlermeldung: „Das Konto ist gesperrt". Ich muss dringend auf die Buchhaltungsdaten zugreifen, da heute Monatsabschluss ist."

Gleichzeitig meldet ein zweiter Mitarbeiter aus dem Vertrieb: „Mein Desktop-Hintergrund wurde auf ein Firmen-Logo gesetzt, obwohl ich das nicht wollte. Das war gestern noch normal."

**Aufgabe:**

1. Analysiere beide Tickets und ordne sie nach Priorität zu
2. Beschreibe die Diagnose-Schritte für das gesperrte Konto
3. Beschreibe, wie du die Delegierung nutzen würdest, um das Passwort zurückzusetzen, ohne Domain-Admin-Rechte zu verwenden
4. Untersuche die GPO-Problematik: Welche GPO könnte den Desktop-Hintergrund verändert haben?
5. Dokumentiere den Fall für die Wissensdatenbank

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorisierung:**

| Ticket | Priorität | Begründung |
|--------|-----------|------------|
| Gesperrtes Konto (Buchhaltung) | P2 | Einzelner Benutzer betroffen, aber betriebskritisch (Monatsabschluss), Workaround: Administrator kann Konto entsperren |
| Desktop-Hintergrund (Vertrieb) | P4 | Kosmetischer Ärger, keine Auswirkungen auf die Arbeit |

**2. Diagnose für gesperrtes Konto:**

- ADUC öffnen und den Benutzer suchen
- Prüfen, ob das Konto gesperrt ist (Konto-Eigenschaften → „Konto ist gesperrt")
- Prüfen, ob das Konto deaktiviert ist
- Prüfen, ob der Benutzer das Passwort zu oft falsch eingegeben hat (Kontosperrungsrichtlinie)
- Prüfen, ob der Benutzer die maximale Kontogültigkeit erreicht hat

**3. Delegierung für Passwort-Reset:**

- Statt dem Helpdesk volle Domain-Admin-Rechte zu geben, wird eine Gruppe `Helpdesk-Team` erstellt
- Auf OU=Benutzer wird die Aufgabe „Benutzernamenswörter zurücksetzen" an diese Gruppe delegiert
- Das Helpdesk kann nun Passwörter zurücksetzen, ohne administrative Rechte auf dem Server zu benötigen
- Dokumentation der Delegierung: Datum, Aufgabe, Ziel-OU, berechtigte Gruppe

**4. GPO-Analyse für Desktop-Hintergrund:**

- GPMC öffnen und nach GPOs suchen, die mit OU=Vertrieb verknüpft sind
- Prüfen, ob eine GPO die Einstellung „Desktop-Hintergrund" unter `Benutzerkonfiguration > Richtlinien > Administrative Vorlagen > Desktop` konfiguriert hat
- Falls ja: Entweder den Benutzern die entsprechende Gruppe entziehen oder die GPO-Einstellung ändern
- Alternativ: Prüfen, ob eine neue GPO erstellt wurde, die die alte überschreibt (Letzte angewendet = gewinnt)

**5. Dokumentation:**

- **Problem 1:** Konto gesperrt (Buchhaltung) → Ursache: zu viele falsche Passworteingaben → Lösung: Konto in ADUC entsperren, Passwort zurücksetzen
- **Problem 2:** Desktop-Hintergrund geändert → Ursache: GPO „Desktop-Richtlinie Vertrieb" → Lösung: GPO-Einstellung anpassen oder für den Benutzer deaktivieren
- **Prävention:** Regelmäßige Überprüfung der Delegationen; GPO-Änderungen dokumentieren

</details>

---

## Quellen

- [Microsoft Learn — Group Policy overview for Windows Server](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview) — abgerufen am 2026-10-19
- [Microsoft Learn — Group Policy Management Console](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console) — abgerufen am 2026-10-19
- [Microsoft Learn — Gruppenrichtlinienverarbeitung für Windows](https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing) — abgerufen am 2026-10-19
- [Microsoft Learn — Delegieren der Verwaltung mithilfe von OUs](https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/plan/delegating-administration-by-using-ou-objects) — abgerufen am 2026-10-19
- [Microsoft Learn — Delegation of Control-Assistent](https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/manage/delegation-control-wizard) — abgerufen am 2026-10-19
- [Microsoft Learn — OU-Entwurf](https://learn.microsoft.com/de-de/windows-server/identity/ad-ds/plan/creating-an-organizational-unit-design) — abgerufen am 2026-10-19
- [CompTIA A+ 220-1102 — Active Directory (Professor Messer)](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/active-directory-220-1102/) — abgerufen am 2026-10-19
- [CompTIA A+ 220-1102 — Group Policy (Courseiva)](https://courseiva.com/learn/a-plus-core-2/windows-group-policy) — abgerufen am 2026-10-19
