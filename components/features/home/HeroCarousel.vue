<script setup lang="ts">
   // Slide structure
   interface Slide {
      image: string;
      title: string;
      subtitle: string;
      buttonText: string;
   }

   // Slide data
   const slides: Slide[] = [
      {
         image: 'https://picsum.photos/seed/picsum/1600/900',
         title: 'Get Ready',
         subtitle: 'For New Collection',
         buttonText: 'View Collections →',
      },
      {
         image: 'https://picsum.photos/seed/picsum/1600/900',
         title: 'New Arrivals',
         subtitle: 'Summer Collection 2024',
         buttonText: 'View Collections →',
      },
      {
         image: 'https://picsum.photos/seed/picsum/1600/900',
         title: 'Special Offer',
         subtitle: 'Limited Time Collection',
         buttonText: 'View Collections →',
      },
      {
         image: 'https://picsum.photos/seed/picsum/1600/900',
         title: 'Special Offer',
         subtitle: 'Limited Time Collection',
         buttonText: 'View Collections →',
      },
   ];

   // inline composable for carousel functionality
   function useCarousel(slides: Slide[]) {
      const currentSlide = ref<number>(0);

      const nextSlide = () => {
         currentSlide.value = (currentSlide.value + 1) % slides.length;
      };

      const prevSlide = () => {
         currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
      };

      const goToSlide = (index: number) => {
         currentSlide.value = index;
      };

      return {
         currentSlide,
         nextSlide,
         prevSlide,
         goToSlide,
      };
   }

   const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(slides);

   // Expose methods for potential parent component use
   defineExpose({ currentSlide, nextSlide, prevSlide, goToSlide });
</script>

<template>
   <div class="relative">
      <div class="overflow-hidden">
         <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
         >
            <div
               v-for="(slide, index) in slides"
               :key="index"
               class="w-full flex-shrink-0"
            >
               <div class="relative h-[600px]">
                  <nuxt-img
                     :src="slide.image"
                     :alt="slide.title"
                     width="1920"
                     height="1080"
                     loading="lazy"
                     decoding="async"
                     format="webp"
                     quality="95"
                     class="h-full w-full object-cover"
                  />

                  <div class="absolute inset-0 flex items-center">
                     <div class="container mx-auto px-16">
                        <div class="max-w-2xl">
                           <h2
                              class="mb-6 font-serif text-7xl font-bold leading-tight text-[#000080]"
                           >
                              {{ slide.title }}
                           </h2>
                           <p class="mb-10 font-serif text-5xl leading-tight text-[#000080]">
                              {{ slide.subtitle }}
                           </p>
                           <NuxtLink
                              to="/collections"
                              class="inline-flex items-center rounded bg-[#000080] px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:bg-[#000066]"
                           >
                              {{ slide.buttonText }}
                           </NuxtLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Navigation Arrows -->
      <button
         class="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-4 shadow-md transition-all hover:bg-white"
         @click="prevSlide"
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-[#000080]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
         >
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M15 19l-7-7 7-7"
            />
         </svg>
      </button>
      <button
         class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-4 shadow-md transition-all hover:bg-white"
         @click="nextSlide"
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-[#000080]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
         >
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M9 5l7 7-7 7"
            />
         </svg>
      </button>

      <!-- Dots Navigation -->
      <div class="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-3">
         <button
            v-for="(_, index) in slides"
            :key="index"
            class="h-2 w-2 rounded-full transition-all duration-200"
            :class="currentSlide === index ? 'w-8 bg-[#000080]' : 'bg-gray-300'"
            @click="goToSlide(index)"
         ></button>
      </div>
   </div>
</template>
