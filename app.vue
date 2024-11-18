<script setup lang="ts"></script>

<template>
   <NuxtLayout>
      <NuxtLoadingIndicator />
      <main>
         <NuxtPage />
      </main>
   </NuxtLayout>
</template>

<style>
   .page-enter-active,
   .page-leave-active {
      transition: all 0.2s;
   }
   .page-enter-from,
   .page-leave-to {
      opacity: 0;
   }
</style>
