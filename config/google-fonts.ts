export const googleFontsConfig = {
   families: {
      Poppins: {
         // Simple weight definition
         wght: [400, 500, 600],
         // Remove text parameter as it's causing issues
      },
   },
   display: 'swap',
   prefetch: true,
   preconnect: true,
   preload: true,
   base64: true,
   download: true,
} as const;
