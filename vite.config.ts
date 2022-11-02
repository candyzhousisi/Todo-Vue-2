import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {}
  }
})
