// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/SohalliyaPortfolio/',
//   build: {
//     outDir: 'dist',
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/SohalliyaPortfolio/", 
  plugins: [react()],
});
