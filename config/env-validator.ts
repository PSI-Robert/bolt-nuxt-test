export function validateEnvironment() {
   const requiredVariables = ['NUXT_PUBLIC_API_BASE', 'API_SECRET', 'NODE_ENV'];

   console.log(process.env.NODE_ENV === 'test');

   const missingVariables = requiredVariables.filter(varName => !process.env[varName]);

   if (missingVariables.length > 0) {
      throw new Error(`Missing required environment variables:\n${missingVariables.join('\n')}`);
   }

   // Validate variable formats if needed
   const apiBase = process.env.NUXT_PUBLIC_API_BASE;
   if (apiBase && !apiBase.startsWith('http')) {
      throw new Error('NUXT_PUBLIC_API_BASE must be a valid URL');
   }
}

export const runtimeConfig = {
   public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      environment: process.env.NODE_ENV,
   },
   private: {
      apiSecret: process.env.API_SECRET,
   },
} as const;
