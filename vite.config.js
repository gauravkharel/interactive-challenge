import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),svgr({
    // Treat every .svg import as a React component by default
    exportAsDefault: false,
    // Optionally enable SVGO optimizations
    svgrOptions: { svgo: true, svgoConfig: { plugins: [{ removeViewBox: false }] } },
    // Make sure we include all .svg files
    include: '**/*.svg',
  }),],
})
