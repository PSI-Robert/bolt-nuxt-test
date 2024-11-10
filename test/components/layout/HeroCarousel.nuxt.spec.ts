import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HeroCarousel from '~/components/features/home/HeroCarousel.vue';

describe('HeroCarousel', () => {
   it('initializes with the first slide', () => {
      const wrapper = mount(HeroCarousel);
      expect(wrapper.vm.currentSlide).toBe(3);
   });

   it('moves to the next slide correctly', async () => {
      const wrapper = mount(HeroCarousel);
      await wrapper.vm.nextSlide();
      expect(wrapper.vm.currentSlide).toBe(1);
   });
});
