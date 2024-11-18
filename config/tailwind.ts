export const tailwindConfig = {
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
} as const;
