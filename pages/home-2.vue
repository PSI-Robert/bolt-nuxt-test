<template>
   <div>
      <HeroSection />
      <StatisticsCard />
      <PowerOfService />
      <WhyChooseUs />
      <GetStartedCTA />
   </div>
</template>

<script setup lang="ts">
   import HeroSection from '~/components/features/home/HeroSection.vue';
   import StatisticsCard from '~/components/features/home/StatisticsCard.vue';
   import PowerOfService from '~/components/features/home/PowerOfService.vue';
   import WhyChooseUs from '~/components/features/home/WhyChooseUs.vue';
   import GetStartedCTA from '~/components/features/home/GetStartedCTA.vue';
</script>
