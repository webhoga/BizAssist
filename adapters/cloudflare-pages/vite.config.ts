import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
    return {
        plugins: [
            qwikCity(),     // 🔴 REQUIRED
            qwikVite(),     // 🔴 REQUIRED
            tsconfigPaths(),
        ],
        build: {
            ssr: true,
            rollupOptions: {
                input: ['src/entry.cloudflare-pages.tsx'],
            },
        },
    };
});
