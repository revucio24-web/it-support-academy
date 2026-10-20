---
title: "Modul 5: Netzwerk-Basics — IP, DHCP, DNS, WLAN, ipconfig/ping/tracert"
level: 1
module: 5
last_verified: 2026-10-19
windows_version: "Windows 11 23H2"
sources:
  - url: "https://www.scribd.com/document/943128131/Comptia-a-Plus-220-1101-Exam-Objectives-1-1"
    abrufdatum: 2026-10-19
  - url: "https://www.oreilly.com/library/view/comptia-a-core/9780137637775/ch10.xhtml"
    abrufdatum: 2026-10-19
  - url: "https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/"
    abrufdatum: 2026-10-19
  - url: "https://www.netacad.az/en/networking-basics/"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/training/modules/troubleshoot-premises-hybrid-networking/4-diagnose-ip-configuration-issues"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/trace-route-troubleshoot-tcp-ip-problems"
    abrufdatum: 2026-10-19
  - url: "https://learn.microsoft.com/en-us/windows-server/networking/dns/troubleshoot/troubleshoot-dns-client"
    abrufdatum: 2026-10-19
---

## Lernziele

1. Du verstehst die Struktur von IPv4- und IPv6-Adressen und kannst Subnetzmasken erklären
2. Du kennst den DHCP-Prozess (DORA) und weißt, was eine APIPA-Adresse bedeutet
3. Du verstehst die Funktion von DNS und kannst wichtige Datensatztypen (A, AAAA, MX, TXT) zuordnen
4. Du kennst aktuelle WLAN-Standards (802.11ax/Wi-Fi 6) und Sicherheitsprotokolle (WPA2/WPA3)
5. Du beherrschst die Windows-Diagnose-Befehle ipconfig, ping und tracert und kannst sie gezielt zur Fehleranalyse einsetzen

---

## Theorie

### 1. IP-Adressen — IPv4 und IPv6

**IPv4** ist das am weitesten verbreitete Adressformat. Es besteht aus 32 Bit, geschrieben als vier Oktette (z. B. `192.168.1.100`).

| Begriff | Beschreibung | Beispiel |
|---------|--------------|----------|
| IPv4-Adresse | 32-Bit-Adresse, gepunktete Dezimalschreibweise | 192.168.1.100 |
| Subnetzmaske | Trennt Netzwerk- und Hostteil | 255.255.255.0 (/24) |
| Gateway | Router-Adresse für fremde Netze | 192.168.1.1 |
| DNS-Server | Namensauflösung | 8.8.8.8 |

**Private vs. öffentliche IPv4-Adressen:**

| Bereich | Verwendung | Beispiel |
|---------|------------|----------|
| 10.0.0.0/8 | Private Netze (Klasse A) | 10.0.0.1 – 10.255.255.254 |
| 172.16.0.0/12 | Private Netze (Klasse B) | 172.16.0.1 – 172.31.255.254 |
| 192.168.0.0/16 | Private Netze (Klasse C) | 192.168.0.1 – 192.168.255.254 |
| 169.254.0.0/16 | APIPA (automatisch bei DHCP-Fehler) | 169.254.x.x |

**IPv6** ist das 128-Bit-Nachfolgeschreiben. Schreibweise: vier Hexadezimalgruppen, Doppelpunkt als Trenner, z. B. `fe80::1`. Wichtige Präfixe:
- `fe80::/10` — Link-lokal (automatisch)
- `2001:db8::/32` — Dokumentation
- `fd00::/8` — Unique-lokal (privat)

**Statisch vs. Dynamisch:**
- **Statisch:** IP-Adresse manuell konfiguriert (Server, Drucker, Netzwerkgeräte)
- **Dynamisch:** IP-Adresse automatisch vom DHCP-Server zugewiesen (Standard für Clients)

*Quelle: CompTIA A+ 220-1101 Exam Objectives, Abschnitt 2.5 — IP addressing (Scribd); Cisco Networking Basics, Kapitel 9–10.*

### 2. DHCP — Dynamic Host Configuration Protocol

DHCP automatisiert die Vergabe von IP-Adressen, Subnetzmasken, Gateways und DNS-Servern. Der Prozess wird als **DORA** bezeichnet:

