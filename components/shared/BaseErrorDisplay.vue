<script setup lang="ts">
   import { Button } from '@/components/ui/button';
   import { AlertTriangle, RefreshCw, Wifi, Server } from 'lucide-vue-next';

   interface CustomError extends Error {
      statusCode: number;
   }

   interface Props {
      error: Error | null;
      retry?: () => void;
   }

   const props = defineProps<Props>();

   // Error types mapping for better UX
   const errorTypes = {
      NETWORK_ERROR: 'network',
      SERVER_ERROR: 'server',
      NOT_FOUND: 'notFound',
      DEFAULT: 'default',
   } as const;

   // Get error type based on error message or code
   const errorType = computed(() => {
      if (!props.error) return errorTypes.DEFAULT;

      const error = props.error as CustomError;

      if (error.message?.includes('Network') || error.message?.includes('fetch')) {
         return errorTypes.NETWORK_ERROR;
      }

      if (error.statusCode === 404) {
         return errorTypes.NOT_FOUND;
      }

      if (error.statusCode >= 500) {
         return errorTypes.SERVER_ERROR;
      }

      return errorTypes.DEFAULT;
   });

   // Error configurations for different error types
   const errorConfig = computed(() => {
      const configs = {
         [errorTypes.NETWORK_ERROR]: {
            icon: Wifi,
            title: 'Connection Error',
            message: 'Please check your internet connection and try again.',
            actionText: 'Retry',
            iconClass: 'text-yellow-500',
         },
         [errorTypes.SERVER_ERROR]: {
            icon: Server,
            title: 'Server Error',
            message: 'Our servers are having issues. Please try again later.',
            actionText: 'Retry',
            iconClass: 'text-red-500',
         },
         [errorTypes.NOT_FOUND]: {
            icon: AlertTriangle,
            title: 'Not Found',
            message: 'The requested resource could not be found.',
            actionText: 'Go Back',
            iconClass: 'text-yellow-500',
         },
         [errorTypes.DEFAULT]: {
            icon: AlertTriangle,
            title: 'Error',
            message: props.error?.message || 'An unexpected error occurred.',
            actionText: 'Retry',
            iconClass: 'text-red-500',
         },
      };

      return configs[errorType.value];
   });

   // Handle retry action
   const handleRetry = () => {
      if (errorType.value === errorTypes.NOT_FOUND) {
         // Navigate back if resource not found
         const router = useRouter();
         router.back();
      } else if (props.retry) {
         props.retry();
      }
   };
</script>

<template>
   <div
      data-test-id="error-display"
      class="container flex min-h-screen flex-col items-center justify-center space-y-4 rounded-lg border border-gray-700 bg-gray-800/50 p-6 text-center"
      :aria-label="`Error: ${errorConfig.title}`"
   >
      <!-- Error Icon -->
      <div
         class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800"
         :data-test-id="`error-icon-${errorType}`"
      >
         <component
            :is="errorConfig.icon"
            class="h-8 w-8"
            :class="errorConfig.iconClass"
            aria-hidden="true"
         />
      </div>

      <!-- Error Title -->
      <h3
         class="text-xl font-semibold text-white"
         :data-test-id="`error-title-${errorType}`"
      >
         {{ errorConfig.title }}
      </h3>

      <!-- Error Message -->
      <p
         class="max-w-md text-gray-400"
         :data-test-id="`error-message-${errorType}`"
      >
         {{ errorConfig.message }}
      </p>

      <!-- Action Button -->
      <Button
         v-if="retry || errorType === 'notFound'"
         :data-test-id="`error-action-${errorType}`"
         variant="default"
         class="mt-4"
         @click="handleRetry"
      >
         <RefreshCw
            v-if="errorType !== 'notFound'"
            class="mr-2 h-4 w-4"
         />
         {{ errorConfig.actionText }}
      </Button>
   </div>
</template>
