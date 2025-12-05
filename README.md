# alibashir489.me — Personal portfolio

This repository is a single-page static portfolio site (plain HTML + CSS). It’s ready to be deployed to GitHub Pages from the `main` branch.

Quick checklist before publishing
- Place your real profile image in `my pic/` and name it `profile.png` (or update the `src` in `index.html`).
- Replace placeholder contact links in `index.html` (email, phone, LinkedIn, GitHub).

Publish to GitHub Pages (root of `main` branch)
1. Commit your changes locally:

```powershell
git add .
git commit -m "Prepare site for GitHub Pages: update content and add profile image"
git push origin main
```

2. Open the repository on GitHub → Settings → Pages.
3. Under "Build and deployment" choose `Branch: main` and `Folder: / (root)` then Save.
4. After a minute the site will be available at `https://<your-username>.github.io/<repo-name>/` (or custom domain if you configure a CNAME).

Notes and small tips
- You don't need a build step — the site is static. Changes to `index.html` are reflected after you push to `main`.
- If you want a custom domain, add a `CNAME` file with the domain in the repo root and configure DNS.
- To preview locally run:

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

If you'd like, I can:
- Replace placeholder contact links with real values (you provide them),
- Replace the placeholder SVG with the uploaded profile image (you provide the image file),
- Add a `CNAME` if you want to configure a custom domain.
