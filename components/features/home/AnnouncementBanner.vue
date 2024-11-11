<script setup lang="ts">
   interface Banner {
      text: string;
      link: string;
   }

   // Props for reusability
   const props = defineProps<{
      banner?: Banner;
   }>();

   // Default banner if not provided through props
   const defaultBanner: Banner = {
      text: 'Get UPTO 40% OFF on your 1st order',
      link: '/shop',
   };

   // Use provided banner or default
   const banner = computed(() => props.banner || defaultBanner);
</script>

<template>
   <div class="relative bg-[#e9edfd] px-4 py-5 text-center">
      <div class="flex items-center justify-center space-x-2">
         <p class="text-lg font-medium">
            {{ banner.text }}
            <NuxtLink
               :to="banner.link"
               class="ml-1 font-bold text-[#000080] hover:underline"
            >
               SHOP NOW
            </NuxtLink>
         </p>
      </div>
   </div>
</template>
