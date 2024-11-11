<script setup lang="ts">
   // FeaturedCollection structure
   interface FeaturedCollection {
      title: string;
      description: string;
      image: string;
      buttonText: string;
      link: string;
   }

   // FeaturedCollection data
   const collection: FeaturedCollection = {
      title: 'Get Ready for our new Bold Collections!',
      description:
         'Introducing Our New Bold Collections! Elevate your style with daring designs and vibrant statements. Explore striking patterns and bold colors that redefine your wardrobe. Get ready to embrace the extraordinary!',
      image: 'https://picsum.photos/seed/picsum/1600/900',
      buttonText: 'View Collections',
      link: '/collections/bold',
   };
</script>

<template>
   <section class="container mx-auto px-4 py-16">
      <div class="grid gap-12 md:grid-cols-2">
         <!-- Image Section -->
         <div class="overflow-hidden rounded-3xl bg-gray-100">
            <nuxt-img
               :src="collection.image"
               :alt="collection.title"
               class="h-full w-full object-cover"
               loading="lazy"
               width="800"
               height="1000"
               format="webp"
               quality="90"
            />
         </div>

         <!-- Content Section -->
         <div class="flex flex-col justify-center">
            <h2 class="mb-6 font-serif text-5xl font-bold leading-tight text-[#000080]">
               {{ collection.title }}
            </h2>

            <p class="mb-8 text-lg leading-relaxed text-gray-600">
               {{ collection.description }}
            </p>

            <NuxtLink
               :to="collection.link"
               class="inline-flex w-fit items-center bg-[#000080] px-8 py-4 font-medium text-white transition-colors hover:bg-[#000066]"
            >
               {{ collection.buttonText }}
            </NuxtLink>
         </div>
      </div>
   </section>
</template>

<style scoped>
   .font-serif {
      font-family: 'Playfair Display', serif;
   }

   /* Optional: Add animation for content */
   @keyframes fadeInRight {
      from {
         opacity: 0;
         transform: translateX(20px);
      }
      to {
         opacity: 1;
         transform: translateX(0);
      }
   }

   .grid > div:last-child {
      animation: fadeInRight 0.8s ease-out;
   }
</style>
