import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ocralo.github.io/gha-test/',
  plugins: [react(), eslintPlugin()],
});
