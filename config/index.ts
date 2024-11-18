import type { ModuleOptions as DevtoolsOptions } from '@nuxt/devtools';
import type { ModuleOptions as ImageOptions } from '@nuxt/image';
import type { ModuleOptions as GoogleFontsOptions } from '@nuxtjs/google-fonts';
import type { ModuleOptions as TailwindOptions } from '@nuxtjs/tailwindcss';

export * from './env-validator';
export * from './google-fonts';
export * from './tailwind';

// Development tools configuration
export const devToolsConfig: Partial<DevtoolsOptions> = {
   enabled: process.env.NODE_ENV === 'development',
   timeline: {
      enabled: true,
   },
} as const;

// Module configurations
export const moduleConfigs = {
   image: {
      format: ['webp', 'avif'] as const,
      quality: 80,
      screens: {
         'xs': 320,
         'sm': 640,
         'md': 768,
         'lg': 1024,
         'xl': 1280,
         '2xl': 1536,
      },
   } satisfies Partial<ImageOptions>,
} as const;

export const googleFontsConfig: Partial<GoogleFontsOptions> = {
   families: {
      Poppins: [400, 500, 600], // Changed format
   },
   display: 'swap',
   prefetch: true,
   preconnect: true,
   preload: true,
   base64: true,
   download: true,
} as const;

export const tailwindConfig: Partial<TailwindOptions> = {
   exposeConfig: true,
   config: {
      darkMode: 'class',
      content: [
         './components/**/*.{vue,js,ts}',
         './layouts/**/*.vue',
         './pages/**/*.vue',
         './plugins/**/*.{js,ts}',
         './nuxt.config.{js,ts}',
         './app.vue',
      ],
      theme: {
         container: {
            center: true,
            padding: '2rem',
            screens: {
               '2xl': '1400px',
            },
         },
      },
   },
   viewer: process.env.NODE_ENV === 'development',
};
