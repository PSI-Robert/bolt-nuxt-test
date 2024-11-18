<script setup lang="ts">
   import TheStickyNavbar from '@/components/layout/TheStickyNavbar.vue';
   import LazyTheFooter from '@/components/layout/TheFooter.vue';

   const isScrolled = ref(false);

   if (import.meta.client) {
      onMounted(() => {
         const updateScroll = () => {
            isScrolled.value = window.scrollY > 0;
         };
         window.addEventListener('scroll', updateScroll, { passive: true });
         updateScroll();

         onUnmounted(() => {
            window.removeEventListener('scroll', updateScroll);
         });
      });
   }
</script>

<template>
   <div class="min-h-screen bg-brand-dark1">
      <TheStickyNavbar :is-scrolled="isScrolled" />
      <slot />

      <LazyTheFooter />
   </div>
</template>
