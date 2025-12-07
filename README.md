React conversion of the static `my-portfolio` site.

Setup

1. Open a terminal and go to the new app folder:

```powershell
cd c:\SINET\PROJECT\my-portfolio\react-app
```

2. Install dependencies and run dev server:

```powershell
npm install
npm run dev
```

Notes

- I converted your HTML pages into React pages under `src/pages` using `dangerouslySetInnerHTML` for a fast port. The Bootstrap JS bundle is included in `index.html` so modals should work, but you may need to move your `img/` and `video/` folders into `react-app/public` or update the `src` paths in the components.
- Styles: I copied a minimal `index.css`. For the full original CSS, copy the content of the root-level `page1.css` into `src/index.css` (or import the original file).
- If you want a deeper conversion (rewriting modals to React components, moving assets into `public`, splitting components), tell me which pages to prioritize and I will continue.
