# KAVICS — kavicsmedia.hu

## Projekt kontextus

Ez a KAVICS független magyar dokumentarista médiacsatorna weboldala (kavicsmedia.hu).
A csatorna társadalmi riportokat készít (YouTube: @kavicsmedia), a weboldal a videók
szöveges riport-adaptációit, a Rólunk oldalt és a kapcsolati infót tartalmazza.

- Stack: Astro (AstroPaper sablon, pagescms/astro-blog-template fork), Cloudflare Pages
- Deploy: minden push a `main`-re automatikusan buildel és élesít (Cloudflare Pages)
- Élő címek: https://kavicsmedia.pages.dev, https://kavicsmedia.hu, https://www.kavicsmedia.hu
- Tartalomforrás: `kavicsmedia-szoveganyag.md` a repo gyökerében (ha nincs ott, kérd a felhasználótól)
- Logó/brand fájlok: `brand/` mappa (KAVICS.png = négyzetes logó, Untitled_design.jpg = széles)

## Brand és dizájn szabályok

Hangvétel: komoly, tényfeltáró, tárgyilagos (referencia: Partizán, Direkt36, Telex).
TILOS: bulvár/tévés vizualitás, harsány elemek, clickbait címek.

Színek:
- Mélykék (elsődleges, szöveg/címek/logó): kb. #2B1FA8 (a logóból mintázd pontosan)
- Rózsaszín (akcentus, NEM háttér az egész oldalon): kb. #F5C3C2 (logóból mintázd)
- Lila (másodlagos akcentus, pöttyök a logóban): kb. #6B2FD8 (logóból mintázd)
- Alap: törtfehér háttér light módban, sötét tónus dark módban; a rózsaszín/lila
  csak linkekre, kiemelésekre, tagekre, hover állapotokra.
- A brand színeket a logó fájlokból pipettázd ki pontosan, ne becsüld.

Tipográfia: a logó condensed sans betűtípusához illő címbetű (pl. Archivo Narrow,
Oswald vagy hasonló, Google Fonts / Fontsource). Szövegtörzs: jól olvasható sans.

## Feladatlista (sorrendben)

1. **Alap konfiguráció**
   - `site` URL: https://kavicsmedia.hu (astro config / src/config.ts — a sablon
     "single source of truth" helyén)
   - Site title: KAVICS, description: a szöveganyag SEO szekciójából
   - `<html lang="hu">`
   - Szerző/brand meta adatok frissítése, AstroPaper demo adatok eltávolítása

2. **Színséma és logó**
   - Brand színek beállítása a fenti szabályok szerint (light + dark mód)
   - Logó a fejlécbe (KAVICS.png), favicon generálás a logóból
   - default OG kép csere: KAVICS brand (public/ alatt van a default-og)

3. **Magyarítás**
   - Minden UI szöveg magyarul (menü, keresés, tagek, dátumformátum: hu-HU,
     "olvasási idő", lábléc stb.)
   - Ha a sablonban i18n mappa van, ott; ha nincs, a komponensekben

4. **Tartalom beemelése** (a kavicsmedia-szoveganyag.md-ből)
   - Főoldal hero + "Mit csinálunk?" szekció
   - Rólunk oldal (src/content/pages/about.md vagy ekvivalens)
   - 3 cikk a posts/ alá:
     - kocsmak-bezarasa-nograd (a szöveganyag CIKK 1)
     - levi-tortenete (CIKK 2)
     - elindult-a-kavics (CIKK 3)
   - A vázlatos [szögletes zárójeles] részeknél írd meg a teljes szöveget a
     szöveganyag stílusában, de jelöld a commit üzenetben, hogy szerkesztői
     átnézést igényel
   - YouTube embed a cikkekbe (lite-youtube vagy sima iframe, lazy loading)
   - Social linkek: YouTube (youtube.com/@kavicsmedia), Instagram, TikTok
     (utóbbi kettő URL-jét kérd el, ha nincs megadva — addig placeholder # nélkül,
     egyszerűen hagyd ki)

5. **SEO réteg**
   - Canonical minden oldalon (www és pages.dev → kavicsmedia.hu canonical)
   - JSON-LD: Organization (főoldal), NewsArticle (cikkek)
   - Sitemap + RSS ellenőrzés (AstroPaperben alapból van, csak a site URL kell)
   - robots.txt: minden engedve, sitemap hivatkozással
   - Redirect: www → apex 301 (public/_redirects fájl Cloudflare Pages szintaxissal)

6. **Pages CMS ellenőrzés**
   - A repo gyökerében lévő .pages.yml a Pages CMS konfigja — igazítsd az új
     tartalomstruktúrához (posts mezők, pages), hogy app.pagescms.org-ról
     szerkeszthető legyen. Ne törölд.

7. **Takarítás**
   - AstroPaper demo posztok, angol placeholder tartalom, lighthouse svg törlése
   - README átírása röviden magyarra (mi ez, hogyan kell posztolni)

## Munkamódszer

- Kis, gyakori commitok, értelmes magyar vagy angol commit üzenetekkel
- MINDEN push előtt: `npm run build` fusson le hibátlanul lokálisan
- Push a main-re = azonnali élesítés, ezt tartsd észben
- Ha a build a Cloudflare-en elhasal de lokálban megy: node verzió eltérés lehet,
  tegyél `.nvmrc`-t vagy NODE_VERSION env-et javaslatként, de kérdezz rá
- Ne nyúlj: .github/workflows (ha van), LICENSE
- Design döntésnél ha bizonytalan vagy: a visszafogottabb, komolyabb opciót válaszd
