import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'


export default defineConfig({
    server: {
        hmr: {
          clientPort: 443
        }
      },
    plugins: [
        vitePluginString()
      ]
})