| Schritt | Beschreibung |
|---------|--------------|
| **D**iscover | Client sendet DHCPDISCOVER (Broadcast) |
| **O**ffer | Server antwortet mit DHCPOFFER (IP-Adresse im Angebot) |
| **R**equest | Client sendet DHCPREQUEST (Broadcast, bestätigt Angebot) |
| **A**ck | Server sendet DHCPACK (bestätigt Vergabe, inkl. Lease-Zeit) |

**Wichtige DHCP-Begriffe:**
- **Bereich (Scope):** Bereich der IP-Adressen, die der Server vergeben darf
- **Ausschluss (Exclusion):** Adressen, die nicht vergeben werden (z. B. statische Server)
- **Reservierung (Reservation):** Feste MAC-Adresse → feste IP-Adresse
- **Lease (Lease):** Zeitraum, für den eine IP-Adresse vergeben wird (Standard: 8 Tage)

**APIPA (Automatic Private IP Addressing):** Wenn kein DHCP-Server erreichbar ist, vergibt sich Windows automatisch eine Adresse im Bereich `169.254.0.1` bis `169.254.255.254` mit Subnetzmaske `255.255.0.0`. Diese Adresse funktioniert nur im lokalen Netz und signalisiert ein DHCP-Problem.

*Quelle: CompTIA A+ 220-1101 Exam Cram, Kapitel 9–10 (O'Reilly); Cisco Networking Basics, Kapitel 11 — Dynamic Addressing with DHCP.*

### 3. DNS — Domain Name System

DNS übersetzt Domainnamen (z. B. `www.example.com`) in IP-Adressen und umgekehrt. Es ist ein hierarchisches, verteiltes System.

**DNS-Abfrage-Prozess:**
1. Client prüft lokalen DNS-Cache (`ipconfig /displaydns`)
2. Client fragt den konfigurierten DNS-Server
3. DNS-Server prüft seinen Cache
4. Nicht gefunden → rekursive Abfrage an Root-Server → TLD-Server → authoritative Server

**Wichtige DNS-Datensätze:**

| Typ | Funktion | Beispiel |
|-----|----------|----------|
| **A** | Domain → IPv4-Adresse | example.com → 93.184.216.34 |
| **AAAA** | Domain → IPv6-Adresse | example.com → 2606:2800:220:1:248:1893:25c8:1946 |
| **MX** | Mail-Server-Zuweisung | example.com → mail.example.com |
| **TXT** | Textinformationen (SPF, DKIM, DMARC) | v=spf1 include:_spf.example.com ~all |
| **PTR** | Reverse-Lookup (IP → Domain) | 34.216.184.93.in-addr.arpa → example.com |
| **CNAME** | Alias-Domain | www.example.com → example.com |

**DNS-Troubleshooting auf Windows-Clients:**
- `ipconfig /all` — konfigurierte DNS-Server prüfen
- `nslookup <domain>` — DNS-Abfrage manuell testen
- `ipconfig /flushdns` — DNS-Cache leeren (bei veralteten Einträgen)
- `ipconfig /displaydns` — DNS-Cache anzeigen

*Quelle: CompTIA A+ 220-1101 Exam Cram, Kapitel 10 (O'Reilly); Microsoft Learn — Troubleshooting DNS clients.*

### 4. WLAN — Wireless LAN

WLAN ermöglicht die kabellose Verbindung von Geräten über Funk. Die wichtigsten Standards:

| Standard | Name | Frequenz | Max. Datenrate (theoretisch) |
|----------|------|----------|------------------------------|
| 802.11a | Wi-Fi (alt) | 5 GHz | 54 Mbit/s |
| 802.11g | Wi-Fi (alt) | 2,4 GHz | 54 Mbit/s |
| 802.11n | Wi-Fi 4 | 2,4 / 5 GHz | 600 Mbit/s |
| 802.11ac | Wi-Fi 5 | 5 GHz | 6,93 Gbit/s |
| 802.11ax | Wi-Fi 6 / 6E | 2,4 / 5 / 6 GHz | 9,6 Gbit/s |

**WLAN-Sicherheitsprotokolle:**

| Protokoll | Verschlüsselung | Status |
|-----------|-----------------|--------|
| WEP | RC4 (64/128 Bit) | Veraltet, unsicher |
| WPA | TKIP | Veraltet |
| WPA2 | AES-CCMP | Aktueller Standard |
| WPA3 | AES-GCM (192 Bit) | Neueste Generation |

**WLAN-Konfiguration (Windows 11):**
- Einstellungen → Netzwerk & Internet → WLAN
- `netsh wlan show wlanreport` — erstellt einen HTML-Diagnosebericht
-SSID (Service Set Identifier) ist der sichtbare Netzwerkname

**Typische WLAN-Probleme:**
- Schwaches Signal: Abstand zum Access Point, Wände, Interferenz
- Falsche Frequenzband: 2,4 GHz (Reichweite, Störungen) vs. 5 GHz (Geschwindigkeit)
- Veralteter Treiber: WLAN-Treiber im Geräte-Manager aktualisieren

*Quelle: CompTIA A+ 220-1101 Exam Objectives, Abschnitt 2.3 — protocols for wireless networking (Scribd); Cisco Networking Basics, Kapitel 3.*

### 5. Windows-Netzwerkdiagnose: ipconfig, ping, tracert

Diese drei Befehle sind die Grundwerkzeuge der Netzwerkfehleranalyse. Sie werden in der Eingabeaufforderung (cmd) oder PowerShell ausgeführt.

#### ipconfig — IP-Konfiguration anzeigen

| Befehl | Funktion |
|--------|----------|
| `ipconfig` | IP-Adresse, Subnetzmaske, Gateway (alle Adapter) |
| `ipconfig /all` | Vollständige Konfiguration inkl. MAC, DHCP, DNS, Lease |
| `ipconfig /release` | DHCP-Lease aufgeben (IP-Adresse verlieren) |
| `ipconfig /renew` | Neuen DHCP-Lease anfordern |
| `ipconfig /flushdns` | DNS-Cache leeren |
| `ipconfig /displaydns` | DNS-Cache anzeigen |

**Wichtige Ausgabefelder bei `ipconfig /all`:**
- `IPv4 Address` — zugewiesene IP-Adresse
- `Subnet Mask` — Subnetzmaske
- `Default Gateway` — Router
- `DHCP Enabled` — Ja/Nein
- `DHCP Server` — IP des DHCP-Servers
- `DNS Servers` — konfigurierte DNS-Server
- `Lease Obtained / Lease Expires` — Lease-Zeitraum

#### ping — Erreichbarkeit testen

Ping sendet ICMP-Echo-Requests und wartet auf Antworten.

| Befehl | Funktion |
|--------|----------|
| `ping 192.168.1.1` | Gateway testen |
| `ping 8.8.8.8` | Öffentliche IP testen (Internet-Erreichbarkeit) |
| `ping www.example.com` | DNS-Auflösung + Erreichbarkeit testen |
| `ping -t` | Kontinuierliches pingen (beenden mit Strg+C) |
| `ping -n 10` | 10 Ping-Pakete senden |
| `ping -l 1500` | Paketgröße auf 1500 Byte setzen |

**Ping-Auswertung:**
- `Reply from ...` — Ziel erreichbar, Zeit in ms
- `Request timed out` — Ziel nicht erreichbar (Firewall, Routing, Ausfall)
- `Destination host unreachable` — Kein Route zum Ziel (Netzwerkproblem)

**Wichtig:** Ping funktioniert nur, wenn ICMP nicht durch Firewall blockiert wird.

#### tracert — Routenverfolgung (Trace Route)

Tracert zeigt jeden Hop (Router) auf dem Weg zum Ziel und die Latenzzeit.

| Befehl | Funktion |
|--------|----------|
| `tracert www.example.com` | Route zu Domain verfolgen |
| `tracert -d www.example.com` | DNS-Lookup deaktivieren (schneller) |
| `tracert -h 15 www.example.com` | Maximal 15 Hops |

**Tracert-Auswertung:**
- `* * *` an einer Stelle → Paket verloren (Firewall, Router-Blockade, Ausfall)
- Hohe Latenz an einem Hop → Engpass oder überlasteter Router
- Tracert stoppt früh → Problem im lokalen Netz oder beim ISP

**Systematische Vorgehensweise (Bottom-up):**
1. `ipconfig /all` — eigene Konfiguration prüfen
2. `ping 127.0.0.1` — lokaler TCP/IP-Stack
3. `ping <Gateway>` — lokales Netzwerk
4. `ping <DNS-Server>` — DNS-Erreichbarkeit
5. `ping 8.8.8.8` — Internet-Erreichbarkeit (IP-Ebene)
6. `ping www.example.com` — DNS + Internet
7. `tracert www.example.com` — bei IP-Problemen: wo bricht die Verbindung ab?

*Quelle: Microsoft Learn — Diagnose IP configuration issues; Microsoft Learn — Use TRACERT to Troubleshoot TCP/IP Problems; CompTIA A+ CramSheet.*

---

## Praxis-Übung im Homelab

### Übung: Netzwerk-Diagnose mit ipconfig, ping und tracert

**Vorbereitung:**
- Windows 11 PC (oder VM) mit Netzwerkverbindung
- Eingabeaufforderung (cmd) oder PowerShell öffnen

**Aufgabe 1: Eigene IP-Konfiguration dokumentieren**
1. Führe `ipconfig /all` aus
2. Notiere: IPv4-Adresse, Subnetzmaske, Gateway, DHCP-Server, DNS-Server, MAC-Adresse
3. Prüfe: Ist die IP-Adresse im privaten Bereich? Wurde DHCP verwendet?

**Aufgabe 2: DHCP-Lease erneuern**
1. `ipconfig /release` — Lease aufgeben (Internetverbindung geht verloren)
2. `ipconfig /renew` — Neuen Lease anfordern
3. Vergleiche die IP-Adresse vorher/nachher

**Aufgabe 3: DNS-Cache analysieren**
1. `ipconfig /displaydns` — Cache-Einträge anzeigen
2. `ipconfig /flushdns` — Cache leeren
3. `ping www.example.com` — Domain auflösen
4. `ipconfig /displaydns` — neuen Eintrag prüfen

**Aufgabe 4: Erreichbarkeit testen (Bottom-up)**
1. `ping 127.0.0.1` — lokaler Stack
2. `ping <dein-Gateway>` — Router
3. `ping 8.8.8.8` — Google DNS (Internet)
4. `ping www.example.com` — DNS-Auflösung
5. `tracert www.example.com` — Route analysieren

**Erwartetes Ergebnis:**

| Schritt | Befehl | Erwartetes Ergebnis |
|---------|--------|---------------------|
| 1 | `ipconfig /all` | IP, Gateway, DNS sichtbar |
| 2 | `ipconfig /release && ipconfig /renew` | Neue IP wird zugewiesen |
| 3 | `ipconfig /flushdns` | Cache wird geleert |
| 4a | `ping 127.0.0.1` | 0 ms, 0% Verlust |
| 4b | `ping <Gateway` | <1 ms, 0% Verlust |
| 4c | `ping 8.8.8.8` | ~20–50 ms, 0% Verlust |
| 4d | `ping www.example.com` | Erfolgreiche DNS-Auflösung |
| 4e | `tracert www.example.com` | 5–15 Hops sichtbar |

---

## Berühmte Fehler + Lösungen

### Fehler 1: APIPA-Adresse (169.254.x.x) — DHCP-Server nicht erreichbar

- **Symptom:** `ipconfig` zeigt `169.254.x.x`, kein Internetzugang
- **Ursache:** DHCP-Server nicht erreichbar (Router aus, Kabel DHCP deaktiviert, Client falsch konfiguriert)
- **Diagnose-Schritte:**
  1. `ipconfig /all` — prüfen, ob `DHCP Enabled: Yes` ist
  2. `ping <Gateway>` — Router erreichbar?
  3. `ipconfig /release` und `ipconfig /renew` — Lease neu anfordern
  4. Router-Log prüfen (DHCP aktiviert? IP-Bereich verfügbar?)
- **Lösung:**
  - DHCP am Router aktivieren
  - `ipconfig /renew` ausführen
  - Bei statischer Konfiguration: manuell gültige IP, Gateway, DNS eintragen
- **Prävention:** DHCP-Server-Verfügbarkeit überwachen; statische IPs für kritische Geräte mit Reservierung

---

### Fehler 2: Ping funktioniert, aber Browser zeigt "Keine Verbindung"

- **Symptom:** `ping 8.8.8.8` funktioniert, aber Webseiten laden nicht
- **Ursache:** DNS-Auflösung fehlgeschlagen, Proxy falsch konfiguriert, oder Blockade auf Anwendungsebene
- **Diagnose-Schritte:**
  1. `ping www.example.com` — funktioniert DNS?
  2. `nslookup www.example.com` — manuelle DNS-Abfrage testen
  3. `ipconfig /all` — DNS-Server korrekt?
  4. `ipconfig /flushdns` — Cache leeren
  5. `netsh winhttp show proxy` — Proxy-Einstellung prüfen
- **Lösung:**
  - DNS-Server manuell setzen (z. B. 8.8.8.8 / 1.1.1.1)
  - `ipconfig /flushdns` ausführen
  - Proxy-Einstellungen in Windows zurücksetzen
- **Prävention:** DNS-Server-Redundanz (primär + sekundär), regelmäßige Cache-Pflege

---

### Fehler 3: Ping schlägt fehl, obwohl Verbunden-Anzeige

- **Symptom:** WLAN zeigt "Verbunden", aber `ping <Gateway>` schlägt fehl
- **Ursache:** Falsche Subnetzmaske/Gateway, IP-Konflikt, oder Adapter deaktiviert
- **Diagnose-Schritte:**
  1. `ipconfig /all` — IP, Subnetzmaske, Gateway prüfen
  2. `ping <eigene IP>` — Adapter funktioniert?
  3. `arp -a` — MAC-Adresse des Gateways sichtbar?
  4. `netsh interface show interface` — Adapter-Status
- **Lösung:**
  - Adapter deaktivieren/aktivieren
  - `netsh int ip reset` und `netsh winsock reset` (als Admin)
  - IP-Konflikt: `ipconfig /release` → Router-Neustart → `ipconfig /renew`
- **Prävention:** Reservierungen für statische Geräte, IP-Adressmanagement dokumentieren

---

### Fehler 4: tracert stoppt früh — Router blockiert ICMP

- **Symptom:** `tracert` zeigt nur 1–2 Hops, dann `* * *`, Ziel ist aber erreichbar
- **Ursache:** Zwischen-Router blockiert ICMP (häufig aus Sicherheitsgründen), oder Firewall
- **Diagnose-Schritte:**
  1. `ping <Ziel>` — ist das Ziel per Ping erreichbar?
  2. `tracert -d` — ohne DNS-Lookup erneut versuchen
  3. Vergleich: anderes Gerät im selben Netzwerk
  4. `pathping <Ziel>` — alternative Tool (kombiniert ping + tracert)
- **Lösung:**
  - Nicht als Fehler werten, wenn Ping und Anwendung funktionieren
  - `pathping` verwenden für detailliertere Analyse
  - Port-basierte Tests (z. B. `telnet <host> 80`) als Alternative
- **Prävention:** ICMP-Blockade ist legitime Sicherheitsmaßnahme; auf Alternativen zurückgreifen

---

## Mini-Quiz

**Frage 1:** Was bedeutet es, wenn `ipconfig` die IP-Adresse `169.254.10.50` anzeigt?
- A) Der DHCP-Server hat diese Adresse vergeben
- B) Windows hat eine APIPA-Adresse vergeben, weil kein DHCP-Server erreichbar war
- C) Der Computer hat eine statische IP erhalten
- D) Die Subnetzmaske ist falsch konfiguriert

