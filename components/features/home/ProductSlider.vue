<script setup lang="ts">
   interface Product {
      id: number;
      title: string;
      image: string;
      price: number;
      originalPrice?: number;
      rating?: number;
      reviews?: number;
      badge?: 'New' | 'Sale';
      category: string;
   }

   const products = ref<Product[]>([
      {
         id: 1,
         title: 'Adorable BunnyHop Baby Shoes',
         image: 'https://picsum.photos/seed/picsum/200/300',
         price: 16.99,
         badge: 'New',
         category: 'kids',
      },
      {
         id: 2,
         title: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
         image: 'https://picsum.photos/seed/picsum/200/300',
         price: 49.99,
         badge: 'New',
         category: 'kids',
      },
      {
         id: 3,
         title: "AeroFit Women's Fitness Performance Jacket",
         image: 'https://picsum.photos/seed/picsum/200/300',

         price: 87.99,
         rating: 4.0,
         reviews: 4,
         badge: 'New',
         category: 'women',
      },
      {
         id: 4,
         title: 'All-in-One Smart Casual Outfit Set',
         image: 'https://picsum.photos/seed/picsum/200/300',
         price: 168.96,
         originalPrice: 176.96,
         rating: 2.0,
         reviews: 2,
         badge: 'Sale',
         category: 'men',
      },
      {
         id: 5,
         title: 'All-in-One Smart Casual Outfit Set',
         image: 'https://picsum.photos/seed/picsum/200/300',
         price: 168.96,
         originalPrice: 176.96,
         rating: 2.0,
         reviews: 2,
         badge: 'Sale',
         category: 'men',
      },
   ]);

   const slidePosition = ref(0);
   const itemsPerPage = 4;

   const nextSlide = () => {
      if (slidePosition.value < products.value.length - itemsPerPage) {
         slidePosition.value++;
      }
   };

   const prevSlide = () => {
      if (slidePosition.value > 0) {
         slidePosition.value--;
      }
   };
</script>

<template>
   <section class="container mx-auto px-4 py-12">
      <div class="mb-8 flex items-center justify-between">
         <h2 class="text-3xl font-bold">New Products</h2>
         <div class="flex space-x-4">
            <button
               class="rounded-full p-2 hover:bg-gray-100"
               :disabled="slidePosition === 0"
               @click="prevSlide"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
               class="rounded-full p-2 hover:bg-gray-100"
               :disabled="slidePosition >= products.length - itemsPerPage"
               @click="nextSlide"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
         </div>
      </div>

      <div class="relative overflow-hidden">
         <div
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${slidePosition * 25}%)` }"
         >
            <div
               v-for="product in products"
               :key="product.id"
               class="w-1/4 flex-shrink-0 px-3"
            >
               <div class="group relative">
                  <!-- Product Image & Badge -->
                  <div class="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
                     <nuxt-img
                        :src="product.image"
                        :alt="product.title"
                        class="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                     />
                     <span
                        v-if="product.badge"
                        :class="{
                           'bg-[#000080]': product.badge === 'New',
                           'bg-red-500': product.badge === 'Sale',
                        }"
                        class="absolute left-3 top-3 rounded px-2 py-1 text-xs font-medium text-white"
                     >
                        {{ product.badge }}
                     </span>
                  </div>

                  <!-- Product Info -->
                  <div>
                     <h3 class="mb-2 text-lg font-medium">{{ product.title }}</h3>

                     <!-- Rating -->
                     <div
                        v-if="product.rating"
                        class="mb-2 flex items-center"
                     >
                        <span class="mr-1 font-medium">{{ product.rating }}</span>
                        <svg
                           class="h-4 w-4 text-yellow-400"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                        >
                           <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                           />
                        </svg>
                        <span class="ml-1 text-sm text-gray-600">{{ product.reviews }}</span>
                     </div>

                     <!-- Price -->
                     <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-500">As low as</span>
                        <span class="text-lg font-bold">${{ product.price }}</span>
                        <span
                           v-if="product.originalPrice"
                           class="text-sm text-gray-500 line-through"
                        >
                           ${{ product.originalPrice }}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- View All Button -->
      <div class="mt-12 text-center">
         <NuxtLink
            to="/products"
            class="inline-block rounded-full border border-[#000080] px-8 py-3 text-[#000080] transition-colors hover:bg-[#000080] hover:text-white"
         >
            View All
         </NuxtLink>
      </div>
   </section>
</template>

<style scoped>
   button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }

   .group:hover img {
      transform: scale(1.05);
   }
</style>
