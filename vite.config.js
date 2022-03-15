import { defineConfig } from 'vite'
import path from 'path'

const root = path.resolve(__dirname, './src')

export default defineConfig({
  root,
  publicDir: 'public',
  build: {
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      input: {
        index: path.resolve(root, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames(asset) {
          if (/.css$/.test(asset.name)) {
            return 'assets/css/[name].[ext]'
          }
          return 'assets/img/[name].[ext]'
        },
      },
    },
  },
})
