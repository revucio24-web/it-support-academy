---
title: "Modul 3: Windows 11 Grundlagen — Einstellungen, Konten, Updates, Treiber"
level: 1
module: 3
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/windows/deployment/update/windows-update-overview"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/windows-hardware/drivers/install/driver-signing"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/windows/identity-protection/hello-for-business/hello-overview"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/certifications/a"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du kennst den Unterschied zwischen der modernen Einstellungen-App und der klassischen Systemsteuerung in Windows 11
2. Du verstehst die Kontotypen (Microsoft-Konto, lokales Konto, Azure AD / Entra ID) und kannst sie voneinander abgrenzen
3. Du kannst Windows-Updates sicher einspielen, pausieren und den Update-Verlauf auswerten
4. Du kannst den Geräte-Manager bedienen, Treiber aktualisieren und problematische Treiber zurücksetzen
5. Du kennst Windows Hello und kannst es im Kontext der Authentifizierung einordnen
6. Du verstehst die Grundlagen der Treibersignatur und weißt, warum unsignierte Treiber ein Sicherheitsrisiko darstellen

---

## Theorie

### 1. Einstellungen-App vs. Systemsteuerung

Windows 11 besitzt parallele Konfigurationsoberflächen. Die Microsoft-Richtlinie ist, Einstellungen schrittweise aus der Systemsteuerung in die moderne Einstellungen-App zu migrieren.

| Kriterium | Einstellungen-App (Settings) | Systemsteuerung (Control Panel) |
|-----------|------------------------------|----------------------------------|
| Start | Start → Einstellungen oder `Win + I` | Start → Systemsteuerung oder `Win + R` → `control` |
| Design | Modern, flach, touch-optimiert | Klassisch, detailliert, desktop-optimiert |
| Ziel | 90 % der Benutzeranpassungen | Erweiterte/verwaltende Einstellungen |
| Zukunft | Wird weiter ausgebaut | Wird schrittweise abgelöst |

**Wichtige Bereiche, die in Windows 11 23H2 weiterhin in der Systemsteuerung liegen:**
- Systemweiterte Einstellungen (Systemsteuerung → System → Erweiterte Systemeinstellungen)
- Programm- und Funktionen (Deinstallation)
- Energieoptionen (erweiterte Pläne)
- Netzlaufwerke verbinden (in Einstellungen integriert, aber über `control` erreichbar)

**Tipp:** Viele Systemsteuerung-Einträge leiten bei Öffnen automatisch in die Einstellungen-App um. Die Systemsteuerung bleibt für Administratoren und Spezialfälle relevant.

### 2. Konten in Windows 11

Windows 11 unterscheidet drei grundlegende Kontotypen:

| Kontotyp | Beschreibung | Einsatzgebiet |
|----------|--------------|---------------|
| **Lokales Konto** | Nur auf dem Gerät gespeichert, keine Cloud-Synchronisation | Kiosk, Test-PCs, Umgebungen ohne Microsoft-Infrastruktur |
| **Microsoft-Konto (MSA)** | Persönliches Konto, Synchronisation über Microsoft-Dienste | Privatgeräte, Windows Home |
| **Azure AD / Microsoft Entra ID** | Organisationskonto, verwaltet vom Unternehmen | Unternehmensgeräte, Intune-verwaltet |

**Wichtige Einstellungs-Pfade in Windows 11 23H2:**

| Bereich | Pfad |
|---------|------|
| Kontenübersicht | Einstellungen → Konten |
| Microsoft-Konto verknüpfen | Einstellungen → Konten → Microsoft-Konto |
| Lokales Konto erstellen | Einstellungen → Konten → Weitere Benutzer → Konto ohne Konto hinzufügen |
| Anmeldeoptionen | Einstellungen → Konten → Anmeldeoptionen |

**Hinweis:** In Windows 11 Home ist ein Microsoft-Konto für die Ersteinrichtung erforderlich. Ein lokales Konto kann nach der Einrichtung erstellt werden.

### 3. Windows Hello

Windows Hello ist das biometrische Authentifizierungs-Framework von Windows. Es ersetzt oder ergänzt das klassische Passwort.

