import { defineConfig } from "vite";
import { cloudflarePagesAdapter } from "@builder.io/qwik-city/adapters/cloudflare-pages/vite";
import baseConfig from "../../vite.config";

export default defineConfig((env) => {
    // Get the base config (plugins like qwikVite, etc)
    const base = typeof baseConfig === "function" ? baseConfig(env) : baseConfig;

    return {
        ...base,
        plugins: [
            ...(base.plugins || []),
            cloudflarePagesAdapter(),
        ],
        build: {
            ssr: true,
            rollupOptions: {
                input: ["src/entry.cloudflare-pages.tsx", "@qwik-city-plan"],
            },
        },
    };
});
