<script setup lang="ts">
   import { Card, CardContent } from '@/components/ui/card';
   import { Button } from '@/components/ui/button';
   import { HeartPulse, ThumbsUp, PhoneCall } from 'lucide-vue-next';
   import { Skeleton } from '@/components/ui/skeleton';
   import type { Feature, Benefit } from '@/types/home';

   defineProps<Feature>();

   const isVisible = ref(false);

   const getIcon = (type: Benefit['icon']) => {
      switch (type) {
         case 'call':
            return PhoneCall;
         case 'heart':
            return HeartPulse;
         case 'thumbs-up':
            return ThumbsUp;
         default:
            return HeartPulse;
      }
   };

   onMounted(() => {
      isVisible.value = true;
   });
</script>

<template>
   <Card
      data-test-id="feature-card"
      class="overflow-hidden border-0 bg-primary-800/50 transition-all duration-500"
      :class="{
         'translate-y-4 opacity-0': !isVisible,
         'translate-y-0 opacity-100': isVisible,
      }"
   >
      <CardContent class="p-8">
         <div
            class="flex flex-col gap-8 md:flex-row"
            :class="{ 'md:flex-row-reverse': reversed }"
         >
            <!-- Image Section -->
            <div
               class="flex-1"
               data-test-id="feature-image-container"
            >
               <Skeleton
                  v-if="loading"
                  class="aspect-[16/9] rounded-lg"
                  data-test-id="feature-image-skeleton"
               />
               <div
                  v-else
                  class="aspect-[16/9] overflow-hidden rounded-lg bg-primary-700/50"
               >
                  <nuxt-img
                     :src="imageUrl"
                     :alt="title"
                     class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                     :modifiers="{
                        format: 'webp',
                        quality: 80,
                        loading: 'lazy',
                        placeholder: true,
                     }"
                  />
               </div>
            </div>

            <!-- Content Section -->
            <div
               class="flex-1 space-y-6"
               data-test-id="feature-content"
            >
               <div class="space-y-2">
                  <Skeleton
                     v-if="loading"
                     class="h-8 w-3/4"
                     data-test-id="feature-title-skeleton"
                  />
                  <h3
                     v-else
                     class="text-2xl font-bold text-white"
                     data-test-id="feature-title"
                  >
                     {{ title }}
                  </h3>

                  <Skeleton
                     v-if="loading"
                     class="h-20 w-full"
                     data-test-id="feature-description-skeleton"
                  />
                  <p
                     v-else
                     class="text-gray-400"
                     data-test-id="feature-description"
                  >
                     {{ description }}
                  </p>
               </div>

               <Skeleton
                  v-if="loading"
                  class="h-10 w-32"
                  data-test-id="feature-button-skeleton"
               />
               <Button
                  v-else
                  variant="link"
                  data-test-id="feature-learn-more"
                  class="h-auto p-0 text-white transition-transform hover:translate-x-2"
               >
                  Learn more <span class="ml-2">→</span>
               </Button>

               <div
                  class="mt-8 grid grid-cols-2 gap-4"
                  data-test-id="feature-benefits-grid"
               >
                  <template v-if="loading">
                     <div
                        v-for="n in 3"
                        :key="n"
                        class="space-y-2"
                        data-test-id="feature-benefit-skeleton"
                     >
                        <Skeleton class="h-6 w-6" />
                        <Skeleton class="h-6 w-3/4" />
                        <Skeleton class="h-16 w-full" />
                     </div>
                  </template>
                  <template v-else>
                     <div
                        v-for="(benefit, index) in benefits"
                        :key="index"
                        :data-test-id="`feature-benefit-${index}`"
                        class="space-y-2 transition-all duration-300 hover:-translate-y-1"
                     >
                        <component
                           :is="getIcon(benefit.icon)"
                           class="h-6 w-6 text-accent-brown"
                           :data-test-id="`feature-benefit-icon-${index}`"
                        />
                        <h4
                           class="font-semibold text-white"
                           :data-test-id="`feature-benefit-title-${index}`"
                        >
                           {{ benefit.title }}
                        </h4>
                        <p
                           class="text-sm text-gray-400"
                           :data-test-id="`feature-benefit-description-${index}`"
                        >
                           {{ benefit.description }}
                        </p>
                     </div>
                  </template>
               </div>
            </div>
         </div>
      </CardContent>
   </Card>
</template>
