# Log: Add Ikigai Pronounce Button

**Date:** 2026-05-19  
**Branch:** main  
**Commits:** `df9c958`, `b4e7fe9`

---

## Goal

Add an inline "Pronounce" button next to the first formal definition of *ikigai* in Chapter 1,
the Glossary, and the FAQ. The button plays a pre-generated MP3 of the correct Japanese
pronunciation on click.

---

## Steps Taken

### 1. Checked book-installer for an existing guide

Ran `/book-installer` and searched all reference files for pronunciation/audio guides.
No dedicated guide exists. Decided to implement from scratch using ElevenLabs TTS + browser
`Audio` API.

### 2. Generated the pronunciation MP3 (attempt 1 — incorrect)

- **Model:** `eleven_multilingual_v2`
- **Voice:** George (`JBFqnCBsd6RMkjVDRZzb`)
- **Text:** `"ee-kee-gah-ee"` (English phonetic)
- **Result:** Robotic, unnatural — user flagged as incorrect

### 3. Regenerated with native Japanese input (attempt 2 — correct)

- **Model:** `eleven_v3` (highest quality, 70+ language support)
- **Voice:** George (`JBFqnCBsd6RMkjVDRZzb`)
- **Text:** `"生き甲斐"` (Japanese kanji)
- **Language code:** `ja`
- **Output:** `docs/audio/ikigai-pronunciation.mp3` (30,555 bytes)
- **Result:** Confirmed correct by user ✓

### 4. Added CSS for the pronounce button

Appended to `docs/css/extra.css`:

```css
.pronounce-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    font-size: 0.78em;
    font-family: inherit;
    font-weight: 500;
    color: var(--md-primary-fg-color);
    background: transparent;
    border: 1.5px solid var(--md-primary-fg-color);
    border-radius: 12px;
    cursor: pointer;
    vertical-align: middle;
    line-height: 1.4;
    transition: background 0.15s, color 0.15s;
}
.pronounce-btn:hover {
    background: var(--md-primary-fg-color);
    color: var(--md-primary-bg-color);
}
.pronounce-btn svg {
    width: 14px; height: 14px; fill: currentColor; flex-shrink: 0;
}
```

### 5. Created docs/js/pronounce.js

Attaches a click handler to every `.pronounce-btn[data-audio]` element on the page:

```js
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pronounce-btn[data-audio]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var audio = new Audio(btn.dataset.audio);
            audio.play();
        });
    });
});
```

### 6. Enabled extra_javascript in mkdocs.yml

```yaml
extra_javascript:
  - js/pronounce.js
```

### 7. Added button to Chapter 1 (line 75)

At the first formal definition of *ikigai* in `docs/chapters/01-ikigai-and-self-discovery/index.md`:

```html
The word *Ikigai* (生き甲斐) <button class="pronounce-btn"
  data-audio="/mini-mba-for-startups/audio/ikigai-pronunciation.mp3">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05
             c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5
             6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77
             s-2.99-7.86-7-8.77z"/>
  </svg> Pronounce</button> comes from two Japanese roots...
```

---

## Reuse Pattern

To add the button anywhere else (Glossary, FAQ, other chapters), paste this
self-contained HTML snippet — no new files needed:

```html
<button class="pronounce-btn" data-audio="/mini-mba-for-startups/audio/ikigai-pronunciation.mp3"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> Pronounce</button>
```

The `data-audio` path works from any page depth because it is absolute
(`/mini-mba-for-startups/…`).

---

## Files Changed

| File | Change |
|------|--------|
| `docs/audio/ikigai-pronunciation.mp3` | New — ElevenLabs eleven_v3, Japanese kanji input |
| `docs/js/pronounce.js` | New — click-to-play handler |
| `docs/css/extra.css` | Appended `.pronounce-btn` styles |
| `mkdocs.yml` | Enabled `extra_javascript: [js/pronounce.js]` |
| `docs/chapters/01-ikigai-and-self-discovery/index.md` | Button added at line 75 |

## Still TODO

- [ ] Add pronounce button to Glossary page (see `TODO.md`)
- [ ] Add pronounce button to FAQ page (see `TODO.md`)
