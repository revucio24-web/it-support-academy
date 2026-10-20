---
title: "Modul 9: Windows Tiefe — Ereignisanzeige, Registry, Dienste, Task-Manager, Performance"
level: 2
module: 9
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://learn.microsoft.com/de-de/windows/win32/eventlog/event-viewer"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows/win32/sysinfo/registry"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/de-de/windows/win32/services/services"
    abrufdatum: 2026-10-19
  - url: "https://www.comptia.org/certifications/a"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du kannst die Ereignisanzeige (Event Viewer) öffnen, Protokolle lesen und nach Filtern und Ereignis-IDs suchen
2. Du verstehst den Aufbau der Windows-Registry und kannst den Registry-Editor sicher bedienen — inklusive Backup vor Änderungen
3. Du kennst den Dienststeuerungs-Manager (SCM), kannst Dienste über die GUI und den Befehl `sc` abfragen, starten, stoppen und konfigurieren
4. Du kannst den Task-Manager nutzen, um Prozesse zu identifizieren, zu beenden und Ressourcenverbrauch zu analysieren
5. Du verstehst die Grundlagen der Performance-Überwachung (Leistungsmonitor, Ressourcenüberwachung) und kannst typische Engpass-Symptome zuordnen

---

## Theorie

### 1. Ereignisanzeige (Event Viewer)

Die Ereignisanzeige ist ein Microsoft Management Console-Snap-in, mit dem du vom Windows-System und von Anwendungen protokollierte Ereignisse ansehen kannst. Sie ist ein zentrales Werkzeug für die Fehlersuche auf System- und Anwendungsebene.

**Start der Ereignisanzeige:**
- `eventvwr.msc` im Ausführen-Dialog (Windows-Taste + R) oder in der Eingabeaufforderung
- Über die Windows-Suche nach „Ereignisanzeige" oder „Event Viewer"
- Im X-Menü (Windows-Taste + X) unter „Ereignisanzeige"

**Protokollkategorien (Windows-Protokolle):**

| Protokoll | Inhalt |
|-----------|--------|
| **Anwendung** | Ereignisse von Anwendungen (Fehler, Warnungen) |
| **Sicherheit** | Anmelde- und Authentifizierungsereignisse, Richtlinienänderungen |
| **Setup** | Ereignisse während der Systemeinrichtung und von Updates |
| **System** | Ereignisse der Systemkomponenten und Treiber |

Darüber hinaus existieren „Anwendungs- und Dienstprotokolle" für spezifische Dienste wie PowerShell, IIS, Defender u. v. m.

**Ereignisstufen:**

| Stufe | Bedeutung |
|-------|-----------|
| **Information** | Erfolgreiche Aktion oder Statusänderung |
| **Warnung** | Potenzielles Problem, das noch keinen Ausfall verursacht |
| **Fehler** | Fehlgeschlagene Aktion oder Funktionseinschränkung |
| **Kritisch** | Systemabsturz oder Datenverlust |
| **Ausführliche Überprüfung** | Detaillierte Ablaufprotokollierung (nur aktivierbare Einstellung) |

