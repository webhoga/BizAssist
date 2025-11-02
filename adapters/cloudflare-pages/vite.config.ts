import { defineConfig, type Plugin } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cloudflarePagesAdapter } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';
import type { NormalizedOutputOptions, OutputBundle } from 'rollup';

function forceInlineDynamicImports(): Plugin {
    return {
        name: 'force-inline-dynamic-imports',
        enforce: 'post',
        apply: 'build',

        config() {
            return {
                build: {
                    rollupOptions: {
                        output: {
                            inlineDynamicImports: true,
                        }
                    }
                }
            };
        },

        renderStart(outputOptions: NormalizedOutputOptions) {
            // Force remove manualChunks at render time
            if (outputOptions.manualChunks) {
                (outputOptions as any).manualChunks = undefined;
            }
        }
    };
}

export default defineConfig(() => {
    return {
        plugins: [
            qwikCity(),
            qwikVite(),
            tsconfigPaths(),
            cloudflarePagesAdapter(),
            forceInlineDynamicImports()
        ]
    };
});
