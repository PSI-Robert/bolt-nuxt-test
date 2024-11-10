<template>
   <header
      class="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/75"
   >
      <div class="container mx-auto px-4">
         <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
               <NuxtLink
                  to="/"
                  class="flex items-center space-x-2"
               >
                  <span class="text-xl font-bold text-white">Praxxys Solutions Inc</span>
                  <Badge
                     variant="secondary"
                     class="bg-slate-800 text-blue-400"
                     >PSI</Badge
                  >
               </NuxtLink>
            </div>
            <nav class="hidden items-center space-x-6 md:flex">
               <NuxtLink
                  v-for="item in navItems"
                  :key="item.href"
                  :to="item.href"
                  class="text-sm font-medium text-slate-300 transition-colors hover:text-white"
               >
                  {{ item.label }}
               </NuxtLink>
            </nav>
            <div class="flex items-center space-x-4">
               <Button
                  variant="ghost"
                  class="text-slate-300 hover:text-white"
                  >Sign in</Button
               >
               <Button>Sign up</Button>
            </div>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
   import { Button } from '@/components/ui/button';
   import { Badge } from '@/components/ui/badge';

   const navItems = [
      { label: 'Docs', href: '/docs' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
   ];
</script>
