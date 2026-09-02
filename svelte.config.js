import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// Relative URLs so one build works both at https://alex.kiwi
		// and at https://babakhanov.github.io/alex.kiwi
		paths: { relative: true }
	}
};

export default config;
