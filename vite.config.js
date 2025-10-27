import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
	root: "src",
	base: "",
	build: {
		outDir: "../assets",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: fileURLToPath(new URL("./src/main.js", import.meta.url)),
			},
			output: {
				entryFileNames: "js/[name].js",
				chunkFileNames: "js/[name]-[hash].js",
				assetFileNames: "css/[name][extname]",
			},
		},
	},
	plugins: [vue(), UnoCSS()],
});
