# Deployment-Vergleich: Hosting statischer Webseiten
*Überarbeitete Version 29.06.2025*

> **Hinweis:** Dieses Kapitel wurde nach Feedback überarbeitet, um Bewertung, Auswahl und Deployment nachvollziehbar und quellenbasiert darzustellen. Green Hosting wurde ergänzt.

---

## Ziel der Analyse

Ziel war es, für unsere statische Website **Taste Tales** eine geeignete Hosting-Plattform auszuwählen.  
Dabei sollte ein **fundierter Variantenvergleich** auf Basis nachvollziehbarer Kriterien und öffentlich dokumentierter Eigenschaften durchgeführt werden.  
Wir haben unsere ursprüngliche Auswahl reduziert und uns im finalen Vergleich auf **vier relevante Anbieter** beschränkt, die für den Einsatz in kleinen bis mittelgrossen Webprojekten geeignet sind.

---

## Voreingenommenheit

Da wir mit GitHub arbeiteten, war **GitHub Pages** anfangs unsere bevorzugte Lösung.  
Rückblickend müssen wir feststellen, dass wir uns **zu stark auf diese Option festgelegt** und die Hosting-Auswahl **nicht ausreichend objektiv** betrachtet haben.  
Diese Entscheidung wurde jedoch im Nachhinein kritisch überprüft, mit anderen Plattformen verglichen und im Folgenden **noch einmal sachlich dargestellt**.  
**Am bestehenden Deployment nehmen wir keine Änderungen mehr vor**, da es für unser Projekt technisch ausreichend ist und uns aktuell die Zeit fehlt, eine alternative Lösung umzusetzen.  
**Die hier durchgeführte Bewertung kann jedoch für zukünftige Projekte als Entscheidungsgrundlage herangezogen werden.**

---

## Vergleichstabelle mit Begründungen

| Anbieter             | Kosten | Einrichtung | Performance | Git-Integration | Green Hosting | Gesamt |
|----------------------|--------|-------------|-------------|------------------|----------------|--------|
| **GitHub Pages**     | 5 – dauerhaft kostenlos, keine Limits | 5 – direkt in GitHub integriert, kein Build nötig | 3 – solide, aber kein globales CDN für HTML-Inhalte | 5 – nativ mit GitHub verknüpft, auto-deploy | 1 – keine Angaben zur Nachhaltigkeit | **19** |
| **Netlify**          | 5 – kostenlos im Free Plan inkl. CI/CD | 4 – einfach, aber Build-Step erforderlich | 4 – globales CDN, gute Ladezeiten | 5 – automatische Deployments via GitHub/GitLab | 2 – keine klare Nachhaltigkeitsstrategie | **20** |
| **Cloudflare Pages** | 5 – kostenlos, keine Build-Zeit-Limits | 5 – extrem einfach via GitHub-Verknüpfung | 5 – globales Edge-Netzwerk (Performance bei statischen Seiten exzellent) | 5 – Push-to-deploy, Preview-Branches | 5 – nachweislich 100% erneuerbare Energie (zertifiziert) | **25** |
| **Vercel**           | 5 – kostenlos (Hobby-Plan), inkl. CI/CD | 5 – sehr intuitive Oberfläche, einfache Git-Verknüpfung | 5 – Edge Functions + globales CDN | 5 – GitHub/GitLab/Bitbucket auto-deploy | 4 – Nachhaltigkeit versprochen, aber nicht offiziell belegt | **24** |

---

### Legende:

- **Kosten (1–5):** Kostenlos nutzbar für kleine/mittlere Projekte?
- **Einrichtung (1–5):** Aufwand und Komplexität beim Setup?
- **Performance (1–5):** Geschwindigkeit dank CDN / Edge-Network?
- **Git-Integration (1–5):** Automatisches Deployment via Git möglich?
- **Green Hosting (1–5):** Nachhaltiger Betrieb nachgewiesen?

---

## Bewertung

- **GitHub Pages:** Schnell eingerichtet, GitHub-nativ, solide Performance, aber kein Green Hosting.
- **Netlify:** Gute Performance, komfortables UI, keine verlässliche Green-Hosting-Angabe.
- **Cloudflare Pages:** Beste Performance und Nachhaltigkeit (100% erneuerbar, belegt).
- **Vercel:** Sehr gute Dev-Experience, Performance, Git-Integration; Nachhaltigkeit intern bestätigt.

---

## Unsere Lösung

### ✅ Hauptdeployment: GitHub Pages

- Direkt in GitHub integriert
- Kein Build nötig, kostenlos
- Ideal für einfache HTML/CSS-Projekte

**Deployment-Schritte:**
1. GitHub-Repo → Settings → Pages
2. Branch + Ordner wählen
3. Veröffentlicht unter: `https://<user>.github.io/<repo>/`

> **Hinweis:** Zum Zeitpunkt der Umsetzung war GitHub Pages die pragmatische Wahl aufgrund bestehender Infrastruktur und Zeitrahmen.  
> **Rückblickend – basierend auf dieser Analyse – wäre Cloudflare Pages die bessere Hauptlösung gewesen**, insbesondere aufgrund der besseren Performance und der vollständig nachhaltigen Infrastruktur.

---

### 🌱 Zweitdeployment: Cloudflare Pages

- Nachhaltiger durch 100% erneuerbare Energie (Cloudflare Report)
- Sehr schnelle Ladezeiten dank globalem CDN

**Deployment-Schritte:**
1. Cloudflare-Account + GitHub-Verknüpfung
2. Kein Build nötig
3. Veröffentlicht unter: `*.pages.dev`

**Ergebnis:** Höherer Score bei [Ecograder](https://ecograder.com) bzgl. Nachhaltigkeit und Ladezeit

📸 Screenshot der Analyse:
-
![Ecograder Cloudflare Screenshot](./assets/img/ecograder-cloudflare.png)

---

## Quellen

- [GitHub Pages](https://docs.github.com/en/pages)
- [Netlify](https://docs.netlify.com)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)
- [Cloudflare Sustainability](https://www.cloudflare.com/sustainability)
- [Vercel](https://vercel.com/docs)
- [Vercel Green Hosting](https://vercel.com/docs/concepts/edge-network/green-hosting)
- [Ecograder](https://ecograder.com)


> Hinweis: Dieser Text wurde unter Zuhilfenahme von OpenAI ChatGPT (GPT-4, Juni 2025) erstellt.  
> Die Aussagen basieren auf offiziellen Dokumentationen und technischen Quellen, die im Quellenverzeichnis aufgeführt sind.