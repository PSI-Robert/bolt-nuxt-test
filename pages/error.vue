<template>
   <div class="flex min-h-screen items-center justify-center">
      <div class="text-center">
         <h1 class="mb-4 text-4xl font-bold">{{ error?.statusCode }}</h1>
         <p class="mb-4">{{ error?.message }}</p>
         <button
            class="btn"
            @click="handleError"
         >
            Return Home
         </button>
      </div>
   </div>
</template>

<script setup lang="ts">
   const error = useError();

   const handleError = () => {
      clearError();
      navigateTo('/');
   };
</script>
