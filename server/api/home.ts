import { defineEventHandler } from 'h3';
import type { HomePageData } from '@/types/home';

const CACHE_KEY = 'home-page-data';
const CACHE_TTL = 3600; // 1 hour

export default defineEventHandler(async () => {
   // Get storage instance
   const storage = useStorage();

   // Try to get cached data
   const cachedData = await storage.getItem<HomePageData>(CACHE_KEY);
   if (cachedData) {
      return cachedData;
   }
   // Simulate database fetch
   const data: HomePageData = {
      banner: {
         badge: {
            label: 'New',
            content: 'Amazing feature of your SaaS',
         },
         heading: 'Your revolutionary\nNuxt 3 SaaS',
         subheading: 'This is a demo application built with supastarter...',
         tools: [
            {
               icon: 'SupaIcon',
               name: 'Supabase',
               url: 'https://supabase.com',
            },
            {
               icon: 'VercelIcon',
               name: 'Vercel',
               url: 'https://vercel.com',
            },
            {
               icon: 'PrismaIcon',
               name: 'Prisma',
               url: 'https://prisma.io',
            },
            {
               icon: 'TailwindIcon',
               name: 'Tailwind CSS',
               url: 'https://tailwindcss.com',
            },
         ],
      },
      featureSection: {
         heading: 'Features your clients will love',
         subheading: 'In this section you can showcase the features of your SaaS.',
         features: [
            {
               id: '1',
               title: 'Feature Test A',
               description:
                  'This is a brilliant feature. And below you can see some reasons why. This is basically just a dummy text.',
               imageUrl: 'https://picsum.photos/seed/picsum/1600/900',
               benefits: [
                  {
                     icon: 'heart',
                     title: 'Benefit 1',
                     description: 'This is a brilliant benefit.',
                  },
                  {
                     icon: 'thumbs-up',
                     title: 'Benefit 2',
                     description: 'This is a brilliant benefit.',
                  },
               ],
            },
            {
               id: '2',
               title: 'Feature B',
               description:
                  'This is a brilliant feature. And below you can see some reasons why. This is basically just a dummy text.',
               imageUrl: 'https://picsum.photos/seed/picsum/1600/900',
               benefits: [
                  {
                     icon: 'heart',
                     title: 'Benefit 1',
                     description: 'This is a brilliant benefit.',
                  },
                  {
                     icon: 'thumbs-up',
                     title: 'Benefit 2',
                     description: 'This is a brilliant benefit.',
                  },
               ],
            },
            {
               id: '3',
               title: 'Feature C',
               description:
                  'This is a brilliant feature. And below you can see some reasons why. This is basically just a dummy text.',
               imageUrl: 'https://picsum.photos/seed/picsum/1600/900',
               benefits: [
                  {
                     icon: 'heart',
                     title: 'Benefit 1',
                     description: 'This is a brilliant benefit.',
                  },
                  {
                     icon: 'call',
                     title: 'Benefit 3',
                     description: 'This is a brilliant benefit.',
                  },
               ],
            },
         ],
      },
      earlyAccessSection: {
         heading: 'Get early access',
         subheading: 'Be among the first to get access to supastarter.nuxt.',
      },
      seo: {
         title: 'Acme - Your Revolutionary Nuxt 3',
         meta: {
            name: 'description',
            content: 'Nuxt 3 Revolutionary Boilerplate',
         },
      },
   };

   // Cache the data
   await storage.setItem(CACHE_KEY, data, {
      ttl: CACHE_TTL,
   });

   return data;
});