**Antwort:** B — APIPA (Automatic Private IP Addressing) im Bereich 169.254.0.0/16 zeigt einen DHCP-Fehler an.

---

**Frage 2:** Welcher DNS-Datensatztyp wird verwendet, um eine Domain einer IPv4-Adresse zuzuordnen?
- A) AAAA
- B) MX
- C) A
- D) TXT

**Antwort:** C — der A-Record (Address) mappt eine Domain auf eine IPv4-Adresse.

---

**Frage 3:** Ein Benutzer meldet: "Mein WLAN zeigt 'Verbunden', aber ich kann keine Webseiten öffnen. `ping 8.8.8.8` funktioniert." Was ist die wahrscheinlichste Ursache?
- A) Defektes WLAN-Kabel
- B) DNS-Auflösung fehlgeschlagen
- C) Der WLAN-Treiber ist veraltet
- D) Der Router hat keinen Strom

**Antwort:** B — Ping auf IP-Ebene funktioniert, aber Domain-Auflösung schlägt fehl → DNS-Problem.

---

**Frage 4:** Welcher Befehl zeigt die aktuelle TCP/IP-Konfiguration samt MAC-Adresse und DHCP-Server an?
- A) `ping /all`
- B) `tracert /all`
- C) `ipconfig /all`
- D) `netstat /all`

