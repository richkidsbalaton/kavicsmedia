# KAVICS — kavicsmedia.hu

A KAVICS független magyar dokumentarista médiacsatorna weboldala. A csatorna társadalmi riportokat készít ([YouTube: @kavicsmedia](https://www.youtube.com/@kavicsmedia)), az oldal a videók szöveges riport-adaptációit, a Rólunk oldalt és a kapcsolati infót tartalmazza.

Astro alapú statikus oldal (AstroPaper sablonból), a Cloudflare Pages buildeli és élesíti **minden push után a `main` ágra**.

## Új riport közzététele

A legegyszerűbb út a [Pages CMS](https://app.pagescms.org/) — ott a „Riportok" alatt lehet új cikket írni, mentéskor automatikusan commitol és élesít.

Kézzel: hozz létre egy markdown fájlt az `src/content/blog/` mappában:

```markdown
---
author: KAVICS
pubDatetime: 2026-08-20T09:00:00+02:00
title: A cikk címe
slug: a-cikk-url-je
tags:
  - vidék
ogImage: https://i.ytimg.com/vi/VIDEOID/maxresdefault.jpg
description: 1-2 mondatos leírás (ez jelenik meg a Google-ben és a kártyákon).
---

A cikk szövege…

<div class="youtube-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/VIDEOID" title="A videó címe" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
```

## Fejlesztés

```bash
npm install
npm run dev      # helyi szerver: http://localhost:4321
npm run build    # éles build (push előtt mindig fusson le hibátlanul!)
```

A brand színek és betűtípusok az `src/styles/base.css` és a `tailwind.config.cjs` fájlokban vannak; a logó forrásfájljai a `brand/` mappában.
