---
title: "Modul 12: Netzwerk Tiefe — VLAN, VPN, Firewall, DNS-Fehleranalyse"
level: 2
module: 12
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/vlans-and-vpns-220-1101/"
    abrufdatum: 2026-10-19
  - url: "https://www.netacad.com/content/srwe/1.0/courses/content/m3/en-US/assets/3.4.6-lab---configure-vlans-and-trunking.pdf"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/modules/manage-defender-windows-client/5-manage-windows-defender-firewall"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows-server/networking/dns/troubleshoot/troubleshoot-dns-client"
    abrufdatum: 2026-10-19
  - url: "https://blog.alphaprep.net/comptia-a-core-1-networking-tools-how-to-choose-the-right-tool-for-the-right-scenario/"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst das Konzept von VLANs und kannst erklären, warum sie in Unternehmensnetzwerken eingesetzt werden
2. Du kennst die Unterschiede zwischen Remote-Access-VPN und Site-to-Site-VPN und die zugehörigen Protokolle (IPsec, SSL/TLS, L2TP/IPsec)
3. Du kannst die Windows Defender Firewall konfigurieren und Firewall-Regeln verwalten
4. Du beherrschst die DNS-Fehleranalyse mit den Werkzeugen `ipconfig`, `nslookup` und `ping`
5. Du kannst Netzwerkprobleme systematisch eingrenzen und Lösungen dokumentieren

---

## Theorie

### 1. VLAN — Virtual Local Area Network

Ein VLAN (Virtual Local Area Network) segmentiert ein physisches Netzwerk in logische Broadcast-Domains. Mehrere Geräte können an demselben Switch angeschlossen sein, aber unterschiedliche VLANs bilden, sodass sie nicht direkt miteinander kommunizieren können — sie verhalten sich, als wären sie an unterschiedlichen physikalischen Switches.

**Vorteile von VLANs:**

| Vorteil | Beschreibung |
|---------|--------------|
| Broadcast-Reduzierung | Broadcasts bleiben innerhalb des VLANs — entlastet das gesamte Netzwerk |
| Sicherheit | Geräte in verschiedenen VLANs können nicht direkt miteinander kommunizieren |
| Kostenersparnis | Ein Switch kann mehrere logische Netzwerke abbilden, separate Hardware entfällt |
| Flexibilitätssteigerung | Geräte können logisch gruppiert werden, unabhängig vom physischen Standort |

**VLAN-Konzepte (Cisco NetAcad):**

- **Access-Port**: Ein Switch-Port, der genau einem VLAN zugeordnet ist. Verbindet Endgeräte (PCs, Drucker).
- **Trunk-Port**: Ein Switch-Port, der mehrere VLANs transportiert (802.1Q-Tagging). Verbindet Switches miteinander.
- **Native VLAN**: Das untaggte VLAN auf einem Trunk-Port.

**Konfigurationsbeispiel (Cisco IOS — aus NetAcad Lab "Configure VLANs and Trunking"):**

```
S1(config)# vlan 10
S1(config-vlan)# name Operations
S1(config-vlan)# vlan 20
S1(config-vlan)# name Parking_Lot
S1(config-vlan)# vlan 99
S1(config-vlan)# name Management

S1(config)# interface f0/6
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 10

S1# show vlan brief
```

**Wichtig für die A+ Prüfung:** VLANs arbeiten auf Layer 2 (Data Link Layer) des OSI-Modells. Ein Router wird benötigt, um zwischen VLANs zu kommunizieren (Inter-VLAN-Routing). (Quelle: CompTIA A+ 220-1101, Professor Messer)

### 2. VPN — Virtual Private Network

Ein VPN erstellt einen verschlüsselten Tunnel über ein nicht vertrauenswürdiges Netzwerk (typischerweise das Internet). So können Benutzer oder Netzwerke sicher auf interne Ressourcen zugreifen.

**Zwei Haupttypen von VPNs:**

| Typ | Beschreibung | Typischer Einsatzzweck |
|-----|--------------|------------------------|
| **Remote-Access-VPN** | Einzelner Benutzer verbindet sich mit dem Firmennetzwerk | Homeoffice, mobile Mitarbeiter |
| **Site-to-Site-VPN** | Zwei Netzwerke werden permanent verbunden | Zweigstelle ↔ Hauptquartier |

**VPN-Protokolle (CompTIA A+ 220-1101):**

