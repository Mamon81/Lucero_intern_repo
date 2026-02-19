import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // The "Brain" of v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Processes your CSS automatically
  ],
});
