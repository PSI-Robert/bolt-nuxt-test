<script setup lang="ts">
   import LazyFeatureCard from '../card/FeatureCard.vue';
   import type { featureSection } from '@/types/home';

   interface Props {
      data?: featureSection;
      loading?: boolean;
   }

   const props = defineProps<Props>();

   const features = computed(() => props.data?.features);
</script>

<template>
   <section class="bg-brand-dark4 px-4 py-20">
      <div class="container mx-auto">
         <div class="mb-16 text-center">
            <h2 class="mb-4 text-4xl font-bold text-white">{{ data?.heading }}</h2>
            <p class="text-gray-400">{{ data?.subheading }}</p>
         </div>

         <div class="space-y-8">
            <LazyFeatureCard
               v-for="(feature, index) in features"
               :id="feature.id"
               :key="index"
               :title="feature.title"
               :description="feature.description"
               :benefits="feature.benefits"
               :image-url="feature.imageUrl"
               :reversed="index % 2 !== 0"
               :loading="loading"
            />
         </div>
      </div>
   </section>
</template>
