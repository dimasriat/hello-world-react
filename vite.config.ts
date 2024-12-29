import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace `hello-world-react` with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/hello-world-react/',
});