**Praktische Nutzung in der Diagnose:**
1. Zeitraum des Fehlers notieren und im Protokoll filtern („Aktuelles Protokoll filtern" → Zeitbereich)
2. Nach Stufe „Fehler" und „Kritisch" filtern
3. Ereignis-ID und Quelle notieren — diese sind die wichtigsten Suchbegriffe für die Fehlersuche
4. Doppelklick auf ein Ereignis zeigt Beschreibung und ggf. Link zur Onlinedokumentation

### 2. Registry (Registrierungsdatenbank)

Die Registry ist eine hierarchische Datenbank, in der Windows und Anwendungen Konfigurationsdaten speichern. Microsoft beschreibt sie als „eine systemdefinierte Datenbank, in der Anwendungen und Systemkomponenten Konfigurationsdaten speichern und abrufen" (Microsoft Learn, abgerufen 2026-10-19).

**Wichtige Registry-Hives (Wurzelschlüssel):**

| Abkürzung | Vollständiger Name | Inhalt |
|-----------|-------------------|--------|
| **HKLM** | HKEY_LOCAL_MACHINE | Systemweite Einstellungen (Hardware, Software, Treiber, Dienste) |
| **HKCU** | HKEY_CURRENT_USER | Einstellungen des aktuell angemeldeten Benutzers |
| **HKCR** | HKEY_CLASSES_ROOT | Dateizuordnungen und COM-Objektregistrierung |
| **HKU** | HKEY_USERS | Einstellungen aller Benutzerprofile auf dem System |
| **HKCC** | HKEY_CURRENT_CONFIG | Aktuelle Hardware-Konfiguration |

**Registry-Editor bedienen:**
- Start über `regedit.exe` im Ausführen-Dialog oder die Windows-Suche
- Navigationsstruktur links: Schlüssel (Ordner-Symbol) und Werte (Namens-Wert-Paare)
- Ein Schlüssel kann Unterschlüssel und Werte enthalten
- Werte haben Datentypen (String, DWORD (32-Bit), QWORD (64-Bit), Binary, Multi-String, Expandierbarer String)

**Sicherheitsregel (Microsoft Learn):**
> „Sie sollten Registrierungsdaten nicht bearbeiten, die nicht zu Ihrer Anwendung gehören, es sei denn, sie ist unbedingt erforderlich. Wenn in der Registrierung ein Fehler auftritt, funktioniert das System möglicherweise nicht ordnungsgemäß."

**Vor jeder Änderung:**
1. Registry-Editor öffnen
2. Datei → Exportieren → gesamten Registry-Zweig als .reg-Datei speichern
3. Alternativ: System wiederherstellungsstelle erstellen („Systemsteuerung → Wiederherstellung → Systemwiederherstellung konfigurieren")
4. Änderung vornehmen und System neustarten, um das Ergebnis zu prüfen

### 3. Dienste (Services)

Ein Dienst ist eine Anwendung, die im Hintergrund läuft und keinen direkten Benutzereingriff erfordert. Microsoft Learn definiert: „Eine Dienstanwendung entspricht den Schnittstellenregeln des Dienststeuerungs-Managers (Service Control Manager, SCM). Sie kann automatisch beim Systemstart, durch einen Benutzer oder durch eine Anwendung gestartet werden. Dienste können auch dann ausgeführt werden, wenn kein Benutzer am System angemeldet ist" (Microsoft Learn, abgerufen 2026-10-19).

**GUI-Verwaltung (Dienste-Konsole):**
- Start über `services.msc` im Ausführen-Dialog
- Liste zeigt: Name, Beschreibung, Status (Gestartet/Gestoppt), Starttyp, Anmeldeidentität

**Starttypen:**

| Starttyp | Verhalten |
|----------|-----------|
| **Automatisch** | Startet beim Systemstart |
| **Automatisch (verzögter Start)** | Startet nach dem Systemstart, verkürzt die Boot-Zeit |
| **Manuell** | Wird nur bei Bedarf gestartet |
| **Deaktiviert** | Kann nicht gestartet werden |

**Befehlszeilen-Verwaltung (`sc.exe`):**

```cmd
sc query                 :: Alle Dienste und ihren Status anzeigen
sc start <Dienstname>    :: Dienst starten
sc stop <Dienstname>     :: Dienst stoppen
sc config <Dienstname> start= auto :: Starttyp ändern
```

**Häufige Dienste in der Support-Praxis:**

| Dienstname | Beschreibung |
|------------|---------------|
| Spooler | Druckwarteschlange |
| wuauserv | Windows Update |
| WinDefend | Microsoft Defender Antivienst |
| LanmanServer | Dateifreigabe (Server-Dienst) |
| TermService | Remotedesktopdienste |

**Wichtig:** Vor dem Ändern des Starttyps oder Stoppen eines Diensts prüfen, ob andere Dienste davon abhängen (Registerkarte „Abhängigkeiten" in den Diensteigenschaften).

### 4. Task-Manager

Der Task-Manager ist das primäre Werkzeug zur Analyse laufender Prozesse und der Systemleistung. Er ist über die Tastenkombination Strg+Umschalt+Esc oder über Strg+Alt+Entf → Task-Manager zu öffnen.

**Registerkarten im Task-Manager (Windows 11):**

| Registerkarte | Nutzung in der Diagnose |
|---------------|--------------------------|
| **Prozesse** | Laufende Anwendungen und Hintergrundprozesse; Sortierung nach CPU, Arbeitsspeicher, Datenträger, Netzwerk |
| **Leistung** | Echtzeit-Diagramme für CPU, Arbeitsspeicher, Datenträger, Netzwerk, GPU |
| **Start** | Programme beim Systemstart; beeinflusst die Boot-Zeit |
| **Benutzer** | Prozesse pro Benutzer; beim Auflösen von Sitzungskonflikten |
| **Details** | Erweiterte Prozessliste (PID, Benutzername, Priorität) |
| **Dienste** | Kurzansicht der Dienste; Verlinkung zur services.msc-Konsole |

**Typische Anwendungsfälle im Support:**
1. Prozess mit 100 % CPU-Auslastung identifizieren → Rechtsklick → „Dateispeicherort öffnen" oder „Details suchen" (zur Identifikation)
2. Nicht reagierende Anwendung beenden: Prozess markieren → Task beenden
3. Startprogramme deaktivieren, wenn das System langsam startet
4. Leistungstabellen nutzen, um Engpässe zu erkennen (z. B. konsequent 100 % Datenträger = fehlerhafte SSD oder defragmentierte HDD)

### 5. Performance-Überwachung

Neben dem Task-Manager bietet Windows zwei weiterführende Werkzeuge für detailliertere Leistungsanalysen:

**Ressourcenüberwachung (Resource Monitor):**
- Start über `resmon.msc` im Ausführen-Dialog
- Echtzeit-Daten zu CPU, Arbeitsspeicher, Datenträger und Netzwerk
- Prozessbezogene Filterung möglich
- Identifiziert, welche Prozesse Dateizugriffe auf bestimmte Pfade ausführen

**Leistungsmonitor (Performance Monitor):**
- Start über `perfmon.msc` im Ausführen-Dialog
- Leistungsindikatoren (Performance Counter) definieren und überwachen
- Datensammler-Sätze (Data Collector Sets) erstellen, um Messreihen aufzuzeichnen
- Systemdiagnosebericht erstellen: `perfmon /report` → nach ca. 60 Sekunden ein umfassender Bericht über Treiber, Dienste, Netzwerk und Hardware

**Typische Engpass-Symptome:**

| Symptom | Mögliche Ursache | Werkzeug |
|---------|-----------------|----------|
| Ständig 100 % CPU | Hintergrundprozess, Malware, Treiberfehler | Task-Manager → Details |
| Arbeitsspeicher fast voll | Speicherleck, zu viele Offene Programme | Ressourcenüberwachung → Arbeitsspeicher |
| Datenträger ständig 100 % | Fehlerhafte SSD/HDD, Superfetch, Virenscanner | Ressourcenüberwachung → Datenträger |
| Langsames Booten | Zu viele Startprogramme, fragmentierte HDD | Task-Manager → Start |
| Netzwerk hohe Latenz | Bandbreitenschatz durch Prozesse | Ressourcenüberwachung → Netzwerk |

---

## Praxis-Übung im Homelab

### Übung: Systemdiagnose mit den Windows-Tools

**Vorbereitung:**
- Windows 11 VM oder physischer Rechner mit Windows 11 23H2
- Admin-Rechte für den angemeldeten Benutzer erforderlich

**Aufgabe 1 — Ereignisanzeige (10 Minuten):**
1. Öffne die Ereignisanzeige (`eventvwr.msc`)
2. Navigiere zu „Windows-Protokolle → System"
3. Filtere auf die Stufe „Fehler" der letzten 7 Tage (Aktion → Aktuelles Protokoll filtern)
4. Notiere die 3 häufigsten Ereignis-IDs mit Quelle und Uhrzeit
5. Suche online nach der Ereignis-ID der häufigsten Fehlerquelle

**Aufgabe 2 — Registry-Backup (5 Minuten):**
1. Öffne den Registry-Editor (`regedit.exe`)
2. Navigiere zu `HKEY_CURRENT_USER\Software`
3. Exportiere den Schlüssel als .reg-Datei (Rechtsklick → Exportieren)
4. Prüfe, ob die .reg-Datei auf dem Datenträger vorhanden ist
5. Vergleiche die Dateigröße mit der Größe desRegistry-Zweigs (schwer vorhersbar — nur das Backup prüfen)

**Aufgabe 3 — Dienste über CLI abfragen (10 Minuten):**
1. Öffne eine Eingabeaufforderung als Administrator
2. Führe `sc query` aus und notiere den Status der Dienste „Spooler" und „wuauserv"
3. Führe `sc query type= state= all` aus und zähle, wie viele Dienste gestoppt sind
4. Prüfe mit `sc qc Spooler`, welcher Starttyp konfiguriert ist

**Aufgabe 4 — Task-Manager-Analyse (10 Minuten):**
1. Öffne den Task-Manager (Strg+Umschalt+Esc)
2. Sortiere die Prozesse nach CPU-Auslastung — notiere den Top-Prozess
3. Sortiere nach Arbeitsspeicher — notiere den Top-Prozess
4. Wechsle zur Registerkarte „Leistung" und beobachte die CPU- und Datenträger-Diagramme für 2 Minuten
5. Notiere, ob ein Engpass sichtbar ist (konsequent hohe Auslastung)

**Erwartetes Ergebnis:**

| Aufgabe | Ergebnis |
|---------|----------|
| Ereignisanzeige | 3 Fehlerereignisse dokumentiert, davon mindestens 1 mit identifizierter Quelle |
| Registry-Backup | .reg-Datei wurde erfolgreich erstellt |
| Dienste | Status von Spooler und wuauserv dokumentiert, Anzahl gestoppte Dienste notiert |
| Task-Manager | Top-Prozess nach CPU und RAM identifiziert, Engpass analysiert |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Ereignis-IDs ohne Kontext interpretieren

- **Symptom:** IT-Support sucht nach der Ereignis-ID, findet aber keine brauchbare Lösung
- **Ursache:** Ereignis-ID allein ist nicht eindeutig — Quelle, Protokoll und Zeitpunkt sind entscheidend
- **Diagnose-Schritte:**
  1. Ereignisanzeige öffnen und das betroffene Protokoll (Anwendung, System, Sicherheit) identifizieren
  2. Doppelklick auf das Ereignis — Quelle, Ereignis-ID und Beschreibung notieren
  3. Alle vier Parameter zusammen suchen (z. B. „Ereignis-ID 10016 Quelle DistributedCOM")
- **Lösung:**
  - Vollständige Ereignisdetails (inkl. XML-Ansicht) in die Websuche übernehmen
  - Microsoft Learn nach der Quelle und ID durchsuchen
- **Prävention:** Immer Quelle + Protokoll + Ereignis-ID + Zeitstempel gemeinsam dokumentieren

---

### Fehler 2: Registry ohne Backup ändern

- **Symptom:** System startet nach einer Registry-Änderung nicht mehr oder verhält sich fehlerhaft
- **Ursache:** Änderung ohne vorheriges Exportieren des betroffenen Registry-Zweigs
- **Diagnose-Schritte:**
  1. Prüfen, ob ein .reg-Backup der Änderung vorhanden ist
  2. Falls vorhanden: System in den abgesicherten Modus starten und das Backup per Doppelklick zurückspielen
  3. Falls nicht vorhanden: Systemwiederherstellung oder letzte bekannte gute Konfiguration versuchen
- **Lösung:**
  - Registry-Editor → Datei → Exportieren → betroffenen Zweig als .reg speichern
  - Alternativ: Systemwiederherstellungsstelle erstellen („Systemsteuerung → System → Systemschutz")
  - Erst nach erfolgreichem Backup die Änderung vornehmen
- **Prävention:** Nie ohne Backup an der Registry arbeiten — die Änderung ist erst dann sicher, wenn ein Rollback möglich ist

---

### Fehler 3: Kritischen Dienst deaktivieren oder stoppen

- **Symptom:** Nach dem Stoppen oder Deaktivieren eines Diensts funktioniert ein anderes Systemfeature nicht mehr
- **Ursache:** Abhängigkeiten zwischen Diensten nicht geprüft, bevor ein Dienst deaktiviert wurde
- **Diagnose-Schritte:**
  1. services.msc öffnen und den betroffenen Dienst auswählen
  2. Registerkarte „Abhängigkeiten" prüfen — zeigt, welche anderen Dienste von diesem abhängen
  3. Prüfen, ob ein abhängiger Dienst noch funktioniert
- **Lösung:**
  - Dienst wieder starten (manuell oder über `sc start <Dienstname>`)
  - Starttyp auf „Automatisch" zurücksetzen, falls erforderlich
  - Abhängigkeiten im Ticket dokumentieren, um zukünftige Probleme zu vermeiden
- **Prävention:** Vor jeder Änderung an Diensten immer die Registerkarte „Abhängigkeiten" prüfen

---

### Fehler 4: Task-Manager-Daten falsch interpretieren

- **Symptom:** Falsche Diagnose — ein harmloser Prozess wird als Problem identifiziert und beendet
- **Ursache:** Keine Kenntnis der Windows-Systemprozesse; Prozessnamen werden nicht korrekt eingeordnet
- **Diagnose-Schritte:**
  1. Prozessnamen in einer Suchmaschine prüfen (z. B. „svchost.exe" oder „Runtime Broker")
  2. Rechtsklick auf den Prozess → „Dateispeicherort öffnen" — zeigt die zugrunde liegende ausführbare Datei
  3. Den Prozess über die Registerkarte „Details" mit dem Task-Manager von Process Explorer (Microsoft Sysinternals) vergleichen
- **Lösung:**
  - Kritische Systemprozesse (csrss.exe, wininit.exe, services.exe, lsass.exe, svchost.exe) niemals beenden
  - „Task beenden" nur bei Anwendungen mit freigewähltem Namen und bekanntem Hintergrund
  - Bei Unsicherheit: Prozessnamen recherchieren, bevor gehandelt wird
- **Prävention:** Vor dem Beenden eines Prozesses immer prüfen, ob es sich um einen Windows-Systemprozess handelt

---

## Mini-Quiz

**Frage 1:** Wie startest du die Ereignisanzeige am schnellsten über die Tastatur?
- A) Windows-Taste + X → Ereignisanzeige
- B) Windows-Taste + R → `eventvwr.msc` → Enter
- C) Strg+Umschalt+Esc → Ereignisanzeige
- D) Windows-Taste + E → Ereignisanzeige

**Antwort:** B — Der Ausführen-Dialog mit `eventvwr.msc` ist der schnellste Weg.

---

**Frage 2:** Was solltest du VOR jeder Änderung an der Registry tun?
- A) Den Computer neu starten
- B) Den betroffenen Registry-Zweig als .reg-Datei exportieren
- C) Den Task-Manager öffnen
- D) Nichts — die Registry ist sicher

