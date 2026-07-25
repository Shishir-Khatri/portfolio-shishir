# Aarav Sharma — Creative Developer Portfolio

A modern, 3D, time-aware personal portfolio for a CS undergraduate from Nepal.
Built with **plain HTML, CSS, and JavaScript** plus **Three.js** — no build step, fully static.

> ⚠️ The name, bio, projects, and social links are placeholders. Replace them with
> your real details (see **How to personalise** below).

---

## ✨ Key Features

### 1. Time-aware theme system (the signature feature)
Four hand-tuned palettes, each with balanced colors and correct contrast:

| Theme  | Auto-applies at your local time | Mood |
|--------|--------------------------------|------|
| 🌅 **Dawn**  | 05:00 – 08:00 | soft peach / rose / lilac |
| ☀️ **Day**   | 08:00 – 17:00 | bright airy sky blue |
| 🌆 **Dusk**  | 17:00 – 20:00 | amber / magenta / deep violet |
| 🌙 **Night** | 20:00 – 05:00 | deep navy / cyan / violet |

- **Auto mode** detects the *viewer's* local clock and updates every minute.
- A **manual dropdown** (top-right) lets visitors pick any theme or "Auto".
- Choice is saved in `localStorage` (key: `aarav-theme-pref`) and restored on return.
- Themes morph **smoothly** — the 3D background colors lerp between palettes.

### 2. Interactive 3D background (Three.js)
- Floating crystalline geometry (icosahedrons, octahedrons, torus, dodecahedron) + a drifting particle field.
- Colors morph to match the active theme.
- Reacts to pointer movement (parallax) and page scroll.
- Respects `prefers-reduced-motion` (fewer objects, no float).

### 3. Craft details
- Custom cursor (dot + trailing ring) on desktop.
- 3D tilt + spotlight glow on skill and project cards.
- Magnetic buttons and social icons.
- Scroll-reveal animations, count-up stats, live clock + greeting, scroll progress bar.
- Fully responsive with a mobile slide-in menu.
- Accessible: semantic HTML, ARIA labels, reduced-motion support.

---

## 🗂 Project structure

```
index.html          Main page (semantic sections: hero, about, skills, work, contact)
css/style.css       Design system: 4 theme palettes, 3D effects, layout, responsive
js/scene.js         Three.js theme-aware 3D background
js/main.js          Theme engine, content data, tilt/cursor/reveal interactivity
README.md           This file
```

## 🔗 Functional entry points (paths & anchors)

| Path | Description |
|------|-------------|
| `/index.html` (or `/`) | The whole single-page portfolio |
| `#hero`    | Landing / intro |
| `#about`   | About + stats |
| `#skills`  | Skills grid |
| `#work`    | Selected projects |
| `#contact` | Contact + socials |

No backend, no database, no API — this is a purely static site.

---

## 🛠 How to personalise

1. **Name & bio** — edit the `<title>`, hero text, and About paragraphs in `index.html`.
2. **Skills** — edit the `skills` array in `js/main.js`.
3. **Projects** — edit the `projects` array in `js/main.js`.
4. **Contact** — change the email in the `mailto:` link and the social `href`s in `index.html`.
5. **Colors** — tweak the palette CSS variables under `[data-theme="..."]` in `css/style.css`
   (and the matching `THEMES` object in `js/scene.js`).
6. **Time windows** — adjust `themeFromHour()` in `js/main.js` if you want different cutoffs.

---

## ✅ Completed
- Time-based auto theme + manual override with persistence
- Four balanced day/dawn/dusk/night palettes
- Three.js animated 3D background that reacts to theme, cursor, and scroll
- All content sections, responsive layout, custom cursor, tilt cards, reveals

## 🚧 Not yet implemented (optional next steps)
- Real project screenshots / detail pages
- A working contact form (would need a form service like Formspree, since this is static)
- Downloadable résumé/CV link
- Blog section

## 🚀 Deploy
To publish and get a live URL, open the **Publish tab** — it deploys this static
project in one click.

---

Designed & built with care in Kathmandu 🇳🇵
