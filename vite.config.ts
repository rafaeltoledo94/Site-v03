import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // O truque mágico: diz pro sistema que aquele código estranho é na verdade sua foto
      'figma:asset/1182ff53dd980e256f26aad516e3cc461abe8f52.png': '/rafael-toledo.png',
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