**Antwort:** B — Ein Backup (Exportieren) ist zwingend erforderlich, da falsche Änderungen das System unstartbar machen können.

---

**Frage 3:** Welcher Befehl zeigt den Status aller Dienste über die Befehlszeile an?
- A) `service list`
- B) `sc query`
- C) `net status`
- D) `svc show`

**Antwort:** B — `sc query` listet alle Dienste mit ihrem aktuellen Status auf.

---

**Frage 4:** Ein Prozess in deiner Umgebung hat 100 % CPU-Auslastung. Was ist der erste Schritt, bevor du ihn beendest?
- A) Sofort „Task beenden" klicken
- B) Den Prozessnamen recherchieren und „Dateispeicherort öffnen" prüfen
- C) Den Computer neu starten
- D) Den Task-Manager schließen

**Antwort:** B — Bevor ein Prozess beendet wird, muss geprüft werden, ob es sich um einen kritischen Systemprozess handelt.

---

**Frage 5:** Wo findest du die Abhängigkeiten eines Diensts, bevor du ihn deaktivierst?
- A) Task-Manager → Start
- B) Ereignisanzeige → System
- C) services.msc → Diensteigenschaften → Registerkarte „Abhängigkeiten"
- D) Ressourcenüberwachung → Datenträger

**Antwort:** C — Die Registerkarte „Abhängigkeiten" in den Diensteigenschaften zeigt, welche anderen Dienste von diesem abhängen.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter meldet: „Mein PC startet seit gestern extrem langsam. Nach dem Login sind alle Programme träge. Außerdem geht der Bildschirm nach einigen Minuten schwarz, und ich muss neu starten. Das Problem trat nach einem Windows-Update auf."