| Protokoll | Port | Beschreibung |
|-----------|------|--------------|
| IPsec (ESP/AH) | UDP 500, UDP 4500 | Häufig für Site-to-Site-VPNs; verschlüsselt auf Netzebene (Layer 3) |
| SSL/TLS | TCP 443 | Häufig für Remote-Access-VPNs; verwendet HTTPS; browserbasierte VPNs ohne dedizierten Client |
| L2TP/IPsec | UDP 1701 | L2TP erstellt den Tunnel, IPsec verschlüsselt die Daten |

**Wichtig für die A+ Prüfung:**

- IPsec arbeitet in zwei Modi: **Transport-Modus** (nur Nutzdaten verschlüsselt) und **Tunnel-Modus** (gesamtes Paket verschlüsselt).
- SSL/TLS-VPNs sind firewall-freundlich, da sie TCP 443 verwenden (gleicher Port wie HTTPS).
- L2TP bietet selbst keine Verschlüsselung — es wird immer mit IPsec kombiniert.

(Quelle: CompTIA A+ 220-1101, Professor Messer; CompTIA A+ Study Guides)

### 3. Windows Defender Firewall

Die Windows Defender Firewall ist die eingebautes Host-basierte Firewall in Windows 11. Sie filtert eingehende und ausgehende Netzwerkverkehr basierend auf Regeln.

**Drei Netzwerkprofile (Microsoft Learn):**

| Profil | Beschreibung | Firewall-Verhalten |
|--------|--------------|---------------------|
| **Domain** | Unternehmensnetzwerk mit Active Directory | Vom Domänenadministrator festgelegte Regeln |
| **Private** | Vertrauenswürdiges Heim- oder Büronetzwerk | Eingehende Verweise werden blockiert, bekannte Apps dürfen kommunizieren |
| **Public** | Öffentliche Netzwerke (Café, Flughafen) | strengste Regeln; eingehende Verweise werden blockiert |

**Firewall-Optionen (bestätigt durch Microsoft Learn):**

- **Eingehende Verbindungen blockieren**: Blockiert alle eingehenden Verbindungen, inklusive der Liste der erlaubten Apps
- **App durch Firewall zulassen**: Erstellt Ausnahmen für bestimmte Anwendungen oder Ports
- **Erweiterte Einstellungen**: Öffnet die klassische Windows Defender Firewall mit der MMC (Ein-/Ausgangsregeln, Verbindungsicherheitsregeln, Überwachung)

**Typische Firewall-Regeln:**

| Regeltyp | Beschreibung | Beispiel |
|----------|--------------|----------|
| Erlaube-Regel | Lässt bestimmten Verkehr zu | Port 3389 für RDP |
| Block-Regel | Blockiert bestimmten Verkehr | Port 23 für Telnet |
| Eingehend/ausgehend | Richtung des Verkehrs | Eingehend: Verbindungsversuche von außen |

**Wichtig für die A+ Prüfung:** Firewall-Regeln können auf App- oder Port-Basis erstellt werden. Ein offener Port bedeutet, dass Verkehr durchgelassen wird; ein geschlossener Port blockiert den Verkehr. (Quelle: CompTIA A+ 220-1101; Microsoft Learn)

### 4. DNS-Fehleranalyse

Das Domain Name System (DNS) übersetzt Domain-Namen in IP-Adressen. DNS-Probleme verhindern, dass Webseiten über ihren Namen erreichbar werden — obwohl die Netzwerkverbindung selbst funktioniert.

**Diagnose-Werkzeuge (bestätigt durch Microsoft Learn und CompTIA A+ 220-1101):**

| Werkzeug | Zweck | Befehl |
|---------|-------|--------|
| `ipconfig /all` | Zeigt DNS-Server, IP, Subnet, Gateway | `ipconfig /all` |
| `ipconfig /flushdns` | Leert den DNS-Resolver-Cache | `ipconfig /flushdns` |
| `ipconfig /release` | Gibt die IP-Adresse frei | `ipconfig /release` |
| `ipconfig /renew` | Fordert neue IP-Adresse von DHCP an | `ipconfig /renew` |
| `nslookup` | Fragt DNS-Server nach Domain-Namen | `nslookup www.example.com` |
| `ping` | Testet Netzwerkverbindungen über IP oder Name | `ping 8.8.8.8` oder `ping www.example.com` |

**DNS-Troubleshooting-Strategie (Microsoft Learn):**

