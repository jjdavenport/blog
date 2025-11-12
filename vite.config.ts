import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import config from "./src/assets/config.json";

const homepageURL = new URL(config.homepage);
const base = homepageURL.pathname.endsWith("/")
  ? homepageURL.pathname
  : homepageURL.pathname + "/";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
});