| Faktor | Beschreibung | Beispiel |
|--------|--------------|----------|
| **Windows Hello Face** | Kamera-basierte Gesichtserkennung | Infrarot-Kamera (z. B. Intel RealSense) |
| **Windows Hello Fingerprint** | Fingerabdrucksensor | Laptop-Fingerabdrucksensor |
| **Windows Hello PIN** | Gerätespezifische PIN | 4–6-stellige numerische PIN |

**Sicherheit:** Die biometrischen Daten werden lokal im TPM (Trusted Platform Module) gespeichert und nicht an Server übertragen. Die PIN ist an das Gerät gebunden und kann nicht auf einem anderen Gerät verwendet werden.

### 4. Windows Update

Windows Update ist der zentrale Mechanismus für Sicherheitsupdates, Funktionsupdates und Treiber-Updates.

**Update-Arten in Windows 11:**

| Update-Typ | Beschreibung | Häufigkeit |
|------------|--------------|------------|
| **Sicherheitsupdates** | Beheben Sicherheitslücken | Monatlich (Patch Tuesday) |
| **Qualitätsupdates** | Stabilitäts- und Fehlerbehebungen | Monatlich oder kumulativ |
| **Funktionsupdates** | Neue Features, größere Änderungen | Jährlich (z. B. 23H2 → 24H2) |
| **Treiber-Updates** | Über Windows Update bereitgestellte Treiber | Bei Verfügbarkeit |

**Wichtige Einstellungen (Einstellungen → Windows Update):**

| Einstellung | Funktion |
|-------------|----------|
| Updates pausieren | Updates für bis zu 5 Wochen anhalten |
| Update-Verlauf | Installierte Updates einsehen und ggf. deinstallieren |
| Aktive Stunden | Zeitfenster definieren, in dem kein Neustart erfolgt |
| Erweiterte Optionen | Benachrichtigungen, Lieferoptimierung, optional Updates |

**Patch-Tuesday:** Microsoft veröffentlicht Sicherheitsupdates am zweiten Dienstag eines Monats. Unternehmen testen Updates oft 1–2 Wochen vor der Produktivschaltung.

### 5. Geräte-Manager und Treiber

Der Geräte-Manager ist das zentrale Werkzeug zur Hardware- und Treiberverwaltung in Windows.

**Start des Geräte-Managers:**
- `Win + X` → Geräte-Manager
- `Win + R` → `devmgmt.msc`
- Start → Geräte-Manager

**Wichtige Aktionen:**

| Aktion | Beschreibung | Anwendungsfall |
|--------|--------------|----------------|
| **Nach Treiber aktualisieren** | Treiber über Windows Update oder lokale Datei installieren | Hardware funktioniert nicht korrekt |
| **Gerät deaktivieren** | Hardware temporär abschalten | Konfliktbehebung |
| **Gerät deinstallieren** | Treiber komplett entfernen | Fehlerhafte Installation |
| **Treiber zurücksetzen** | Vorherige Treiberversion wiederherstellen | Nach problematischem Update |
| **Nach geänderter Hardware suchen** | Neuerliche Erkennung erzwingen | Hardware wurde physisch gewechselt |

**Treiberquellen in der Prioritätsreihenfolge (Best Practice):**

1. **Hersteller-Website** des Geräts (neuester, getesteter Treiber)
2. **Windows Update** (zertifizierte Treiber)
3. **Windows-interne Treiber** (generisch, aber kompatibel)

### 6. Treibersignatur (Driver Signing)

Seit Windows 10 (64-Bit) erzwingt Microsoft die digitale Signierung von Treibern. Das System weist unsignierte Treiber nur mit deaktivierter Signaturprüfung aus.

**Warum ist das wichtig?**
- Signierte Treiber wurden von Microsoft validiert (Windows Hardware Quality Labs, WHQL)
- Unsignierte Treiber können Malware oder fehlerhaften Code enthalten
- Im Support: Fehlermeldung „Windows kann die digitale Signatur dieses Treibers nicht überprüfen" oder Code 52

**Szenario:** Ein Drucker-Treiber von einer Drittanbieter-Website ist nicht signiert. Installation schlägt fehl oder ist nur mit erweiterten Boot-Optionen möglich. Im Unternehmensumfeld sollte immer nach signierten Treibern gesucht werden.

---

## Praxis-Übung im Homelab

### Übung: Windows 11 Systemwartung — Updates, Konten, Treiber

**Vorbereitung:**
- Windows 11 23H2 VM oder Test-PC
- Internetzugang für Windows Update
- Administratorenrechte