**Aufgabe:**
1. Welche Windows-Tools nutzt du für die Diagnose und in welcher Reihenfolge?
2. Was prüfst du in der Ereignisanzeige?
3. Wie identifizierst du den oder die Prozess(e), die die hohe CPU- oder Datenträgerauslastung verursachen?
4. Wie gehst du vor, wenn du einen Treiber als Ursache vermutest?

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Diagnose-Reihenfolge:**

1. **Task-Manager** → sofortige Einschätzung: CPU-, RAM-, Datenträger-Auslastung; Top-Prozesse identifizieren
2. **Ereignisanzeige** → System- und Anwendungsprotokolle der letzten Stunde/den letzten Stunden nach Fehlern filtern; Ereignis-IDs und Quellen notieren
3. **Ressourcenüberwachung** (`resmon.msc`) → detaillierte Analyse, welche Prozesse Datei- oder Netzwerkzugriffe ausführen
4. **Leistungsmonitor** → falls das Problem intermittierend auftritt, einen Datensammler-Satz über einen längeren Zeitraum aufzeichnen
5. **Dienste** → prüfen, ob der Windows Update-Dienst (wuauserv) noch aktiv ist oder hängt

**2. Ereignisanzeige prüfen:**
- „Windows-Protokolle → System" → Filter auf „Fehler" und „Warnung" der letzten 24–48 Stunden
- „Windows-Protokolle → Anwendung" → Anwendungsfehler, die auf fehlgeschlagene Updates oder Treiber hinweisen
- Typische Ereignis-IDs nach Updates: „Kernel-General", „Kernel-Power" (bei schwarzem Bildschirm = möglicher Absturz), „DistributedCOM"
- Auf „Kritisch" prüfen — ein Eintrag bei „Kernel-Power" mit Code 41 deuten auf einen Plug-and-Play-Absturz hin

