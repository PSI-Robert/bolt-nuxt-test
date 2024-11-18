<script setup lang="ts">
   import { Card, CardHeader, CardContent } from '@/components/ui/card';
   import { Button } from '@/components/ui/button';

   const isYearly = ref(false);

   interface PricingPlan {
      name: string;
      description: string;
      monthlyPrice: number;
      yearlyPrice: number;
      features?: string[];
   }

   const plans: PricingPlan[] = [
      {
         name: 'Basic',
         description: 'Get started with your business',
         monthlyPrice: 9.0,
         yearlyPrice: 99.0,
      },
      {
         name: 'Pro',
         description: 'Extended features for your business',
         monthlyPrice: 29.0,
         yearlyPrice: 289.0,
      },
      {
         name: 'Ultimate',
         description: 'The ultimate experience for your business',
         monthlyPrice: 69.0,
         yearlyPrice: 689.0,
      },
   ];

   const lifetimePlan = {
      name: 'Lifetime',
      price: 799.0,
   };
</script>

<template>
   <div
      class="min-h-screen bg-primary-900/50 py-20"
      data-test-id="pricing-page"
   >
      <div class="container mx-auto px-4">
         <!-- Header -->
         <div class="mb-16 text-center">
            <h1
               class="mb-4 text-4xl font-bold text-white"
               data-test-id="pricing-title"
            >
               Pricing
            </h1>
            <p
               class="text-lg text-gray-400"
               data-test-id="pricing-subtitle"
            >
               Choose the plan that works best for you.
            </p>
         </div>

         <!-- Billing Toggle -->
         <div
            class="mb-16 flex items-center justify-center gap-4"
            data-test-id="billing-toggle"
         >
            <span
               class="text-gray-400"
               :class="{ 'text-white': !isYearly }"
            >
               Monthly
            </span>
            <button
               class="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-700 transition-colors hover:bg-primary-600"
               :class="{ 'bg-accent-green': isYearly }"
               data-test-id="billing-toggle-button"
               @click="isYearly = !isYearly"
            >
               <span
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                  :class="isYearly ? 'translate-x-6' : 'translate-x-1'"
               />
            </button>
            <span
               class="text-gray-400"
               :class="{ 'text-white': isYearly }"
            >
               Yearly
            </span>
         </div>

         <!-- Pricing Cards -->
         <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card
               v-for="plan in plans"
               :key="plan.name"
               class="border-gray-800 bg-primary-800/50 backdrop-blur-sm"
               data-test-id="pricing-card"
            >
               <CardHeader>
                  <h3 class="text-xl font-bold text-white">{{ plan.name }}</h3>
                  <p class="text-gray-400">{{ plan.description }}</p>
               </CardHeader>
               <CardContent>
                  <div class="mb-6">
                     <div class="flex items-baseline">
                        <span class="text-2xl font-bold text-accent-green">$</span>
                        <span class="text-4xl font-bold text-white">
                           {{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}
                        </span>
                        <span class="ml-2 text-gray-400"> /{{ isYearly ? 'year' : 'month' }} </span>
                     </div>
                  </div>
                  <Button
                     class="w-full bg-accent-green hover:bg-accent-green/90"
                     data-test-id="subscribe-button"
                  >
                     Subscribe
                  </Button>
               </CardContent>
            </Card>
         </div>

         <!-- Lifetime Plan -->
         <div
            v-if="isYearly"
            class="mx-auto max-w-sm"
         >
            <Card
               class="border-gray-800 bg-primary-800/50 backdrop-blur-sm"
               data-test-id="lifetime-card"
            >
               <CardHeader>
                  <h3 class="text-xl font-bold text-white">{{ lifetimePlan.name }}</h3>
               </CardHeader>
               <CardContent>
                  <div class="mb-6">
                     <div class="flex items-baseline">
                        <span class="text-2xl font-bold text-accent-green">$</span>
                        <span class="text-4xl font-bold text-white">
                           {{ lifetimePlan.price }}
                        </span>
                        <span class="ml-2 text-gray-400">/year</span>
                     </div>
                  </div>
                  <Button
                     class="w-full bg-accent-green hover:bg-accent-green/90"
                     data-test-id="lifetime-subscribe-button"
                  >
                     Subscribe
                  </Button>
               </CardContent>
            </Card>
         </div>
      </div>
   </div>
</template>
