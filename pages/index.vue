<template>
   <div>
      <ClientOnly>
         <lazy-hero-carousel />
         <lazy-announcement-banner />

         <div class="px-24">
            <lazy-product-slider />
            <lazy-collection-showcase />
            <lazy-featured-collection />
            <lazy-service-features />
         </div>
      </ClientOnly>
   </div>
</template>

<script setup lang="ts">
   import LazyHeroCarousel from '~/components/features/home/HeroCarousel.vue';
   import LazyAnnouncementBanner from '~/components/features/home/AnnouncementBanner.vue';
   import LazyProductSlider from '~/components/features/home/ProductSlider.vue';
   import LazyCollectionShowcase from '~/components/features/home/CollectionShowcase.vue';
   import LazyFeaturedCollection from '~/components/features/home/FeaturedCollection.vue';
   import LazyServiceFeatures from '~/components/features/home/ServiceFeatures.vue';
</script>
