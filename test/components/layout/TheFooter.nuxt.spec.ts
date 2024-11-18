import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { nextTick } from 'vue';
import TheFooter from '@/components/layout/TheFooter.vue';

describe('TheFooter', () => {
   it('renders correctly', async () => {
      const wrapper = await mountSuspended(TheFooter);

      // Check if main footer exists
      expect(wrapper.find('[data-test-id="main-footer"]').exists()).toBe(true);
   });

   it('displays current year in copyright text', async () => {
      const wrapper = await mountSuspended(TheFooter);
      const currentYear = new Date().getFullYear();

      const copyright = wrapper.find('[data-test-id="footer-copyright"]');
      expect(copyright.text()).toContain(currentYear.toString());
   });

   it('renders all product links', async () => {
      const wrapper = await mountSuspended(TheFooter);
      const productLinks = ['blog', 'pricing'];

      for (const link of productLinks) {
         const linkElement = wrapper.find(`[data-test-id="footer-link-${link}"]`);
         expect(linkElement.exists()).toBe(true);
      }
   });

   it('has proper navigation links', async () => {
      const wrapper = await mountSuspended(TheFooter);

      // Test blog link
      const blogLink = wrapper.find('[data-test-id="footer-link-blog"]');
      expect(blogLink.attributes('href')).toBe('/blog');
   });

   it('applies fade-in animation on mount', async () => {
      const wrapper = await mountSuspended(TheFooter);

      // After mount
      await nextTick();
      expect(wrapper.find('[data-test-id="main-footer"]').classes()).toContain('opacity-100');
   });

   it('has proper hover states on links', async () => {
      const wrapper = await mountSuspended(TheFooter);
      const link = wrapper.find('[data-test-id="footer-link-blog"]');

      expect(link.classes()).toContain('hover:text-white');
      expect(link.classes()).toContain('transition-colors');
   });
});