**Aufgabe — Teil A: Einstellungen erkunden**

1. Öffne die Einstellungen-App (`Win + I`) und die Systemsteuerung (`Win + R` → `control`)
2. Vergleiche: Finde in beiden Oberflächen die Energieoptionen. Wo findest du welche Details?
3. Öffne Einstellungen → Konten → Anmeldeoptionen und dokumentiere, welche Optionen verfügbar sind

**Aufgabe — Teil B: Update-Verwaltung**

1. Öffne Einstellungen → Windows Update
2. Prüfe, ob Updates verfügbar sind
3. Öffne „Update-Verlauf" und dokumentiere die letzten 3 installierten Updates
4. Pausiere Updates für 1 Woche, aktiviere sie wieder
5. Finde in den erweiterten Optionen die „Optionalen Updates" und prüfe, ob Treiber-Updates verfügbar sind

**Aufgabe — Teil C: Geräte-Manager**

1. Öffne den Geräte-Manager (`Win + X` → Geräte-Manager)
2. Ordne alle Gerätekategorien auf und dokumentiere, welche Geräte du erkennst
3. Suche ein Gerät (z. B. Netzwerkadapter) und öffne seine Eigenschaften
4. Prüfe auf dem Reiter „Treiber": Wer ist der Treiberanbieter? Wann wurde er installiert?
5. Klicke auf „Treiberdetails" — sind die Dateien digital signiert?

**Erwartetes Ergebnis:**

| Aufgabe | Ergebnis |
|---------|----------|
| A1 | Einstellungen-App ist moderner, Systemsteuerung zeigt detailliertere Optionen (z. B. erweiterte Energiepläne) |
| A3 | Mindestens: Passwort, PIN, Sicherheitsschlüssel, Gesichtserkennung, Fingerabdruck (je nach Hardware) |
| B3 | Update-Verlauf zeigt KB-Nummern mit Datum |
| B5 | Optionale Treiber-Updates sind unter Einstellungen → Windows Update → Erweiterte Optionen → Optionale Updates |
| C4 | Netzwerkadapter zeigt Anbieter (z. B., Intel, Realtek) und Installationsdatum |
| C5 | Alle Treiber im Systemordner sind signiert (Status: Digitale Signatur vorhanden) |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Updates werden nicht installiert

- **Symptom:** Windows Update meldet „Es sind keine Updates verfügbar" oder hängt bei 0 % / 99 %
- **Ursache:** Beschädigte Windows Update-Komponenten, blockierte Dienste oder Plattenplatzmangel
- **Diagnose-Schritte:**
  1. Prüfe den freien Speicherplatz (mindestens 10 GB empfohlen für Feature-Updates)
  2. Prüfe, ob der Windows Update-Dienst (wuauserv) läuft: `Get-Service wuauserv`
  3. Öffne die Update-Verlauf — gibt es fehlgeschlagene Updates mit Fehlercode?
  4. Führe die Windows Update-Fehlerbehebung aus: Einstellungen → System → Problembehandlung → Weitere Problembehandlungen → Windows Update
- **Lösung:**
  - Den Windows Update-Dienst neu starten: `net stop wuauserv` → `net start wuauserv`
  - Den SoftwareDistribution-Ordner leeren (nach Stopp des Dienstes): `C:\Windows\SoftwareDistribution\Download`
  - Den DISM- und SFC-Scan ausführen: `DISM /Online /Cleanup-Image /RestoreHealth` danach `sfc /scannow`
- **Prävention:** Regelmäßig freien Speicherplatz prüfen und Updates nicht über den Zeitraum der Aktiven Stunden hinaus pausieren

---

### Fehler 2: Nach Treiber-Update funktioniert Hardware nicht mehr

- **Symptom:** Gerät meldet Fehlercode 43 oder 10 im Geräte-Manager, Hardware reagiert nicht
- **Ursache:** Kompatibilitätsproblem zwischen neuem Treiber und Hardware oder Windows-Version
- **Diagnose-Schritte:**
  1. Öffne den Geräte-Manager und prüfe den Fehlercode im Geräte-Status
  2. Notiere aktuelle Treiberversion und Anbieter
  3. Prüfe, ob ein vorheriger Treiber in den Systemwiederherstellungsverfügbar ist
