import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
   darkMode: ['class'],
   safelist: ['dark'],
   prefix: '',

   content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './app.vue',
      './assets/css/**/*.css',
   ],

   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         // Custom colors merged with shadcn system
         colors: {
            // Brand Colors
            brand: {
               dark1: '#0d1118',
               dark2: '#0c1417',
               dark3: '#11181d',
               dark4: '#020816',
               green: '#46d39e',
               brown: '#ac8655',
            },
            // ShadCN UI System Colors
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
               // Additional primary shades
               900: '#0d1118',
               800: '#0c1417',
               700: '#11181d',
               600: '#020816',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
               green: '#46d39e',
               brown: '#ac8655',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
         },
         fontFamily: {
            sans: ['Poppins', 'Poppins fallback', 'sans-serif', ...fontFamily.sans],
            poppins: ['Poppins', 'sans-serif'],
         },
         borderRadius: {
            xl: 'calc(var(--radius) + 4px)',
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
            'collapsible-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-collapsible-content-height)' },
            },
            'collapsible-up': {
               from: { height: 'var(--radix-collapsible-content-height)' },
               to: { height: '0' },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'collapsible-down': 'collapsible-down 0.2s ease-in-out',
            'collapsible-up': 'collapsible-up 0.2s ease-in-out',
         },
      },
   },
   plugins: [animate],
} satisfies Config;
