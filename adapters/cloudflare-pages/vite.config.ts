import { cloudflarePagesAdapter } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        plugins: [cloudflarePagesAdapter()],
        build: {
            outDir: 'dist',
            rollupOptions: {
                output: {
                    entryFileNames: '_worker.js',
                },
            },
        },
    };
});
