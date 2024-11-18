<script setup lang="ts">
   import type { BannerData } from '@/types/home';

   interface Props {
      data: BannerData;
      loading?: boolean;
   }

   defineProps<Props>();
</script>

<template>
   <section class="relative overflow-hidden py-32">
      <div class="container mx-auto px-4 text-center">
         <!-- New Badge -->
         <div
            v-if="!loading"
            class="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-dark4/40 px-4 py-2 text-sm"
         >
            <span class="h-2 w-2 rounded-full bg-accent-brown"></span>
            <span class="font-medium text-accent-brown">{{ data.badge.label }}:</span>
            <span class="text-gray-300">{{ data.badge.content }}</span>
         </div>
         <Skeleton
            v-else
            class="mx-auto mb-6 h-8 w-64"
         />

         <!-- Content -->
         <template v-if="!loading">
            <h1
               class="mx-auto mb-6 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl"
            >
               {{ data.heading }}
            </h1>
            <p class="text-gray-300">
               {{ data.subheading }}
            </p>
         </template>

         <Skeleton
            v-else
            class="mx-auto mb-6 h-32 w-3/4"
         />

         <!-- Tools Section -->
         <div class="mt-20">
            <p class="mb-6 text-sm font-medium uppercase tracking-wider text-gray-500">
               BUILT & SHIPPED WITH THESE AWESOME TOOLS
            </p>
            <div class="flex items-center justify-center space-x-12">
               <template v-if="!loading">
                  <NuxtLink
                     v-for="tool in data.tools"
                     :key="tool.name"
                     :to="tool.url"
                     target="_blank"
                     rel="noopener noreferrer"
                     class="opacity-50 transition-opacity hover:opacity-100"
                  >
                     <component
                        :is="tool.icon"
                        class="h-8 w-8 text-gray-400"
                        :aria-label="tool.name"
                     />
                  </NuxtLink>
               </template>
               <template v-else>
                  <Skeleton
                     v-for="n in 4"
                     :key="n"
                     class="h-8 w-8"
                  />
               </template>
            </div>
         </div>
      </div>
   </section>
</template>
