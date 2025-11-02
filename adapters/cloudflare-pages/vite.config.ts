import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cloudflarePagesAdapter } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';

export default defineConfig(() => {
    return {
        plugins: [
            qwikCity(),
            qwikVite(),
            tsconfigPaths(),
            cloudflarePagesAdapter()
        ],
        build: {
            rollupOptions: {
                output: {
                    manualChunks: undefined,
                },
            },
        },
    };
});