1. **IP-Verbindung testen**: `ping` einer bekannten IP-Adresse (z. B. Gateway oder 8.8.8.8)
2. **DNS-Server prüfen**: `ipconfig /all` — stimmen die DNS-Server-Einstellungen?
3. **DNS-Server-Erreichbarkeit**: `ping` der DNS-Server-IP
4. **DNS-Abfrage testen**: `nslookup <Domain>` — antwortet der DNS-Server?
5. **DNS-Cache leeren**: `ipconfig /flushdns` bei veralteten oder korrupten Cache-Einträgen
6. **DNS-Server wechseln**: Auf öffentlichen DNS-Server testen (z. B. 8.8.8.8 für Google DNS)

**Typische DNS-Probleme:**

| Problem | Symptom | Lösung |
|---------|---------|--------|
| Falscher DNS-Server | IP ping funktioniert, Name nicht | DNS-Server in den Netzwerkeinstellungen korrigieren |
| Veralteter DNS-Cache | Seite nach DNS-Wechsel nicht erreichbar | `ipconfig /flushdns` |
| DNS-Server nicht erreichbar | alle Namen unauflösbar | DNS-Server wechseln oder Firewall-Regeln prüfen |
| Falscher DNS-Eintrag | falsche IP-Adresse wird zurückgegeben | DNS-Eintrag auf dem Server korrigieren |

---

## Praxis-Übung im Homelab

### Übung: Netzwerk-Diagnose-Simulation

**Vorbereitung:**

- Windows 11 VM oder physischer PC mit Netzwerkzugriff
- Administratorrechte für die Eingabeaufforderung

**Aufgabe:**

Öffne die Eingabeaufforderung (cmd) als Administrator und führe folgende Schritte aus:

**1. IP-Konfiguration anzeigen**

```
ipconfig /all
```

Notiere: IPv4-Adresse, Subnetzmaske, Standard-Gateway, DNS-Server

**2. Gateway-Anreichbarkeit testen**

```
ping <IP-deines-Gateways>
```

Erwartet: Vier Antworten mit "Reply from..."

**3. DNS-Funktion testen**

```
nslookup www.example.com
```

Erwartet: Antwort mit aufgelöster IP-Adresse

**4. DNS-Cache anzeigen und leeren**

```
ipconfig /displaydns
ipconfig /flushdns
```

**5. Webseiten-Zugriff testen**

```
ping www.example.com
```

**Erwartetes Ergebnis:**

| Schritt | Befehl | Erwartet |
|---------|--------|----------|
| 1 | `ipconfig /all` | IP, Gateway, DNS sichtbar |
| 2 | `ping <Gateway>` | Vier Reply-Zeilen |
| 3 | `nslookup www.example.com` | IP-Adresse wird aufgelöst |
| 4 | `ipconfig /flushdns` | "Successfully flushed" |
| 5 | `ping www.example.com` | Reply-Zeilen mit IP |

---

## Berühmte Fehler + Lösungen

### Fehler 1: Falsche DNS-Server-Einstellung

- **Symptom:** Der Benutzer kann Webseiten nicht aufrufen (Name nicht auflösbar), aber `ping 8.8.8.8` funktioniert
- **Ursache:** Falsche oder nicht erreichbare DNS-Server in den Netzwerkeinstellungen
- **Diagnose-Schritte:**
  1. `ipconfig /all` — prüfe, welche DNS-Server konfiguriert sind
  2. `ping <DNS-Server-IP>` — ist der DNS-Server erreichbar?
  3. `nslookup www.example.com 8.8.8.8` — funktioniert DNS mit alternativ-Server?
- **Lösung:**
  - DNS-Server in den Netzwerkeinstellungen (Systemsteuerung → Netzwerk → Adapter-Eigenschaften → IPv4) auf 8.8.8.8 und 8.8.4.4 (Google DNS) setzen
  - Falls im Unternehmensnetzwerk: Domänen-DNS-Server vom Administrator erfragen
  - `ipconfig /flushdns` ausführen
- **Prävention:** DNS-Server-Einstellungen bei jedem Netzwerkwechsel prüfen

---

### Fehler 2: Firewall blockiert legitimen Datenverkehr

