# CLAUDE.md — Ole Cup Entrepreneurship Textbook

Project: Ole Cup Entrepreneurship: A Liberal Arts Guide to the St. Olaf Pitch Competition
Repo: mini-mba-for-startups
Site URL: https://dmccreary.github.io/mini-mba-for-startups/

## Learning Mascot: Rune the Raven

### Mascot File Index

The canonical files for this mascot. When editing any of these, update the
others in the same turn so they stay in sync.

| File | Purpose |
|------|---------|
| [`docs/img/mascot/character-sheet.md`](docs/img/mascot/character-sheet.md) | Canonical identity document (name, species, colors, voice). Source of truth. |
| [`docs/img/mascot/image-prompts.md`](docs/img/mascot/image-prompts.md) | Self-contained AI prompts for regenerating each pose. |
| [`docs/img/mascot/neutral.png`](docs/img/mascot/neutral.png) | Default / general-purpose pose. |
| [`docs/img/mascot/welcome.png`](docs/img/mascot/welcome.png) | Chapter-opening pose. |
| [`docs/img/mascot/thinking.png`](docs/img/mascot/thinking.png) | Key-concept pose. |
| [`docs/img/mascot/tip.png`](docs/img/mascot/tip.png) | Hint / helpful-guidance pose. |
| [`docs/img/mascot/warning.png`](docs/img/mascot/warning.png) | Common-mistake / pitfall pose. |
| [`docs/img/mascot/encouraging.png`](docs/img/mascot/encouraging.png) | Difficult-content / struggle pose. |
| [`docs/img/mascot/celebration.png`](docs/img/mascot/celebration.png) | End-of-chapter / achievement pose. |
| [`docs/css/mascot.css`](docs/css/mascot.css) | Custom admonition styles for the seven pose contexts. |
| [`docs/learning-graph/mascot-test.md`](docs/learning-graph/mascot-test.md) | Rendering test page that exercises every admonition style. |

### Character Overview

- **Name**: Rune
- **Species**: Raven
- **Personality**: Curious, encouraging, bold, grounded in Norse heritage
- **Catchphrase**: "Your Ikigai is waiting — let's find it!"
- **Visual**: Compact upright raven, midnight-black feathers with amber-gold highlights, amber knit scarf, Ole Cup name badge, wide amber eyes

### Voice Characteristics

- Warm and conversational — speaks like a slightly older peer who has pitched before
- Uses simple, direct language — no MBA jargon
- Occasionally references Norse heritage or St. Olaf culture
- Signature phrases: "Your Ikigai is waiting — let's find it!", "Every founder started exactly where you are.", "Ideas are cheap — curiosity is priceless."

### Mascot Admonition Format

Always place mascot images in the admonition body, never in the title bar:

```markdown
!!! mascot-welcome "Title Here"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rune waving welcome">
    Admonition text goes here after the img tag.
```

Image path depth: `../../img/mascot/` from any chapter page (`chapters/NN-slug/index.md`).
Use `../../img/mascot/` from `learning-graph/` pages as well.

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | mascot-neutral | As needed |
| Chapter opening | mascot-welcome | Every chapter |
| Key concept | mascot-thinking | 2–3 per chapter |
| Helpful tip | mascot-tip | As needed |
| Common mistake | mascot-warning | As needed |
| Difficult content | mascot-encourage | Where students may struggle |
| Section completion | mascot-celebration | End of major sections |

### Do's and Don'ts

**Do:**

- Use Rune to introduce new topics warmly
- Include the catchphrase in welcome admonitions
- Keep dialogue brief (1–3 sentences)
- Match the pose image to the content type

**Don't:**

- Use Rune more than 5–6 times per chapter
- Put mascot admonitions back-to-back
- Use the mascot for purely decorative purposes
- Change Rune's personality or speech patterns
- Use gendered pronouns — refer to Rune as "Rune" or use they/them