- **Lösung:**
  - Treiber zurücksetzen: Geräte-Manager → Gerät → Reiter „Treiber" → „Treiber zurücksetzen"
  - Falls nicht verfügbar: „Gerät deinstallieren" (Treiber entfernen) und neu starten
  - Alternativ: Neuester Treiber von der Hersteller-Website manuell installieren
- **Prävention:** Vor wichtigen Treiber-Updates einen Systemwiederherstellungspunkt erstellen (`Win + R` → `rstrui.exe`)

---

### Fehler 3: Benutzer meldet „Ich kann mich nicht anmelden" nach Kontotyp-Wechsel

- **Symptom:** Anmeldeseite zeigt falsche Kontoverknüpfung, PIN wird nicht akzeptiert, „Falsches Passwort"
- **Ursache:** Lokales Konto wurde in Microsoft-Konto umgewandelt oder umgekehrt; Anmeldeinformationen-Cache ist inkonsistent
- **Diagnose-Schritte:**
  1. Frage den Benutzer: Wann trat das Problem erstmals auf? Gab es einen Kontotyp-Wechsel?
  2. Prüfe, ob der Benutzer sich mit der richtigen E-Mail-Adresse anmeldet
  3. Öffne (falls Administrator) `control userpasswords2` oder Einstellungen → Konten — welcher Kontotyp ist konfiguriert?
- **Lösung:**
  - Falls PIN nicht akzeptiert: „Ich habe meine PIN vergessen" auf der Anmeldeseite verwenden → Passwort-Reset über Microsoft-Konto
  - Falls Anmeldeinformationen inkonsistent: Credential Manager öffnen (`control keymgr.dll`) und Einträge für das betroffene Konto entfernen
  - Falls Kontotyp falsch: Erst lokales Konto erstellen und dann unter Einstellungen → Konten in Microsoft-Konto umwandeln
- **Prävention:** Vor Kontotyp-Wechsel sicherstellen, dass der Benutzer das aktuelle Passwort kennt und Zugriff auf die hinterlegte E-Mail-Adresse hat

---

### Fehler 4: Deinstallierte Updates kommen wieder zurück

- **Symptom:** Ein Update wurde deinstalliert, installiert sich nach Neustart erneut automatisch
- **Ursache:** Windows Update hält das Update für erforderlich (besonders Sicherheitsupdates), oder ein Schadspiel des Update-Diensts
- **Diagnose-Schritte:**
  1. Prüfe den Update-Verlauf — ist das Update tatsächlich deinstalliert?
  2. Suche das KB-Artikelnummer des betroffenen Updates in der Microsoft-Dokumentation
  3. Prüfe, ob eine Gruppenrichtlinie oder Windows Update for Business das Update erzwingt
- **Lösung:**
  - Update mit dem Windows Update Troubleshooter zurückhalten: Einstellungen → System → Problembehandlung → Windows Update
  - Alternativ: PowerShell `wushowhide.diagcab` (Microsoft-Tool zum Ausblenden von Updates)
  - Bei Unternehmen: Windows Update for Business- oder WSUS-Konfiguration prüfen, ob Updates über IT-Richtlinien erzwungen werden
- **Prävention:** Vor Deinstallation prüfen, ob das Update kritisch ist — Sicherheitsupdates sollte man nicht dauerhaft entfernen

---

## Mini-Quiz

**Frage 1:** Was ist der schnellste Weg, um den Geräte-Manager in Windows 11 zu öffnen?
- A) `Win + R` → `devmgmt.msc`
- B) `Win + X` → Geräte-Manager
- C) Einstellungen → System → Info → Geräte-Manager
- D) Alle oben genannten sind korrekt

**Antwort:** D — Alle drei Wege öffnen den Geräte-Manager.

---

**Frage 2:** Welcher Kontotyp in Windows 11 ist für unternehmensverwaltete Geräte mit Intune am besten geeignet?
- A) Lokales Konto
- B) Microsoft-Konto
- C) Azure AD / Microsoft Entra ID
- D) Gastkonto

**Antwort:** C — Azure AD / Microsoft Entra ID ermöglicht zentrale Verwaltung durch den IT-Administrator.

---

**Frage 3:** Ein Gerät im Geräte-Manager zeigt den Fehlercode 43. Was ist die wahrscheinlichste Ursache?
- A) Der Treiber ist nicht installiert oder beschädigt
- B) Das Gerät ist deaktiviert
- C) Der Netzwerkadapter hat kein Netzwerk-Kabel
- D) Der Bildschirm ist defekt

