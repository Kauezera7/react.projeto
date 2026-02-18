import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/**
 * Configuração do Vite
 * Define o uso do plugin React (SWC) para compilação rápida e otimizada do código.
 */
export default defineConfig({
  plugins: [react()],
})