**Antwort:** C — `ipconfig /all` zeigt die vollständige Konfiguration aller Netzwerkadapter.

---

**Frage 5:** Was zeigt der Befehl `tracert`?
- A) Die IP-Adresse des lokalen Computers
- B) Den Weg (Hops/Router) zu einem Ziel und die Latenzzeit
- C) Den Inhalt des DNS-Caches
- D) Die physische Netzwerktopologie

**Antwort:** B — tracert (Trace Route) zeigt jeden Router auf dem Weg zum Ziel.

---

## Ticket-Szenario

**Situation:**
Ein Mitarbeiter aus dem Marketing meldet sich: "Seit dem Umzug in den neuen Raum habe ich kein Internet mehr. Das WLAN zeigt 'Verbunden', aber alle Webseiten zeigen 'Keine Verbindung zum Internet'. Meine Kollegen im selben Raum haben kein Problem."

**Aufgabe:**
1. Was ist die Priorität dieses Tickets?
2. Wie gehst du bei der Diagnose vor? (Nutze die Bottom-up-Methode)
3. Was ist die wahrscheinlichste Ursache und wie löst du sie?
4. Dokumentiere den Fall für die Wissensdatenbank.

**Lösung:** (aufklappbar)

<details>
<summary>Lösung anzeigen</summary>