**Antwort:** A — Fehlercode 43 bedeutet, dass Windows das Gerät ordnungsgemäß erkennt, aber der Treiber meldet ein Problem.

---

**Frage 4:** Was passiert bei einer Pausierung von Windows Updates für 5 Wochen?
- A) Alle Updates (inkl. Sicherheitsupdates) werden für 5 Wochen blockiert
- B) Nur Funktionsupdates werden blockiert
- C) Sicherheitsupdates werden weiterhin installiert, nur große Updates werden blockiert
- D) Der PC wird für 5 Wochen nicht mehr neu gestartet

**Antwort:** A — Die Pausierung blockiert alle Arten von Updates für den gewählten Zeitraum (maximal 5 Wochen).

---

**Frage 5:** Warum sind digitale Treibersignaturen in Windows 11 (64-Bit) wichtig?
- A) Sie verhindern, dass Treiber deinstalliert werden
- B) Sie garantieren, dass der Treiber von Microsoft validiert wurde und kein Schadcode enthält
- C) Sie machen Treiber schneller
- D) Sie sind nur für Windows Home relevant

**Antwort:** B — Signierte Treiber wurden durch Microsoft-Validierung (WHQL) geprüft und garantieren Integrität.

---

## Ticket-Szenario

**Situation:**
Eine Mitarbeiterin meldet sich: „Seit dem Update gestern Abend funktioniert mein Drucker nicht mehr. Windows hat etwas installiert und seitdem kommt die Fehlermeldung, dass der Treiber nicht kompatibel sei. Ich muss heute dringend Verträge ausdrucken."

**Aufgabe:**
1. Wie priorisierst du das Ticket?
2. Wie gehst du bei der Diagnose vor?
3. Wie löst du das Problem?
4. Dokumentiere den Fall für die Wissensdatenbank.

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P2 (Hoch) — Drucker ist betriebskritisch, es gibt einen Workaround (z. B. PDF erstellen und auf einem anderen Gerät drucken). Kein kompletter Ausfall.

**2. Diagnose:**
- Geräte-Manager öffnen und Druckerkategorie prüfen — gibt es einen Fehlercode?
- Treibereigenschaften öffnen: Wer ist der Anbieter? Wann wurde er installiert? Gibt es einen Hinweis auf Fehlercode 43 oder 10?
- Windows Update-Verlauf prüfen: Welches Update wurde „gestern Abend" installiert? Ist es ein Treiber-Update?
- Prüfen, ob es einen Systemwiederherstellungspunkt vor dem Update gibt.

**3. Lösung:**
- **Schnellste Lösung:** Treiber zurücksetzen — Geräte-Manager → Drucker → Rechtsklick → Eigenschaften → Reiter „Treiber" → „Treiber zurücksetzen"
- **Alternativ:** Letzten funktionierenden Treiber manuell von der Hersteller-Website installieren
- **Workaround:** Dokumente als PDF exportieren und von einem druckfähigen Gerät aus drucken (z. B. anderer PC, Kopierer)
- **Falls fehlgeschlagen:** Systemwiederherstellung zum letzten funktionierenden Wiederherstellungspunkt

**4. Dokumentation:**
- Problem: Drucker funktioniert nach Windows Update nicht mehr (Fehlercode 43)
- Ursache: Kompatibilitätsproblem zwischen aktuellem Treiber und Windows Update-KB [Nummer]
- Lösung: Treiber zurücksetzen auf vorherige Version
- Verifizierung: Testdruck erfolgreich durchgeführt
- Wissensdatenbank-Artikel: „Drucker-Probleme nach Windows Update — Treiber zurücksetzen"

</details>

---

## Quellen

- [Microsoft Learn — Windows Update Overview](https://learn.microsoft.com/windows/deployment/update/windows-update-overview) — abgerufen am 2026-10-19
- [Microsoft Learn — Driver Signing](https://learn.microsoft.com/windows-hardware/drivers/install/driver-signing) — abgerufen am 2026-10-19
- [Microsoft Learn — Windows Hello Overview](https://learn.microsoft.com/windows/identity-protection/hello-for-business/hello-overview) — abgerufen am 2026-10-19
- [CompTIA A+ Certification](https://www.comptia.org/certifications/a) — abgerufen am 2026-10-19
