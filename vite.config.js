import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ProyectoKennethOmar/', // Cambia al nombre exacto de tu repositorio
  plugins: [react()],
});
