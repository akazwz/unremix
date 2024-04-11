import { vitePlugin as remix,} from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path'

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  resolve: {
    alias: {
      "remix": path.resolve(__dirname, 'node_modules/@remix-run/node')
    }
  }
});
