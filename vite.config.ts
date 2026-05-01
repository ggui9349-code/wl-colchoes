// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("@tanstack")) {
              return "react-vendor";
            }
            if (id.includes("node_modules/framer-motion")) {
              return "motion-vendor";
            }
            if (id.includes("node_modules/lucide-react") || id.includes("node_modules/@radix-ui")) {
              return "ui-vendor";
            }
          },
        },
      },
    },
  },
});
