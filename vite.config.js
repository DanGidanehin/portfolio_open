import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
			"@src": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@hoc": path.resolve(__dirname, "./src/hoc"),
			"@canvas": path.resolve(__dirname, "./src/components/canvas"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@public": path.resolve(__dirname, "./public"),
			"@styles": path.resolve(__dirname, "./src/styles.js"),
		},
	},
	optimizeDeps: {
		include: ["three"],
	},
});