**1. Priorität:**
P2 (Hoch) — Einzelner Benutzer betroffen, aber vollständiger Verlust des Internetzugangs.

**2. Diagnose (Bottom-up):**
1. `ipconfig /all` — prüfen: IP-Adresse, Subnetzmaske, Gateway, DNS-Server
2. `ping 127.0.0.1` — lokaler TCP/IP-Stack
3. `ping <Gateway>` — Router erreichbar?
4. `ping 8.8.8.8` — Internet per IP erreichbar?
5. `ping www.example.com` — DNS-Auflösung?
6. `tracert 8.8.8.8` — wo bricht die Verbindung ab?

**3. Wahrscheinliche Ursache & Lösung:**
- **Ursache:** Der PC hat eine APIPA-Adresse (169.254.x.x) erhalten, weil der DHCP-Server im neuen Raum nicht erreichbar ist — z. B. weil der Patch-Port im neuen Raum nicht mit dem Switch verbunden ist oder ein anderer DHCP-Bereich gilt.
- **Lösung:**
  1. `ipconfig /release` und `ipconfig /renew` — versucht, eine gültige IP zu erhalten
  2. Falls weiterhin APIPA: Netzwerkverbindung des Workspace prüfen (Patch-Kabel, Switch-Port)
  3. Falls Switch-Port aktiv: IP manuell konfigurieren (IP aus richtigem Bereich, Gateway, DNS)
  4. Nach Behebung: `ipconfig /all` dokumentieren
