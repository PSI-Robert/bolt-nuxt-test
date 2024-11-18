<script setup lang="ts">
   import HomeBanner from '@/components/features/home/HomeBanner.vue';
   import LazyFeaturesSection from '@/components/features/home/section/FeaturesSection.vue';
   import LazyEarlyAccessSignup from '@/components/features/home/section/EarlyAccessSignup.vue';
   import LazyErrorDisplay from '@/components/shared/BaseErrorDisplay.vue';

   import type { HomePageData } from '@/types/home';

   // Fetch all data for homepage
   const { data: pageData, status, error } = await useFetch<HomePageData>('/api/home');

   // SEO metadata
   useHead({
      title: computed(() => pageData.value?.seo.title || 'Nuxt Boilerplate'),
      meta: [
         {
            name: computed(() => pageData.value?.seo.meta.name || 'description'),
            content: computed(() => pageData.value?.seo.meta.content || 'content'),
         },
      ],
   });
</script>

<template>
   <div>
      <LazyErrorDisplay
         v-if="error"
         :error="error"
      />
      <template v-else>
         <HomeBanner
            v-if="pageData"
            :data="pageData.banner"
            :loading="status == 'pending'"
         />

         <DelayHydration>
            <LazyFeaturesSection
               :data="pageData?.featureSection"
               :loading="status == 'pending'"
            />
            <LazyEarlyAccessSignup
               :data="pageData?.earlyAccessSection"
               :loading="status == 'pending'"
            />
         </DelayHydration>
      </template>
   </div>
</template>
