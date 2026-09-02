# alex.kiwi

Personal site built with [SvelteKit](https://svelte.dev/docs/kit), statically
prerendered and served from GitHub Pages.

## Developing

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
```

This prerenders the whole site with
[`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static) into
`docs/`, which is committed to the repo — GitHub Pages is configured to serve
from the `docs/` folder on `main`, so deploying is just committing the build.

Preview the production build with `npm run preview`.

### Portable base path

The build uses `kit.paths.relative`, and internal links/assets go through
`resolve()` / `asset()` from `$app/paths`, so URLs are emitted relative to the
current page. The same `docs/` build therefore works unchanged at both:

- `https://alex.kiwi`
- `https://babakhanov.github.io/alex.kiwi`

Because of this, keep new internal links and images going through
`resolve('/some/route')` and `asset('/some-file.svg')` rather than hardcoding
absolute paths like `href="/blog"` or importing images from `$lib`. Vite-imported
assets get absolute `/_app/...` URLs, which break under a path prefix — put
images in `static/` and reference them with `asset()`.

`static/.nojekyll` is required: without it GitHub Pages runs Jekyll, which
ignores the underscore-prefixed `_app/` directory and the site loses all its JS
and CSS.

### Custom domain

There is deliberately no `CNAME` file, so both URLs above stay live. Adding one
(`echo alex.kiwi > static/CNAME`) sets the custom domain and makes GitHub
redirect the `github.io` URL to `alex.kiwi`.