- **Symptom:** Eine Anwendung (z. B. RDP, Drucker, Datenbank) kann nicht auf den Server zugreifen — die Firewall blockiert die Verbindung
- **Ursache:** Keine Firewall-Regel für den benötigten Port oder die Anwendung
- **Diagnose-Schritte:**
  1. `ping <Server-IP>` — funktioniert die IP-Ebene?
  2. `telnet <Server-IP> <Port>` oder `Test-NetConnection` — ist der Port erreichbar?
  3. Windows Defender Firewall → Erweiterte Einstellungen → Eingehende Regeln prüfen
  4. Prüfen, ob Block-Regel für den Port existiert
- **Lösung:**
  - Systemsteuerung → Windows Defender Firewall → App oder Feature durch Firewall zulassen → Anwendung hinzufügen
  - Oder: Erweiterte Einstellungen → Eingehende Regel → Neue Regel → Port → TCP/UDP + Portnummer → Verbindung zulassen
  - Im Unternehmensnetzwerk: Firewall-Regel vom Netzwerkadministrator anfordern
- **Prävention:** Firewall-Regeln dokumentieren und bei Neueinstellungen der Applications prüfen

---

### Fehler 3: VLAN-Fehlerkonfiguration

- **Symptom:** Gerät im Netzwerk ist mit dem Switch verbunden, erhält keine IP-Adresse oder kann nicht mit anderen Geräten kommunizieren
- **Ursache:** Switch-Port ist dem falschen VLAN zugeordnet (z. B. Port ist im VLAN 10, Gerät sollte im VLAN 20 sein)
- **Diagnose-Schritte:**
  1. Physikalische Verbindung prüfen (Link-LED am Switch-Port?)
  2. `ipconfig` — erhält das Gerät eine IP-Adresse? (169.254.x.x = APIPA = kein DHCP)
  3. Switch-Konfiguration prüfen: `show vlan brief` (Cisco IOS)
  4. Prüfen, ob der Port als Access-Port konfiguriert und dem richtigen VLAN zugeordnet ist
- **Lösung:**
  ```
  Switch(config)# interface f0/6
  Switch(config-if)# switchport mode access
  Switch(config-if)# switchport access vlan 20
  Switch(config-if)# end
  Switch# show vlan brief
  ```
- **Prävention:** VLAN-Konfiguration und Port-Zuordnungen dokumentieren

---

### Fehler 4: Veralteter DNS-Cache

- **Symptom:** Webseite wurde auf neue IP umgezogen, aber der PC zeigt weiterhin Fehler oder alte Seite
- **Ursache:** Der lokale DNS-Resolver-Cache enthält veralteten Eintrag
- **Diagnose-Schritte:**
  1. `ipconfig /displaydns` — suche nach dem Domain-Namen, prüfe die IP-Adresse
  2. Vergleiche mit der aktuellen IP (z. B. über `nslookup www.example.com 8.8.8.8`)
  3. Falls abweichend: Cache leeren
- **Lösung:**
  ```
  ipconfig /flushdns
  ```
  Danach den Browser-Cache leeren oder im Inkognito-Modus testen.
- **Prävention:** Nach DNS-Änderungen immer `ipconfig /flushdns` ausführen

---

## Mini-Quiz

**Frage 1:** Welcher Switch-Port-Modus wird verwendet, um einen Port einem einzelnen VLAN zuzuordnen?
- A) Trunk-Modus
- B) Access-Modus
- C) Hybrid-Modus
- D) Routing-Modus

**Antwort:** B — Access-Modus. Ein Transport-Port wird einem einzelnen VLAN zugeordnet und verbindet Endgeräte.

---

**Frage 2:** Welcher VPN-Typ wird typischerweise für die Verbindung einer Zweigstelle mit dem Hauptquartier verwendet?
- A) Remote-Access-VPN
- B) SSL-VPN
- C) Site-to-Site-VPN
- D) Client-VPN

**Antwort:** C — Site-to-Site-VPN. Es verbindet zwei Netzwerke permanent und transparent für Benutzer.

---

**Frage 3:** Welcher Befehl leert den DNS-Resolver-Cache in Windows?
- A) `ipconfig /release`
- B) `ipconfig /flushdns`
- C) `nslookup /clear`
- D) `ping /flush`

**Antwort:** B — `ipconfig /flushdns` entfernt alle zwischengespeicherten DNS-Einträge.

---

