---
title: "Modul 19: Cloud & Identity Vertiefung"
level: 2
module: 19
last_verified: 2026-10-26
windows_version: "—"
schwerpunkt: ["Entra ID", "Hybrid Join", "Conditional Access", "MFA", "Intune"]
sources:
  - url: "https://learn.microsoft.com/de-de/entra/"
    abrufdatum: 2026-10-26
  - url: "https://learn.microsoft.com/de-de/training/modules/manage-identities-microsoft-entra-id/"
    abrufdatum: 2026-10-26
---

## Lernziele

1. Du verstehst die Unterschiede zwischen lokaler Identitätsverwaltung und cloudbasierten Identitätslösungen
2. Du kannst Azure AD / Microsoft Entra ID Objekte verwalten (Nutzer, Gruppen, Geräte)
3. Du verstehst Conditional Access und kannst Richtlinien für den sicheren Zugriff konfigurieren
4. Du kennst die verschiedenen MFA-Methoden und kannst diese für dein Unternehmen auswählen
5. Du kannst Intune nutzen, um Geräte und Anwendungen zu verwalten und bereitzustellen

## Theorie: Cloud-Identitätsmanagement

### 1. Azure AD / Microsoft Entra ID

**Was ist Azure AD / Entra ID?**

Azure Active Directory (heute Microsoft Entra ID) ist die cloudbasierte Identitäts- und Zugriffsmanagement-Lösung von Microsoft. Sie dient als zentraler Identitätsanbieter für moderne Anwendungen und Dienste.

**Wichtige Konzepte:**

| Konzept | Beschreibung |
|---------|--------------|
| **Verzeichnis** | Zentrale Speicherstelle für Identitäten und Gruppen |
| **Anwendung** | Cloud- oder On-Premise-Apps, die über Entra ID zugegriffen werden |
| **Gruppen** | Sammlungen von Nutzern oder Geräten für gemeinsames Rechte-Management |
| **Dienstprinzipale** | Identitäten für Dienste und Anwendungen (non-human Identitäten) |

### 2. Hybrid Identitätsmanagement

**Azure AD Connect**

Mit Azure AD Connect wird das lokale Active Directory mit Azure AD / Entra ID synchronisiert. Dies ermöglicht:

- Single Sign-On (SSO) für lokale Ressourcen
- Automatische Erstellung von Cloud-Nutzerkonten bei Erstellung im lokalen AD
- Übertragung von Gruppen und Richtlinien in die Cloud

**Streckenzusammenfassung:**

```
Lokaler AD  →  Azure AD Connect  →  Azure AD / Entra ID  →  Cloud-Ressourcen
```

### 3. Conditional Access

**Conditional Access Policies** steuern den Zugriff auf Ressourcen basierend auf Bedingungen:

| Bedingung | Mögliche Aktion |
|-----------|----------------|
| **Standort** | Zugriff von vertrauenswürdigen Netzwerken erlauben, externen blockieren |
| **Gerät** | Nur verwaltete Geräte (Intune-enrolled) erlauben |
| **Benutzer** | Spezifische Gruppen oder Rollen |
| **Cloud-App** | Zugriff auf bestimmte Anwendungen steuern |
| **Authentifizierung** | Anforderung von MFA bei risikoreichen Anmeldungen |

**Beispielrichtlinie:** "Zugriff auf Microsoft 365 nur von Geräten mit Intune-Einschreibung und MFA"

### 4. Multi-Factor Authentication (MFA)

**MFA-Methoden im Überblick:**

| Methode | Sicherheit | Benutzerfreundlichkeit |
|---------|------------|------------------------|
| **SMS-Code** | Mittel | Hoch (jedes Handy) |
| **Authenticator-App** (TOTP) | Hoch | Mittel |
| **Windows Hello** | Sehr hoch | Hoch (biometrisch) |
| **FIDO2 / Security Key** | Extrem hoch | Mittel |
| **Calling** | Hoch | Niedrig (Telefonanruf) |

### 5. Microsoft Intune

**Intune** ist eine MDM-(Mobile Device Management)- und MAM-(Mobile Application Management)-Lösung:

**Kernbereiche:**

| Bereich | Funktion |
|---------|----------|
| **Geräteverwaltung** | Einrichtung und Überwachung von Firmware, Einstellungen, Sicherheitsrichtlinien |
| **App-Verwaltung** | Bereitstellung und Verwaltung von Geschäftsanwendungen |
| **Bedrohungsschutz** | Integration mit Microsoft Defender for Endpoint |
| **Compliance** | Überprüfung der Gerätekonformität vor Zugriffsgewährung |

**Typische Deployments:**

1. **Co-Management:** Kombination aus Configuration Manager und Intune für hybride Umgebungen
2. **Standalone Intune:** Reine Cloud-Verwaltung für moderne Geräte
3. **Windows 365:** Cloud-PCs, die über Intune bereitgestellt werden

## Praxis: Conditional Access Richtlinie konfigurieren

### Szenario: Sicherer Zugriff auf Exchange Online

1. **Richtlinie erstellen** in Microsoft Entra Admin Center → Sicherheit → Conditional Access → Richtlinie hinzufügen
2. **Name:** "Secure Exchange Access"
3. **Zuweisungen:**
   - **Benutzer und Gruppen:** Alle Mitarbeiter
   - **Cloud-Apps:** Exchange Online
   - **Bedingungen:**
     - **Standort:** "Standort istNein"
     - **Gerät:** "Gerät ist compliancy policy compliant" = Yes
     - **Authentifizierung:** "Require MFA" = Yes
4. **Zugriffssteuerung:** "Zugriff gewähren" → "Erforderliche Richtlinien für MFA auswählen"

### Wichtige Hinweise

- **Pilotphase:** Immer zuerst mit einer kleinen Benutzergruppe testen, bevor sie organisationweit ausgerollt wird
- **Notfallzugriff:** Immer mindestens einen Break-Glass-/Notfall-Zugang sicherstellen
- **Berichterstattung:** Conditional Access bietet detaillierte Protokolle und Berichte zu allen Zugriffsentscheidungen

## Abschluss & Zertifizierung

### CompTIA Security+ KS0-005

Der Erwerb der CompTIA Security+ Zertifizierung ist eine empfohlene Ergänzung zu diesem Modul. Die Prüfung deckt folgende Bereiche ab:

- Bedrohungen, Angriffe und Schwachstellen (24%)
- Architektur und Design (12%)
- Implementierung (22%)
- Operationen (21%)
- Governance, Risiko und Compliance (21%)

### Microsoft SC-300

Für tiefere Kenntnisse im Identitäts- und Zugriffsmanagement empfiehlt sich die Zertifizierung Microsoft Identity and Access Administrator (SC-300), die speziell Azure AD / Entra ID, MFA, Conditional Access und Intune abdeckt.

