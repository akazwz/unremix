import { vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path'

export default defineConfig({
  plugins: [remixCloudflareDevProxy(),remix(), tsconfigPaths()],
  resolve: {
    alias: {
      "remix": path.resolve(__dirname, 'node_modules/@remix-run/cloudflare')
    }
  }
});
