<script setup lang="ts">
   import { ref } from 'vue';
   import { Input } from '@/components/ui/input';
   import { Button } from '@/components/ui/button';
   import { Skeleton } from '@/components/ui/skeleton';
   import { KeyIcon } from 'lucide-vue-next';

   import type { earlyAccessSection } from '@/types/home';

   interface Props {
      data?: earlyAccessSection;
      loading?: boolean;
   }

   defineProps<Props>();

   const email = ref('');
   const isVisible = ref(false);
   const isSubmitting = ref(false);

   const emit = defineEmits<{
      subscribe: [email: string];
   }>();

   const handleSubmit = async () => {
      if (!email.value) return;

      isSubmitting.value = true;
      try {
         await emit('subscribe', email.value);
         email.value = ''; // Reset form after successful submission
      } finally {
         isSubmitting.value = false;
      }
   };

   onMounted(() => {
      isVisible.value = true;
   });
</script>

<template>
   <section
      class="px-4 py-20 transition-all duration-500"
      :class="{
         'translate-y-4 opacity-0': !isVisible,
         'translate-y-0 opacity-100': isVisible,
      }"
      data-test-id="early-access-section"
   >
      <div class="container mx-auto max-w-2xl text-center">
         <div class="mb-8">
            <KeyIcon
               v-if="!loading"
               data-test-id="early-access-icon"
               class="mx-auto mb-6 h-12 w-12 animate-bounce text-accent-green"
            />
            <Skeleton
               v-else
               data-test-id="early-access-icon-skeleton"
               class="mx-auto mb-6 h-12 w-12"
            />

            <!-- Title -->
            <Skeleton
               v-if="loading"
               data-test-id="early-access-title-skeleton"
               class="mx-auto mb-4 h-10 w-3/4"
            />
            <h2
               v-else
               data-test-id="early-access-title"
               class="mb-4 text-4xl font-bold text-white"
            >
               {{ data?.heading }}
            </h2>

            <!-- Description -->
            <Skeleton
               v-if="loading"
               data-test-id="early-access-description-skeleton"
               class="mx-auto h-6 w-2/3"
            />
            <p
               v-else
               data-test-id="early-access-description"
               class="text-gray-400"
            >
               {{ data?.subheading }}
            </p>
         </div>

         <!-- Form -->
         <form
            data-test-id="early-access-form"
            class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            @submit.prevent="handleSubmit"
         >
            <div class="flex-1">
               <Skeleton
                  v-if="loading"
                  data-test-id="early-access-input-skeleton"
                  class="h-10 w-full"
               />
               <Input
                  v-else
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  data-test-id="early-access-input"
                  class="border-primary-600 bg-primary-700/50 text-white placeholder:text-gray-400"
                  :disabled="isSubmitting"
               />
            </div>

            <Skeleton
               v-if="loading"
               data-test-id="early-access-button-skeleton"
               class="h-10 w-24"
            />
            <Button
               v-else
               type="submit"
               data-test-id="early-access-submit"
               :disabled="isSubmitting"
               class="bg-accent-green transition-colors hover:bg-accent-green/90"
            >
               Subscribe
            </Button>
         </form>
      </div>
   </section>
</template>
