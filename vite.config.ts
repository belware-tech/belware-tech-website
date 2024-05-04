import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	ssr: {
		noExternal: ['three'],
	},
});