**Frage 4:** Sie können eine Webseite nicht über den Domain-Namen aufrufen, aber `ping 8.8.8.8` funktioniert. Was ist die wahrscheinlichste Ursache?
- A) Die Firewall blockiert den Browser
- B) Der DNS-Server ist falsch konfiguriert
- C) Der Switch ist defekt
- D) Das Kabel ist nicht eingesteckt

**Antwort:** B — Die IP-Verbindung funktioniert, die Namensauflösung schlägt fehl → DNS-Problem.

---

**Frage 5:** Welches Windows-Firewall-Profil ist für ein öffentliches Netzwerk (z. B. Café) vorgesehen?
- A) Domain
- B) Private
- C) Public
- D) Enterprise

**Antwort:** C — Public. Das Public-Profil gilt für nicht vertrauenswürdige Netzwerke und hat die strengsten Firewall-Regeln.

---

## Ticket-Szenario

**Situation:**

Ein Mitarbeiter im Homeoffice meldet sich: "Ich kann seit gestern auf keine unserer internen Server zugreifen. Ich VPN mich mit Cisco AnyConnect ein, aber wenn ich den Namen des Servers eingebe, kommt sofort 'Server nicht gefunden'. Unsere Webseite www.unternehmen.de im Browser geht auch nicht."

**Aufgabe:**

1. Was ist die Priorität dieses Tickets?
2. Welche Diagnose-Schritte führst du durch?
3. Welche Befehle verwendest du?
4. Wie dokumentierst du den Fall?

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**

P2 (Hoch) — Der Mitarbeiter kann nicht arbeiten, aber es betrifft nur eine Person. P1 wäre ein kompletter Ausfall.

**2. Diagnose-Schritte:**

1. VPN-Verbindung prüfen: Ist das AnyConnect-VPN verbunden? (Icon in der Taskleiste)
2. IP-Adresse prüfen: `ipconfig /all` — erhält das Gerät eine IP aus dem VPN-Subnetz?
3. Gateway prüfen: `ping <VPN-Gateway>`
4. DNS-Server prüfen: Sind die internen DNS-Server in `ipconfig /all` sichtbar?
5. Namensauflösung testen: `nslookup <Server-Name>` — funktioniert die DNS-Abfrage?
6. `ipconfig /flushdns` ausführen

**3. Mögliche Ursache und Lösung:**

- **Ursache:** Der DNS-Server wurde im VPN-Tunnel nicht korrekt übernommen oder der lokale DNS-Cache ist veraltet
- **Lösung 1:** `ipconfig /flushdns` ausführen
- **Lösung 2:** VPN trennen und neu verbinden
- **Lösung 3:** Falls das Problem weiterhin besteht: DNS-Server manuell in den VPN-Adapter-Einträgen prüfen
- **Lösung 4:** Alternat DNS-Server testen: `nslookup <Server> <interne-DNS-IP>`

**4. Dokumentation:**

| Feld | Eintrag |
|------|---------|
| Problem | Kein Zugriff auf interne Server und Webseite nach VPN-Verbindung |
| Ursache | DNS-Einträge im VPN-Adapter nicht aktualisiert / veralteter DNS-Cache |
| Lösung | `ipconfig /flushdns` und VPN neu verbunden |
| Verifizierung | `nslookup <Server>` zeigt korrekte IP; Server ist erreichbar |
| Prävention | VPN-Client automatische DNS-Übernahme konfigurieren |

</details>

---

## Quellen

- [CompTIA A+ 220-1101 — VLANs and VPNs (Professor Messer)](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/vlans-and-vpns-220-1101/) — abgerufen am 2026-10-19
- [Cisco NetAcad — Lab: Configure VLANs and Trunking](https://www.netacad.com/content/srwe/1.0/courses/content/m3/en-US/assets/3.4.6-lab---configure-vlans-and-trunking.pdf) — abgerufen am 2026-10-19
- [Microsoft Learn — Manage Windows Defender Firewall](https://learn.microsoft.com/en-us/training/modules/manage-defender-windows-client/5-manage-windows-defender-firewall) — abgerufen am 2026-10-19
- [Microsoft Learn — Troubleshooting DNS Clients](https://learn.microsoft.com/en-us/windows-server/networking/dns/troubleshoot/troubleshoot-dns-client) — abgerufen am 2026-10-19
- [AlphaPrep — CompTIA A+ Networking Tools](https://blog.alphaprep.net/comptia-a-core-1-networking-tools-how-to-choose-the-right-tool-for-the-right-scenario/) — abgerufen am 2026-10-19
