<template>
   <div class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
         <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div
               v-for="(feature, index) in features"
               :key="index"
               class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:transform"
            >
               <div class="mb-4 rounded-full bg-blue-100 p-4">
                  <component
                     :is="feature.icon"
                     class="h-8 w-8 text-blue-600"
                  />
               </div>
               <h3 class="mb-2 text-xl font-bold">{{ feature.title }}</h3>
               <p class="text-gray-600">{{ feature.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
   import { defineComponent, h } from 'vue';

   const TruckIcon = defineComponent({
      render: () =>
         h(
            'svg',
            {
               xmlns: 'http://www.w3.org/2000/svg',
               fill: 'none',
               viewBox: '0 0 24 24',
               stroke: 'currentColor',
            },
            [
               h('path', {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  'd': 'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20',
               }),
            ],
         ),
   });

   const BoxIcon = defineComponent({
      render: () =>
         h(
            'svg',
            {
               xmlns: 'http://www.w3.org/2000/svg',
               fill: 'none',
               viewBox: '0 0 24 24',
               stroke: 'currentColor',
            },
            [
               h('path', {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  'd': 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
               }),
            ],
         ),
   });

   const DollarIcon = defineComponent({
      render: () =>
         h(
            'svg',
            {
               xmlns: 'http://www.w3.org/2000/svg',
               fill: 'none',
               viewBox: '0 0 24 24',
               stroke: 'currentColor',
            },
            [
               h('path', {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  'd': 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
               }),
            ],
         ),
   });

   const HeadsetIcon = defineComponent({
      render: () =>
         h(
            'svg',
            {
               xmlns: 'http://www.w3.org/2000/svg',
               fill: 'none',
               viewBox: '0 0 24 24',
               stroke: 'currentColor',
            },
            [
               h('path', {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  'd': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
               }),
            ],
         ),
   });

   const features = [
      {
         icon: TruckIcon,
         title: 'Free Shipping',
         description: 'Enjoy free shipping on all orders',
      },
      {
         icon: BoxIcon,
         title: 'Product Replace',
         description: 'Easy Product Replacement Available!',
      },
      {
         icon: DollarIcon,
         title: 'EMI Available',
         description: 'No cost EMI available on all major credit cards',
      },
      {
         icon: HeadsetIcon,
         title: '24/7 Support',
         description: 'Dedicated 24/7 support via chat and email',
      },
   ];
</script>
