# Amirul Fahmi — Modern Geospatial Portfolio

A responsive, bilingual (English/Indonesian), data-driven portfolio website built with plain HTML, CSS, and JavaScript. No build process or framework is required.

## Quick preview

Open `index.html` directly, or run a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Easy content editing

1. Open `editor.html`.
2. Edit the JSON content.
3. Select **Save & preview in browser**.
4. Open or refresh `index.html`.
5. For permanent deployment, select **Export replacement data.js** and replace the existing `data.js` file.

You can also edit `data.js` directly. Nearly all visible content is stored there.

## Add a new project

Inside `data.js`, duplicate one object in `projects`, then update:

- `id` — unique ID
- `featured` — `true` or `false`
- `category` — `webgis`, `remote`, `mapping`, or `survey`
- `year`
- `image` — local asset path or web URL
- `title`, `kicker`, `description` — can contain both `en` and `id`
- `tags`
- `live` and `source` links

Put local screenshots inside `assets/`.

## Deployment options

### GitHub Pages

1. Create a new public GitHub repository.
2. Upload all files and folders from this package.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch `main`, folder `/root`.
5. Save and wait for the public URL.

### Netlify

Drag and drop the full folder into Netlify Drop. No build command is needed.

### cPanel / shared hosting

Upload all files into `public_html` or a subfolder using File Manager.

## Important customization checklist

- Replace the JagaSleman cover with a real screenshot when available.
- Confirm the LinkedIn short link is still active.
- Consider converting the CV into PDF and update `profile.resume` in `data.js`.
- Add project metrics, responsibilities, and outcomes where evidence is available.
- Compress large screenshots before production deployment.

## Files

- `index.html` — page structure
- `styles.css` — visual design and responsive layout
- `data.js` — editable portfolio content
- `app.js` — rendering, filters, language and theme controls
- `editor.html` — no-code-like local content editor
- `assets/` — photo, CV, project screenshots, SVG covers