- **Alternative:** Falls Kollegen im selben Raum funktionieren → defektes WLAN-Modul im PC oder Treiber-Problem → `netsh wlan show wlanreport` erstellen und analysieren

**4. Dokumentation:**
- Problem: WLAN verbunden, kein Internet nach Raumumzug
- Ursache: DHCP-Server nicht erreichbar → APIPA-Adresse
- Diagnose: ipconfig /all → 169.254.x.x → Switch-Port geprüft → Patch-Kabel neu gesteckt
- Lösung: ipconfig /renew → gültige IP erhalten → Internetzugang wiederhergestellt
- Verifizierung: ping 8.8.8.8 → Erfolg; Browser → Webseite lädt

</details>

---

## Quellen

- [CompTIA A+ 220-1101 Exam Objectives (Scribd)](https://www.scribd.com/document/943128131/Comptia-a-Plus-220-1101-Exam-Objectives-1-1) — abgerufen am 2026-10-19
- [CompTIA A+ Core 1 Exam Cram — Kapitel 9–10: SOHO Network & Network Configuration Concepts (O'Reilly)](https://www.oreilly.com/library/view/comptia-a-core/9780137637775/ch10.xhtml) — abgerufen am 2026-10-19
- [Professor Messer's CompTIA 220-1101 Training Course](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) — abgerufen am 2026-10-19
- [Cisco Networking Basics (NetAcad)](https://www.netacad.az/en/networking-basics/) — abgerufen am 2026-10-19
- [Microsoft Learn — Diagnose IP configuration issues](https://learn.microsoft.com/en-us/training/modules/troubleshoot-premises-hybrid-networking/4-diagnose-ip-configuration-issues) — abgerufen am 2026-10-19
- [Microsoft Learn — Use TRACERT to Troubleshoot TCP/IP Problems](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/trace-route-troubleshoot-tcp-ip-problems) — abgerufen am 2026-10-19
- [Microsoft Learn — Troubleshooting DNS clients](https://learn.microsoft.com/en-us/windows-server/networking/dns/troubleshoot/troubleshoot-dns-client) — abgerufen am 2026-10-19
