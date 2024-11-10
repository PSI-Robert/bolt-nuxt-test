<template>
   <!-- bg-slate-950 dark:bg-black dark:text-white -->
   <div class="flex min-h-screen flex-col bg-white">
      <!-- Header goes here -->
      <TheHeader />
      <TheNavbar />

      <!-- Main content -->
      <main class="flex-grow">
         <slot />
      </main>

      <!-- Footer goes here -->
      <TheFooter />
   </div>
</template>

<script setup lang="ts">
   import TheHeader from '~/components/layout/TheHeader.vue';
   import TheNavbar from '~/components/layout/TheNavbar.vue';
   import TheFooter from '~/components/layout/TheFooter.vue';
</script>
