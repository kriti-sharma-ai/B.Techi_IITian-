# BTechi: Brand Identity and Colours

Source of truth for tokens: `src/app/globals.css`. Logo: `src/components/logo.tsx`, favicon: `src/app/icon.svg`.

---

## 1. Brand essence

| | |
|---|---|
| **Name** | BTechi (from the BTechi IITian YouTube channel: AI, tech and education explained simply) |
| **Tagline** | Sit the real exam before exam day. |
| **Descriptor** | IIT Madras BS Management & Data Science, organised. |
| **Promise** | Real papers, real exam feel, real answer keys. Free. |
| **Personality** | Calm, exact, student-first. A sharp senior who has already sat the exam, not a coaching-centre billboard. |

### Voice
- **Direct.** "Start a mock exam", not "Begin your amazing learning journey".
- **Specific.** Numbers over adjectives: "1,200 papers · 40,000 questions · official answer keys".
- **Honest.** Say "coming soon" when content isn't there; never fake reviews or counts.
- **Plain English.** Short sentences, no jargon, no hype, no exclamation marks in UI.
- **No emojis** anywhere in the product UI. Use lucide-react icons.

## 2. Logo

```
 ┌────────┐
 │   B    │  BTechi
 └────────┘
```

- **Mark:** a bold "B" in Ink `#0B0B0B` on a Yellow `#FFD21C` rounded square (32 × 32, corner radius 8).
- **Wordmark:** "BTechi" in Plus Jakarta Sans ExtraBold (800), tight tracking, set beside the mark with an 8 px gap.
- **Clear space:** at least half the mark's width on every side.
- **Minimum size:** mark 16 px (favicon), lock-up 24 px tall.
- **Don't:** recolour the mark, put the yellow square on a yellow background, stretch it, add shadows or gradients, or set the wordmark in another font.

## 3. Colour

### The 85 / 10 / 5 rule
Pages are **~85% neutral**, **~10% ink**, **~5% yellow + contextual accents**. Yellow is a *fill* colour only.

### Brand

| Token | Hex | Use |
|---|---|---|
| `--brand` | `#FFD21C` | Logo, primary CTA fill, active-nav underline, progress bars, text selection |
| `--brand-ink` | `#0B0B0B` | Text and icons placed on yellow |
| `--ink` | `#0B0B0B` (light) / `#FFFFFF` (dark) | Strong emphasis, headings on hero |
| `--math-accent` | `#E0A800` (light) / `#FFD21C` (dark) | Landing-page maths backdrop only |

> Yellow is **never** used for text on a white or light background: it fails contrast.

### Neutrals

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F7F8FA` | `#0B0B0B` | Page background |
| `--surface` | `#FFFFFF` | `#151515` | Cards, panels, nav |
| `--surface-2` | `#EEF1F4` | `#1F1F1F` | Inputs, tracks, hover fills, segmented controls |
| `--fg` | `#171717` | `#FFFFFF` | Body text |
| `--muted` | `#667085` | `#A0A0A0` | Secondary text, captions |
| `--border` | `#E5E7EB` | `#2A2A2A` | Hairlines, card borders |

### Contextual accents
Each accent means one thing everywhere in the product.

| Token | Light | Dark | Meaning |
|---|---|---|---|
| `--teal` | `#0F766E` | `#2DD4BF` | Notes and resources |
| `--blue` | `#2563EB` | `#60A5FA` | Video, info |
| `--purple` | `#7C3AED` | `#A78BFA` | Practice |
| `--green` | `#15803D` | `#4ADE80` | Success, correct answers, PYQs |
| `--red` | `#DC2626` | `#F87171` | Errors, wrong answers, destructive actions |
| `--amber` | `#B45309` | `#FBBF24` | Warnings, marked-for-review, outdated flags |

Accents are used as icon colour, small badges and tinted backgrounds (`color/10`), not as large fills.

### Theme notes
- Light and dark are both first-class; the toggle lives in the navbar (`next-themes`).
- The **exam portal is pinned to light** (`.light` class) so it looks like the real IITM exam screen in either theme.
- Browser `theme-color`: `#F7F8FA` light, `#0B0B0B` dark.

## 4. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Everything | **Plus Jakarta Sans** (`--font-jakarta`, via `next/font/google`) | 400 / 500 / 600 / 700 / 800 | Stylistic sets `ss01`, `cv11` on |
| Code, numbers in tables | System mono (`ui-monospace`, SF Mono, Cascadia Code, Consolas) | 400 / 500 | Use `tabular-nums` for scores and timers |

| Level | Size | Weight | Tracking |
|---|---|---|---|
| Display (hero H1) | `clamp(2.4rem, …, 4.5rem)`, line-height 1.05 | 800 | tight |
| H1 page | 30–36 px | 800 | tight |
| H2 section | 20–24 px | 700 | tight |
| H3 card | 18 px | 700 | normal |
| Body | 15–16 px | 400 | normal |
| Small / caption | 12–14 px | 500 | normal |

Highlight device: the key phrase in a headline gets a yellow underline bar (`bg-brand`, ~0.24 em tall, rotated −1°) behind the text, not yellow text.

## 5. Shape, depth and motion

| | |
|---|---|
| **Radius** | Buttons and inputs 12 px (`rounded-xl`); cards and large panels 16 px (`rounded-2xl`); pills and progress bars full |
| **Borders** | 1 px `--border`; cards prefer border + very soft shadow over heavy shadows |
| **Shadow** | Soft and low: `0 2px 6px rgb(0 0 0 / .04)`; showcase frames add a long, faint drop `0 24px 60px -24px rgb(0 0 0 / .3)` |
| **Buttons** | md 40 px tall, lg 48 px. Primary = yellow fill + ink text. Secondary = surface + border. |
| **Focus** | Always-visible focus ring on keyboard focus |
| **Motion** | Short and calm: fade-up 350 ms, menus 160–250 ms, ease-out / `cubic-bezier(.16,1,.3,1)`. Respect `prefers-reduced-motion`. |

## 6. Iconography and imagery

- **Icons:** lucide-react only, 16–20 px, 1.5–2 px stroke, inheriting text colour. Feature icons sit in a 40 px yellow rounded square with ink icon.
- **Imagery:** real product screens (the exam portal) over stock photos. Light maths/graph line-art backdrops are allowed on the hero.
- **No emojis.**

## 7. Quick reference (copy-paste)

```css
:root {
  --brand: #ffd21c;  --brand-ink: #0b0b0b;
  --bg: #f7f8fa;     --surface: #ffffff;  --surface-2: #eef1f4;
  --fg: #171717;     --muted: #667085;    --border: #e5e7eb;
  --teal: #0f766e;   --blue: #2563eb;     --purple: #7c3aed;
  --green: #15803d;  --red: #dc2626;      --amber: #b45309;
}
.dark {
  --bg: #0b0b0b;     --surface: #151515;  --surface-2: #1f1f1f;
  --fg: #ffffff;     --muted: #a0a0a0;    --border: #2a2a2a;
  --teal: #2dd4bf;   --blue: #60a5fa;     --purple: #a78bfa;
  --green: #4ade80;  --red: #f87171;      --amber: #fbbf24;
}
```
