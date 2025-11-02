import { defineConfig, type UserConfig, type Plugin } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflarePagesAdapter } from "@builder.io/qwik-city/adapters/cloudflare-pages/vite";
import pkg from "./package.json";

type PkgDep = Record<string, string>;
const { dependencies = {}, devDependencies = {} } = pkg as any as {
  dependencies: PkgDep;
  devDependencies: PkgDep;
  [key: string]: unknown;
};

errorOnDuplicatesPkgDeps(devDependencies, dependencies);

function fixCloudflareAdapter(): Plugin {
  return {
    name: "fix-cloudflare-adapter",
    enforce: "post",
    config(config, { command }) {
      if (command === "build") {
        return {
          build: {
            rollupOptions: {
              output: {
                inlineDynamicImports: true,
              },
            },
          },
        };
      }
    },
    configResolved(resolvedConfig) {
      if (resolvedConfig.build?.rollupOptions?.output) {
        const outputs = Array.isArray(resolvedConfig.build.rollupOptions.output)
            ? resolvedConfig.build.rollupOptions.output
            : [resolvedConfig.build.rollupOptions.output];

        outputs.forEach((output) => {
          if (output) {
            delete (output as any).manualChunks;
          }
        });
      }
    },
  };
}

/**
 * Function to identify duplicate dependencies and throw an error
 * @param devDependencies - List of dev dependencies
 * @param dependencies - List of prod dependencies
 */
function errorOnDuplicatesPkgDeps(
    devDependencies: PkgDep,
    dependencies: PkgDep
) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies).filter(
      (dep) => dependencies[dep]
  );

  const qwikPkg = Object.keys(dependencies).filter((value) =>
      /qwik/i.test(value)
  );

  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;

  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }

  msg = `
    Warning: The dependency "${duplicateDeps.join(
      ", "
  )}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;

  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}

export default defineConfig(
    ({ command, mode }: { command: string; mode: string }): UserConfig => {
      return {
        plugins: [
          qwikCity(),
          qwikVite(),
          tsconfigPaths({ root: "." }),
          cloudflarePagesAdapter(),
          fixCloudflareAdapter(),
        ],
        build: {
          rollupOptions: {
            input: "./src/entry.ssr.tsx", // Correctly set as a string path
          },
        },
        optimizeDeps: {
          exclude: [],
        },
        server: {
          headers: {
            "Cache-Control": "public, max-age=0",
          },
        },
        preview: {
          headers: {
            "Cache-Control": "public, max-age=600",
          },
        },
      };
    }
);
