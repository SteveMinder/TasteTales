# SSG-Vergleich: Auswahl eines Static Site Generators für das Projekt
*Überarbeitete Version 29.06.2025*

> **Hinweis:** Dieses Kapitel wurde nach Rückmeldung überarbeitet. Ziel war es, die Bewertungskriterien klarer zu definieren, nachvollziehbar zu begründen und die Funktionsweise des gewählten SSG präziser darzustellen.

---

## Ziel der Analyse

Für unser statisches Webprojekt **Taste Tales** wurde ein geeigneter **Static Site Generator (SSG)** gesucht.  
Im Fokus standen dabei:

- **Einrichtungsaufwand**
- **Markdown-Verarbeitung**
- **Gestaltungsfreiheit (Build-Kontrolle)**
- **Kompatibilität mit Git und statischem Hosting (z.B. GitHub Pages)**

Ziel war ein **objektiver, nachvollziehbarer Vergleich** praxisnaher Generatoren, um eine fundierte Auswahl für unser Projekt zu treffen.

---

## Vergleichstabelle mit Bewertung (1–5 Punkte)

| Generator         | Sprache   | Einrichtung | Markdown-Support | Build-Kontrolle | GitHub Pages | Gesamt |
|------------------|-----------|-------------|------------------|------------------|---------------|--------|
| **Eleventy**     | JS        | 5 – sofort lauffähig, kein Build-System nötig | 5 – direkte Verarbeitung von `.md` | 4 – Templates, Permalinks, Filter möglich | ✅ nativ nutzbar | **19** |
| **Jekyll**       | Ruby      | 3 – Ruby-Setup nötig, CLI-Tools erforderlich | 5 – sehr guter `.md`-Support inkl. Frontmatter | 2 – stark vorgegebene Struktur | ✅ native Integration bei GitHub | **15** |
| **Hugo**         | Go        | 4 – einfache Binaries, schneller Build | 4 – gute `.md`-Verarbeitung, aber spezielles Frontmatter | 4 – hohe Kontrolle über Layouts & Strukturen | ✅ gut integrierbar | **17** |
| **Astro**        | JS/TS     | 2 – Setup mit Node + Config, komplexer Einstieg | 5 – exzellenter Markdown- und MDX-Support | 5 – hohe Kontrolle über Rendering & Komponenten | ✅ ja, mit Build-Output | **19** |
| **Next.js (SSG)**| JS/React  | 2 – React-Kenntnisse vorausgesetzt, komplexe Struktur | 3 – Markdown nur über Plugins (z. B. `remark`) | 5 – volle Kontrolle via API/FS | ⚠️ nicht optimal für GitHub Pages | **17** |

---

### Bewertungskriterien

- **Einrichtung:** Aufwand für Start und erste Ausgabe (1 = komplex, 5 = sofort einsatzbereit)
- **Markdown-Support:** Verarbeitung von `.md`-Dateien ohne zusätzliche Plugins
- **Build-Kontrolle:** Einfluss auf Seitenstruktur, Layout, Output-Konventionen
- **GitHub Pages:** Direkte Nutzbarkeit ohne zusätzlichen Build-Server

---

## Entscheidung: **Eleventy (11ty)**

Wir haben uns für **Eleventy** entschieden, weil es:

- ohne Frameworks oder Build-Systeme auskommt,
- Markdown-Dateien direkt verarbeitet (ohne Plugins),
- flexible Templates via Nunjucks, Liquid oder HTML unterstützt,
- gut mit GitHub Pages kompatibel ist (Output in `/docs`),
- und sehr schnell produktiv einsetzbar ist (keine Abhängigkeiten ausser Node.js).

**Rückblickend bietet Eleventy die beste Kombination aus Einfachheit, Flexibilität und GitHub-Kompatibilität** für ein kleines, inhaltlich strukturiertes Webprojekt.

---

## Projektumsetzung mit Eleventy

Für unser Projekt *Taste Tales* verwenden wir Markdown-Dateien zur Repräsentation einzelner Rezepte.  
Eleventy liest diese Dateien, wendet Templates an (z.B. `layout.njk`) und generiert HTML-Seiten, die barrierefrei und responsiv gestaltet sind.

Alle Ausgaben werden automatisiert in den Ordner `/docs` geschrieben, wodurch ein reibungsloses Deployment auf **GitHub Pages** möglich ist – ganz ohne zusätzliche Konfiguration.

---

## Reflexion

Das initiale Setup mit Eleventy verlief reibungslos. Wir konnten alle Anforderungen ohne Workarounds umsetzen.  
Die einfache Verzeichnisstruktur und Markdown-Verarbeitung machten den Generator besonders gut geeignet für unser Rezeptformat.

Der klare Aufbau, die Kontrolle über URL-Strukturen und die einfache Integration mit GitHub Pages waren entscheidende Faktoren.

---

## Quellenverzeichnis

- [Eleventy Docs](https://www.11ty.dev/docs/)
- [Jekyll](https://jekyllrb.com/docs/)
- [Hugo](https://gohugo.io/documentation/)
- [Astro](https://docs.astro.build)
- [Next.js](https://nextjs.org/docs)

> Hinweis: Dieser Text wurde unter Zuhilfenahme von OpenAI ChatGPT (GPT-4, Juni 2025) erstellt.  
> Die Aussagen basieren auf offiziellen Dokumentationen und technischen Quellen, die im Quellenverzeichnis aufgeführt sind.