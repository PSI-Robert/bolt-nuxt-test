<template>
   <div class="relative z-10 -mt-20 px-4">
      <div class="mx-auto max-w-5xl rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
         <div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
            <div
               v-for="(stat, index) in stats"
               :key="index"
               class="text-center"
            >
               <h3 class="mb-2 text-4xl font-bold text-white">{{ stat.value }}</h3>
               <h4 class="mb-2 text-xl font-semibold text-white">{{ stat.title }}</h4>
               <p class="text-slate-400">{{ stat.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
   const stats = [
      {
         value: '70+',
         title: 'Coded Elements',
         description: 'From buttons, to inputs, navbars, alerts or cards, you are covered',
      },
      {
         value: '15+',
         title: 'Design Blocks',
         description: 'Mix the sections, change the colors and unleash your creativity',
      },
      {
         value: '4',
         title: 'Pages',
         description: 'Save 3-4 weeks of work when you use our pre-made pages for your website',
      },
   ];
</script>