**3. Prozessidentifikation:**
- Task-Manager → Registerkarte „Details" → Spalte „CPU" oder „Datenträger" sortieren
- Rechtsklick auf den Top-Prozess → „Dateispeicherort öffnen" → zeigt den Pfad der ausführbaren Datei
- Prüfen, ob der Pfad zu einer bekanntem Windows-Komponente oder zu einer Drittanbieter-Anwendung zeigt
- Bei `svchost.exe`: Rechtsklick → „Wechseln zu Diensten" — zeigt, welche Dienste unter diesem Prozess laufen
- Prozessnamen recherchieren, falls unbekannt

**4. Treiber als Ursache vermuten:**
- Geräte-Manager öffnen (Windows-Taste + X → Geräte-Manager)
- Auf Ausrufezeichen oder rote Markierungen prüfen
- Bei verdächtigem Treiber: Rechtsklick → „Eigenschaften" → Registerkarte „Treiber" → „Treiber zurücksetzen" (falls verfügbar) oder „Treiber deaktivieren"
- Letzter funktionierender Treiber wird automatisch installiert
- Alternativ: Windows-Update erneut ausführen (manuell nach aktuellen Treibern suchen)
- Falls das Problem nach einem bestimmten Update auftrat: „Einstellungen → Windows Update → Updateverlauf → Updates deinstallieren" → das betroffene Update entfernen
</details>

---

## Quellen

- [Microsoft Learn — Ereignisanzeige (Event Viewer)](https://learn.microsoft.com/de-de/windows/win32/eventlog/event-viewer) — abgerufen am 2026-10-19
- [Microsoft Learn — Registrierung (Registry)](https://learn.microsoft.com/de-de/windows/win32/sysinfo/registry) — abgerufen am 2026-10-19
- [Microsoft Learn — Dienste (Services)](https://learn.microsoft.com/de-de/windows/win32/services/services) — abgerufen am 2026-10-19
- [CompTIA A+ Certification](https://www.comptia.org/certifications/a) — abgerufen am 2026-10-19