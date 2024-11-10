<template>
   <section class="bg-slate-950 py-24 text-white">
      <div class="container mx-auto px-4 lg:px-24">
         <div class="rounded-xl bg-slate-900 p-12 text-center shadow-xl">
            <h2 class="mb-4 text-4xl font-bold">Get started today</h2>
            <p class="mx-auto mb-8 max-w-2xl text-slate-400">
               Nisi mollit id aliquip sunt est laborum sit sit.
            </p>
            <Button
               variant="secondary"
               size="lg"
               class="px-8 py-6"
            >
               Buy now
            </Button>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
   import { Button } from '@/components/ui/button';
</script>
