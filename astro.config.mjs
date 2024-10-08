import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/serverless';  // Ensure correct import

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport'
  },

  integrations: [tailwind(), react({ experimentalReactChildren: true })],
  site: 'https://newshoring.com/',
  output: "server",  // Choose server output for serverless deployment
  compressHTML: false,

  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/themes/nearshoringtheme/[name].[hash].js',
          chunkFileNames: 'js/themes/nearshoringtheme/chunks/[name].[hash].js'
        }
      }
    }
  },

  adapter: vercelServerless(),  // Correct usage of Vercel serverless adapter
});
