import { defineEventHandler } from 'h3';
import type { BlogPageData } from '~/types/blog';

const CACHE_KEY = 'blog-page-data';
const CACHE_TTL = 3600; // 1 hour

export default defineEventHandler(async () => {
   // Get storage instance
   const storage = useStorage();

   // Try to get cached data
   const cachedData = await storage.getItem<BlogPageData>(CACHE_KEY);
   if (cachedData) {
      return cachedData;
   }
   // Simulate database fetch
   const data: BlogPageData = {
      data: {
         heading: 'My awesome blog page',
         subheading: 'Read the latest news from our company',
         posts: [
            {
               id: 1,
               title: 'Awesome second post',
               description: "This is my first post. I'm so excited!",
               imageUrl: '/images/cover.avif',
               tags: ['first', 'post'],
               author: {
                  name: 'Tony Stark',
                  avatar: '/images/tony-stark.avif',
               },
               date: '3/1/2023',
            },
            {
               id: 2,
               title: 'Favorite Things',
               description: "In this post I'm going to tell you about my favorite things.",
               imageUrl: '/images/cover.avif',
               tags: ['first', 'post'],
               author: {
                  name: 'Elon Musk',
                  avatar: '/images/elon-musk.avif',
               },
               date: '2/28/2023',
            },
         ],
      },
      seo: {
         title: 'Blog Page',
         meta: {
            name: 'description',
            content: 'Welcome to out blog page',
         },
      },
   };

   // Cache the data
   await storage.setItem(CACHE_KEY, data, {
      ttl: CACHE_TTL,
   });

   return data;
});
