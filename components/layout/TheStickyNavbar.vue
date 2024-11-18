<script setup lang="ts">
   interface Props {
      isScrolled: boolean;
   }

   defineProps<Props>();

   const navigationItems = [
      { label: 'Pricing', to: '/pricing' },
      { label: 'Blog', to: '/blog' },
   ];
</script>

<template>
   <header
      class="fixed left-0 right-0 top-0 z-50 transition-all duration-200"
      :class="[
         isScrolled
            ? 'border-b border-gray-800 bg-brand-dark1/80 backdrop-blur-sm'
            : 'bg-transparent',
      ]"
   >
      <nav class="container mx-auto flex h-16 items-center justify-between px-4">
         <!-- Logo -->
         <NuxtLink
            to="/"
            class="flex items-center space-x-2"
            prefetch4
         >
            <svg
               width="120"
               height="40"
               viewBox="0 0 120 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               class="h-8"
            >
               <path
                  d="M0 0L15 40L30 0"
                  fill="#46d39e"
               />
               <text
                  x="35"
                  y="28"
                  font-size="24"
                  font-weight="bold"
                  fill="#fff"
               >
                  acme
               </text>
            </svg>
         </NuxtLink>

         <!-- Navigation -->
         <div class="flex items-center space-x-8">
            <!-- Nav Items -->
            <div class="hidden items-center space-x-6 md:flex">
               <NuxtLink
                  v-for="item in navigationItems"
                  :key="item.label"
                  :to="item.to"
                  class="text-sm text-gray-300 transition-colors hover:text-white"
               >
                  {{ item.label }}
               </NuxtLink>
            </div>
         </div>
      </nav>
   </header>
</template>
