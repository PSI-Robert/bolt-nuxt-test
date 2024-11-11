<script setup lang="ts">
   // Collection structure
   interface Collection {
      id: number;
      title: string;
      image: string;
      link: string;
      backgroundColor?: string;
   }

   // Collection data
   const collections = ref<Collection[]>([
      {
         id: 1,
         title: 'Our Collections',
         image: 'https://picsum.photos/seed/picsum/200/300',
         link: '/collections/casual',
         backgroundColor: 'bg-gray-100',
      },
      {
         id: 2,
         title: 'Our Collections',
         image: 'https://picsum.photos/seed/picsum/200/300',
         link: '/collections/playtime',
         backgroundColor: 'bg-[#F5F0EB]',
      },
      {
         id: 3,
         title: 'Our Collections',
         image: 'https://picsum.photos/seed/picsum/200/300',
         link: '/collections/costume',
         backgroundColor: 'bg-[#FFE4B5]',
      },
      {
         id: 4,
         title: 'Our Collections',
         image: 'https://picsum.photos/seed/picsum/200/300',
         link: '/collections/casual',
         backgroundColor: 'bg-gray-100',
      },
      {
         id: 5,
         title: 'Our Collections',
         image: 'https://picsum.photos/seed/picsum/200/300',
         link: '/collections/playtime',
         backgroundColor: 'bg-[#F5F0EB]',
      },
      {
         id: 6,
         title: 'Our Collections',
         image: 'https://picsum.photos/seed/picsum/200/300',
         link: '/collections/costume',
         backgroundColor: 'bg-[#FFE4B5]',
      },
   ]);
</script>

<template>
   <section class="container mx-auto px-4 py-16">
      <!-- Section Title -->
      <h2 class="mb-12 text-center font-serif text-5xl font-bold text-[#000080]">
         The game with our<br />new additions!
      </h2>

      <!-- Collections Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         <NuxtLink
            v-for="collection in collections"
            :key="collection.id"
            :to="collection.link"
            class="group relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2"
         >
            <!-- Image Container -->
            <div :class="[collection.backgroundColor, 'aspect-square w-full overflow-hidden']">
               <nuxt-img
                  :src="collection.image"
                  :alt="collection.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="600"
                  format="webp"
                  quality="90"
               />
            </div>

            <!-- Collection Title -->
            <div class="absolute bottom-0 left-0 w-full p-6">
               <h3 class="font-serif text-2xl font-bold text-[#000080]">
                  {{ collection.title }}
               </h3>
            </div>

            <!-- Hover Overlay -->
            <div
               class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"
            ></div>
         </NuxtLink>
      </div>
   </section>
</template>

<style scoped>
   .font-serif {
      font-family: 'Playfair Display', serif;
   }

   /* Optional: Add a subtle shadow on hover */
   .group:hover {
      box-shadow:
         0 20px 25px -5px rgb(0 0 0 / 0.05),
         0 8px 10px -6px rgb(0 0 0 / 0.05);
   }
</style>
