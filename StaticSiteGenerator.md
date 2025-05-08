# SSG-Vergleich: Auswahl eines Static Site Generators für das Projekt

## Ziel der Analyse
Verglichen werden gängige Static Site Generatoren hinsichtlich:
- Einstiegshürde & Einrichtung
- Flexibilität beim Aufbau von Websites
- Integration von Markdown-Dateien
- Kompatibilität mit Git-Workflows und statischem Hosting (z. B. GitHub Pages)

Die Analyse dient der Auswahl eines geeigneten Generators für unser statisches Webprojekt *Taste Tales*.

---

## Generatoren im Vergleich

| Generator         | Sprache     | Einstieg       | Markdown-Support | Build-Kontrolle | Geeignet für GitHub Pages |
|------------------|-------------|----------------|------------------|-----------------|----------------------------|
| **Eleventy**     | JavaScript  | Sehr einfach   | ✅ Vollständig    | Hoch            | ✅ Ja                      |
| **Jekyll**        | Ruby        | Mittel         | ✅ Sehr gut       | Gering          | ✅ Ja (nativ bei GitHub)   |
| **Hugo**          | Go          | Mittel         | ✅ Gut            | Hoch            | ✅ Ja                      |
| **Astro**         | JS/TS       | Anspruchsvoll  | ✅ Sehr gut       | Sehr hoch       | ✅ Ja                      |
| **Next.js (SSG)** | JS/React    | Hoch           | ⚠️ Umständlich    | Sehr hoch       | ⚠️ Teilweise               |

---

## Empfehlung

Wir haben uns für **Eleventy (11ty)** entschieden, weil:

- es keine Build-Tools oder komplexe Frameworks erfordert,
- es **Markdown-Dateien direkt verarbeitet**,
- es sehr einfach mit **HTML-Templates, Nunjucks oder Liquid** kombiniert werden kann,
- es auf **Node.js basiert**, das in unserem Projektumfeld ohnehin genutzt wird,
- es **leicht konfigurierbar ist** (z. B. Verzeichnisstruktur, Permalinks),
- und es sich hervorragend mit **GitHub Pages** für statisches Hosting kombinieren lässt.

---

## Projektbezug

Das Projekt *Taste Tales* verwendet strukturierte Inhaltsdateien im Markdown-Format für Rezepte. Mit Eleventy können diese Inhalte automatisch in saubere HTML-Seiten umgewandelt werden. Durch eigene Layouts (z. B. `recipe.njk`) können Design und Struktur zentral gepflegt werden.

Eleventy bietet uns genau die richtige Balance zwischen **technischer Kontrolle**, **Einfachheit** und **Flexibilität**, um ein barrierefreies, responsives und wartbares Webprojekt umzusetzen.

---

## Quellenverzeichnis

- Eleventy Docs: https://www.11ty.dev/docs/ (Zugriff: 05.05.2025)
- Jekyll: https://jekyllrb.com/docs/ (Zugriff: 05.05.2025)
- Hugo: https://gohugo.io/documentation/ (Zugriff: 05.05.2025)
- Astro: https://docs.astro.build (Zugriff: 05.05.2025)
- Next.js: https://nextjs.org/docs (Zugriff: 05.05.2025)

> Hinweis: Dieser Text wurde unter Zuhilfenahme von OpenAI ChatGPT (GPT-4, Mai 2025) erstellt.  
> Die Aussagen basieren auf offiziellen Dokumentationen und technischen Quellen, die im Quellenverzeichnis aufgeführt sind.