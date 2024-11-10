<template>
   <section class="bg-slate-950 py-24 text-white">
      <div class="container mx-auto px-4 lg:px-24">
         <h2 class="mb-4 text-center text-4xl font-bold">Why choose our service?</h2>
         <p class="mx-auto mb-12 max-w-3xl text-center text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
         </p>
         <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
               v-for="(feature, index) in features"
               :key="index"
               class="rounded-lg border border-slate-800 bg-slate-900 p-6"
            >
               <div
                  class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800"
               >
                  <component
                     :is="feature.icon"
                     class="h-6 w-6 text-blue-500"
                  />
               </div>
               <h3 class="mb-2 text-xl font-semibold">{{ feature.title }}</h3>
               <p class="text-slate-400">{{ feature.description }}</p>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
   import { Cog, Check, Lock, Rocket, DollarSign, BarChart } from 'lucide-vue-next';

   const features = [
      {
         icon: Cog,
         title: 'Easy to use',
         description:
            'Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non.',
      },
      {
         icon: Check,
         title: 'Reliable',
         description: 'Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.',
      },
      {
         icon: Lock,
         title: 'Secure',
         description:
            'Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.',
      },
      {
         icon: Rocket,
         title: 'Fast',
         description:
            'Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.',
      },
      {
         icon: DollarSign,
         title: 'Affordable',
         description: 'Reprehenderit fugiat elit in do ipsum ut pariatur.',
      },
      {
         icon: BarChart,
         title: 'Scalable',
         description:
            'Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.',
      },
   ];
</script>
