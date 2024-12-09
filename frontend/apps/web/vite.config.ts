// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   root: './',
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'E:/simon/frontend/apps/web/index.html',
//       },
//     },
//   },
  
 
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
