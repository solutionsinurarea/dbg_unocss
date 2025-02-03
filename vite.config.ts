import path from "node:path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
	plugins: [UnoCSS(), svelte()],
	resolve: {
		alias: {
			assets: path.resolve(__dirname, "src/assets"),
			lib: path.resolve(__dirname, "src/lib"),
		},
	},
	server: {
		port: 3000,
		headers: {
			"content-security-policy": "media-src * http: https: 'unsafe-inline'",
		},
	},
});
