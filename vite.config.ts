import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["8qys4x-5173.csb.app"],
  },
  plugins: [react()],
});
