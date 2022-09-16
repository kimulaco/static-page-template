import { defineConfig } from 'vite'
import path from 'path'

const { PORT } = process.env
const src = path.resolve(__dirname, './src')
const dist = path.resolve(__dirname, './dist')

export default defineConfig({
  root: src,
  base: '/app/',
  publicDir: 'public',
  build: {
    target: 'modules',
    outDir: dist,
    rollupOptions: {
      input: {
        index: path.resolve(src, 'index.html'),
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
  server: {
    host: 'localhost',
    port: PORT || 3000,
  },
})
