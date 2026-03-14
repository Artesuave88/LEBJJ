import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
// svelte.config.js
const config = {
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true,
  },
  kit: {
    adapter: adapter({ runtime: "nodejs22.x" }),
  },
};

export default config;
