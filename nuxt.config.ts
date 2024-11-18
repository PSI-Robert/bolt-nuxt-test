import {
   validateEnvironment,
   runtimeConfig,
   googleFontsConfig,
   tailwindConfig,
   devToolsConfig,
   moduleConfigs,
} from './config';

validateEnvironment();

export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   experimental: {
      defaults: {
         nuxtLink: {
            // default values
            componentName: 'NuxtLink',
            externalRelAttribute: 'noopener noreferrer',
            activeClass: 'router-link-active',
            exactActiveClass: 'router-link-exact-active',
            prefetchedClass: undefined, // can be any valid string class name
            trailingSlash: undefined, // can be 'append' or 'remove'
         },
      },
      payloadExtraction: false,
      renderJsonPayloads: true,
      viewTransition: true,
      componentIslands: true,
   },
   modules: [
      '@nuxtjs/tailwindcss',
      'shadcn-nuxt',
      '@nuxt/eslint',
      '@nuxt/test-utils/module',
      '@nuxt/image',
      '@nuxtjs/google-fonts',
      '@nuxtjs/fontaine',
      'nuxt-delay-hydration',
      '@nuxtjs/critters',
      'nuxt-vitalizer',
   ],
   devtools: devToolsConfig,
   image: moduleConfigs.image,
   googleFonts: googleFontsConfig,
   tailwindcss: tailwindConfig,
   runtimeConfig,
   components: {
      dirs: [
         {
            path: '~/components',
            pathPrefix: false,
            priority: 0,
         },
      ],
      global: true,
   },
   delayHydration: {
      // enables nuxt-delay-hydration in dev mode for testing
      // NOTE: you should disable this once you've finished testing, it will break HMR
      debug: process.env.NODE_ENV === 'development',
      mode: 'mount',
      include: ['/blog/**'],
      exclude: ['/admin/**'],
   },
   shadcn: {
      /**
       * Prefix for all the imported component
       */
      prefix: '',
      /**
       * Directory that the component lives in.
       * @default "./components/ui"
       */
      componentDir: './components/ui',
   },
   vitalizer: {
      // Remove the render-blocking entry CSS
      disableStylesheets: 'entry',
   },
   critters: {
      // Inline critical CSS
      preload: 'swap',
      // Minimize critical CSS
      minimumExternalSize: 4096,
      // Reduce unused selectors
      pruneSource: true,
      // Inline fonts
      inlineFonts: true,
      // Reduce critical CSS size
      reduceInlineStyles: true,
   },
   routeRules: {
      '/': { delayHydration: 'mount' },
      '/blog/**': { delayHydration: 'mount' },
      '/api/**': { cors: true, headers: { 'cache-control': 's-maxage=3600' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public,max-age=31536000,immutable' } },
   },
   app: {
      head: {
         meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
            { name: 'referrer', content: 'strict-origin-when-cross-origin' },
         ],
         link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
         ],
         htmlAttrs: {
            lang: 'en',
         },
      },
      pageTransition: {
         name: 'page',
         mode: 'out-in',
      },
   },
   vite: {
      vue: {
         script: {
            defineModel: true,
            propsDestructure: true,
         },
      },
      build: {
         reportCompressedSize: true,
         chunkSizeWarningLimit: 1000,
         cssMinify: true,
         rollupOptions: {
            output: {
               manualChunks(id) {
                  if (id.includes('node_modules')) {
                     return id.split('node_modules/')[1].split('/')[0];
                  }
               },
            },
         },
      },
      optimizeDeps: {
         include: ['vue', 'vue-router'],
         exclude: ['vue-demi'],
      },
   },
   build: {
      transpile: [],
      analyze: process.env.ANALYZE === 'true',
   },
   hooks: {
      'build:manifest': manifest => {
         // Iterate over all entries in the manifest
         for (const [key, entry] of Object.entries(manifest)) {
            const file = manifest[key];

            if (file.prefetch) {
               file.prefetch = false;
            }

            // Prevents inclusion of <link rel="stylesheet" /> during SSR since styles are inlined anyway (checked with Postman)
            if (file.resourceType === 'script') {
               file.css = [];
            }
            // console.log(key, entry);
            if (entry.resourceType === 'script') {
               entry.prefetch = false;
               entry.preload = false;
            }
         }
      },
   },
   nitro: {
      compressPublicAssets: true,
      minify: true,
      timing: true,
      serverAssets: [
         {
            baseName: 'assets',
            dir: './assets',
         },
      ],
      // Prerender static routes for faster load
      prerender: {
         crawlLinks: true,
         routes: ['/'],
         ignore: ['/admin'],
      },
      // Configure caching strategy
      storage: {
         cache: {
            driver: 'fs',
            base: './.cache',
         },
      },
   },
});
