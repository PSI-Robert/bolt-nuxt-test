import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TheHeader from '~/components/layout/TheHeader.vue';

describe('TheHeader', () => {
   it('initializes with correct default values', () => {
      const wrapper = mount(TheHeader);
      expect(wrapper.vm.selectedCurrency).toBe('PHP');
      expect(wrapper.vm.selectedLanguage).toBe('en');
   });

   // Add more tests as needed
});
