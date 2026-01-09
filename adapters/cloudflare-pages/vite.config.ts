import { defineConfig } from 'vite';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { cloudflarePagesAdapter } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';

export default defineConfig(() => {
    return {
        plugins: [
            qwikCity(),
            cloudflarePagesAdapter(),
        ],
    };
});
