import { defineConfig } from "vite";
import { style } from "@hyrious/esbuild-plugin-style";
import { autoPathPlugin } from "esbuild-auto-path-plugin";
import { federation } from "@module-federation/vite";
import { createEsBuildAdapter } from "native-federation-esbuild";

export default defineConfig(async ({ command }) => ({
  resolve: {
    alias: {
      '@shared/loader': '../shared/loader.ts',
    },
  },
  plugins: [
    await federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: "src/federation.ts",
        verbose: false,
        dev: command === "serve",
      },
      adapter: createEsBuildAdapter({
        plugins: [autoPathPlugin(), style()],
      }),
    }),
  ],
}));
