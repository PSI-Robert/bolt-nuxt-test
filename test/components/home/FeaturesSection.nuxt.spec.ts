import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import FeaturesSection from '@/components/features/home/section/FeaturesSection.vue';
import FeatureCard from '@/components/features/home/card/FeatureCard.vue';

describe('FeaturesSection', () => {
   beforeEach(() => {
      vi.useFakeTimers();
   });

   it('starts with loading state', async () => {
      const wrapper = await mountSuspended(FeaturesSection);
      const featureCards = wrapper.findAllComponents(FeatureCard);

      featureCards.forEach(card => {
         expect(card.props('loading')).toBe(true);
      });
   });

   it('removes loading state after mount timeout', async () => {
      const wrapper = await mountSuspended(FeaturesSection);

      // Fast-forward timeout
      await vi.runAllTimers();
      await nextTick();

      const featureCards = wrapper.findAllComponents(FeatureCard);
      featureCards.forEach(card => {
         expect(card.props('loading')).toBe(false);
      });
   });
});
