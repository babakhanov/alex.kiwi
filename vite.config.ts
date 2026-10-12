import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	// Baked into both the prerendered HTML and the client bundle as the same
	// literal, so the footer year can never cause a hydration mismatch.
	define: {
		__BUILD_YEAR__: JSON.stringify(new Date().getFullYear())
	},
	plugins: [
		sveltekit({
			adapter: adapter({
				pages: 'docs',
				assets: 'docs',
				fallback: undefined,
				precompress: false,
				strict: true
			}),
			preprocess: vitePreprocess(),
			// Relative URLs so one build works both at https://alex.kiwi
			// and at https://babakhanov.github.io/alex.kiwi
			paths: { relative: true }
		})
	],
	// The dev stack is served through a proxy on codilo.app subdomains
	// (see compose.yml), which Vite would otherwise reject as an unknown host.
	server: {
		allowedHosts: ['.codilo.app']
	},
	preview: {
		allowedHosts: ['.codilo.app']
	}
});
