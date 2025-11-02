import { defineConfig, type Plugin, type PluginOption } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cloudflarePagesAdapter } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';

function removeManualChunksPlugin(): Plugin {
  return {
    name: 'remove-manual-chunks',
    enforce: 'post',
    configResolved(resolvedConfig) {
      const build = resolvedConfig.build;
      if (build?.rollupOptions?.output) {
        const processOutput = (output: any) => {
          if (output && typeof output === 'object') {
            delete output.manualChunks;
          }
        };

        if (Array.isArray(build.rollupOptions.output)) {
          build.rollupOptions.output.forEach(processOutput);
        } else {
          processOutput(build.rollupOptions.output);
        }
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
      removeManualChunksPlugin()
    ]
  };
});
