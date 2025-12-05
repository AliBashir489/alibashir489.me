<!--
  Guidance for AI coding agents working on this repo.
  Keep it short, practical, and tied to discoverable patterns.
-->
# Copilot / AI Agent Instructions

**Purpose:** Help contributors quickly make safe, high-impact changes to this personal website repository (single-page static site). Focus on edits that preserve the current visual design and responsive behavior.

**Big picture:**
- **Type:** Single-page static site. The main content is a stand-alone HTML document with inlined CSS in the `<head>` (no build toolchain detected).
- **Visual / UX patterns:** Hero section with typing/animation, a floating gradient background (`.gradient-bg`), and decorative code-window lines (`.code-line`) used for staged animations.
- **Assets:** Images live in the `my pic/` folder. Expect image references to be relative paths in the page.

**Files / locations to inspect first:**
- `index.html` (or the primary `.html` file in repo root) — main markup and inlined styling.
- `my pic/` — image assets used by the page (profile photo, icons).
- `.git/` — use commit history to understand past edits.

**What to change vs what to preserve:**
- Preserve the inlined CSS unless asked to refactor to an external stylesheet; many layout tweaks depend on the current cascade.
- Preserve class names like `.hero`, `.gradient-bg`, `.code-line`, `.hero-visual` — they are used across markup and animations.
- Safe edits: text/content updates, link updates (LinkedIn, GitHub, email), adding a small script for typing animation, or swapping/adding images in `my pic/`.

**Project-specific patterns & examples**
- Inline animation sequence: `.code-line` elements use staggered `animation-delay` to reveal code lines. When updating that block, keep the `nth-child(...)` ordering consistent.
  - Example: `div.code-line:nth-child(2) { animation-delay: 1.3s; }` — if you add/remove lines, update the nth-child delays.
- Gradient and floating backgrounds are provided by `.gradient-bg::before` and `.gradient-bg::after`. Move or resize these elements carefully — they affect the overall page mood.

**Local dev / preview**
- There's no build step. To preview locally open the HTML file in a browser or run a minimal static server. From PowerShell run:
  ```powershell
  # from repo root
  python -m http.server 8000
  # then open http://localhost:8000 in your browser
  ```
  Or with Node (if available):
  ```powershell
  npx http-server -p 8000
  ```

**Testing / validation**
- Visual verification in a desktop and a mobile viewport is the primary “test.” There are no automated tests.
- Check responsive breakpoints: 1024px and 768px (see media queries in head CSS).

**Common edits agents are asked to do (how-to notes)**
- Update experience text: edit the `#experience` section markup — keep `.experience-card` structure and `.experience-list` items. Use the existing CSS classes for consistent spacing/hover effects.
- Add profile photo: put the image into `my pic/` and add an `<img>` in the header or hero; match existing card sizing and border-radius.
- Add contact links: edit header nav or footer; prefer existing `.nav-cta` class for primary CTAs.

**Deployment / GitHub Pages**
- Repo is static — GitHub Pages is the simplest deploy option. Default branch `main` can be used with Pages (no CI required).
- Typical commands to publish (manual flow):
  ```powershell
  git add .
  git commit -m "Update site"
  git push origin main
  # then enable Pages from repository settings (branch: main)
  ```

**Do not do (avoid these)**
- Do not remove or rename CSS classes without updating all instances in the HTML (there's no CSS bundler to catch mismatches).
- Do not assume a JS framework — this is plain HTML/CSS; if you add scripts, keep them minimal and include them near `</body>`.

**If you need to refactor**
- If extracting CSS to `styles.css`, update `index.html` to link it and run a visual diff to ensure no regressions. Keep the original inline CSS copy until confirmed.

**Where to ask questions / follow-up**
- If content priorities are unclear (e.g., replace company-specific experience with personal portfolio text), ask the repo owner which sections to keep or replace.

---
If anything here is unclear or you want more granular rules (e.g., naming conventions for new assets, or a suggested `styles.css` split), tell me which section to expand and I'll iterate.
