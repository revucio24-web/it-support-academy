---
title: "Modul 20: Kommunale & behördliche IT + Einstieg in den öffentlichen Dienst"
level: 2
module: 20
last_verified: 2026-10-26
windows_version: "—"
schwerpunkt: ["OTRS", "Fachverfahren", "KeePass", "Karriere", "Öffentlicher Dienst"]
sources:
  - url: "https://www.oth-anken.de/"
    abrufdatum: 2026-10-26
  - url: "https://service.bund.de/ "
    abrufdatum: 2026-10-26
---

## Lernziele

1. Du kennst die spezifischen Herausforderungen der IT in der Kommunalverwaltung
2. Du kennst das OTRS-Ticket-System und kannst Tickets bearbeiten und priorisieren
3. Du kennst wichtige Fachverfahren (Faktura, HESS_MultiConsole, KeePass) und deren Nutzung
4. Du kennst den Einstieg in den öffentlichen Dienst und relevante Zertifizierungen
5. Du kannst typische Szenarien des IT-Supports in behördlichen Umgebungen lösen

## Theorie: Kommunalverwaltung und IT-Support

### 1. OTRS (Open Source Ticket Request System)

**OTRS** ist eine bewährte Ticket-Software, die besonders in Behörden und Unternehmen weit verbreitet ist. Sie dient als zentrales System für die Bearbeitung von Anfragen, Incidents und Änderungsmanagement.

**Funktionsweise:**

| Modul | Beschreibung |
|--------|------------|
| **Ticket-Eingang** | E-Mail, Webformular, Telefon als Eingangskanäle |
| **Priorisierung** | Stufung nach Dringlichkeit (P1–P4) und Auswirkungen |
| **Workflows** | Automatisierte Weiterleitung und Eskalationen |
| **Wissensdatenbank** | Selbstbedienungsoption für häufige Fragen |
| **Berichterstattung** | Auswertungen zu Bearbeitungszeiten, Ursachen, etc. |

**Typischer Workflow:**

```
Eingang (E-Mail/Formular)  →  Ticket-Erstellung  →  Priorisierungsstufe  →  Bearbeitung  →  Abschluss  →  Abschlussbericht
```

### 2. Fachverfahren in der Kommunalverwaltung

**Wichtige Systeme:**

| System | Zweck |
|--------|-------|
| **Faktura** | Finanzbuchhaltung und Rechnungswesen kommunaler Einrichtungen |
| **HESS_MultiConsole** | Zentrale Oberfläche für den Zugriff auf various Fachanwendungen |
| **KeePass** | Passwortmanager für sichere Verwaltung von Zugriffsdaten |
| **Windows Server** | Grundlagen für serverseitige Dienste in der Behörde |

**Herausforderungen im kommunalen IT-Support:**

- **Veraltete Systeme:** Viele Behörden nutzen noch legacy-Systeme, die schwer zu warten sind
- **Datenschutz:** Besondere Anforderungen an den Schutz sensibler Bürgerdaten (DSGVO, BDSG)
- **Konsistenz:** Unterschiedliche Systeme und Schnittstellen müssen zusammenarbeiten
- **Schulungsbedarf:** Mitarbeitende oft nur eingeschult in spezifischen Fachverfahren

### 3. Karriere im öffentlichen Dienst

**Einstieg als IT-Support im öffentlichen Sektor:**

| Aspekt | Details |
|--------|---------|
| **Bewerbungsverfahren** | Meist über Stellenportale des Bundes/der Länder, oft mit Assessment-Center |
| **Typische Stellen** | IT-Support, Systemadministration, Netzwerkadministration |
| **Tarifbindung** | In der Regel TVöD (Tarifvertrag für den öffentlichen Dienst) |
| **Vorteile:** | Sicherer Arbeitsplatz, gute Work-Life-Balance, betriebliche Altersvorsorge |
| **Herausforderungen:** | Veraltete Technik, langsame Beschaffungsprozesse, komplexe hierarchische Strukturen |

### 4. Relevante Zertifizierungen

| Zertifizierung | Fokus | Anerkennung |
|----------------|-------|-------------|
| **CompTIA A+** | Basiswissen IT-Support | Sehr anerkannt |
| **CompTIA Network+** | Netzwerkkenntnisse | Empfohlen für Fortgeschrittene |
| **Microsoft Certified: Modern Desktop Administrator Associate** | Windows 10/11 Verwaltung | Microsoft-Partner-Ökosystem |
| **ITIL Foundation** | IT-Service-Management-Basics | International anerkannt |

## Praxis: Typische Szenarien im kommunalen IT-Support

### Szenario 1: Neuer Mitarbeiter im Rathaus

1. **Onboarding:** Erstellung eines OTRS-Tickets für die Grundausstattung
2. **Gerätebereitstellung:** Windows 11 Pro Installation mit OTRS-Agenten
3. **Zugang gewähren:** Entra ID-Konto erstellen, MFA einrichten
4. **Fachverfahren einrichten:** Zugang zu Faktura und HESS_MultiConsole beschaffen
5. **Passwort-Sicherheit:** KeePass-Datenbank mit initialen Passwörtern readystellen

### Szenario 2: Druckerausfall in der Bürgerstelle

1. **Ticket erstellen** (Priorität P2 – Kundenverkehr betroffen)
2. **Diagnose:** OTRS untersuchen, Drucker-Status prüfen
3. **Lösung:**
   - Treiber neu installieren (falls nötig)
   - Falls: Drucker an alternative Station weiterleiten
   - Dokumentation: Ticket abschließen und Ursache dokumentieren

### Szenario 3: Passwort vergessen im Fachverfahren

1. **Passwort-Reset über OTRS** beantragen
2. **Identitätsprüfung** gemäß internen Richtlinien
3. **Neues Passwort in KeePass** hinterlegen und Kollegen informieren
4. **Ticket abschließen** und Präventionsmaßnahme dokumentieren

