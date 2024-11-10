<template>
   <header class="bg-white shadow-sm">
      <div class="container mx-auto flex items-center justify-between px-4 py-2">
         <div class="flex items-center space-x-4">
            <select
               v-model="selectedCurrency"
               class="border-none bg-transparent text-sm"
            >
               <option value="PHP">PHP</option>
               <!-- Add other currency options as needed -->
            </select>
         </div>
         <div class="text-sm">
            Get UPTO 40% OFF on your 1st order
            <a
               href="#"
               class="font-semibold text-blue-600 hover:underline"
               >SHOP NOW</a
            >
         </div>
         <div class="flex items-center space-x-4">
            <select
               v-model="selectedLanguage"
               class="border-none bg-transparent text-sm"
            >
               <option value="en">🇺🇸 English</option>
               <!-- Add other language options as needed -->
            </select>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
   const selectedCurrency = ref<string>('PHP');
   const selectedLanguage = ref<string>('en');

   defineExpose({ selectedCurrency, selectedLanguage });
</script>
