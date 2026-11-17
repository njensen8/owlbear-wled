import { defineConfig } from "vite";

export default defineConfig({
  base: "/owlbear-wled/",
  server: {
    host: "0.0.0.0",
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
  },
});
