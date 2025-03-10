export function validateEnvironment() {
   const requiredVariables = ['NUXT_PUBLIC_API_BASE', 'API_SECRET', 'NODE_ENV'];
   console.log(process.env.NODE_ENV === 'test');
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
