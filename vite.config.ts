import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import config from "./src/assets/config.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${config.title}/`,
});
