import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { nextTick } from 'vue';
import EarlyAccessSignup from '@/components/features/home/section/EarlyAccessSignup.vue';

describe('EarlyAccessSignup', () => {
   it('shows skeleton loaders when loading prop is true', async () => {
      const wrapper = await mountSuspended(EarlyAccessSignup, {
         props: { loading: true },
      });

      expect(wrapper.find('[data-test-id="early-access-title-skeleton"]').exists()).toBe(true);
      expect(wrapper.find('[data-test-id="early-access-description-skeleton"]').exists()).toBe(
         true,
      );
      expect(wrapper.find('[data-test-id="early-access-input-skeleton"]').exists()).toBe(true);
      expect(wrapper.find('[data-test-id="early-access-button-skeleton"]').exists()).toBe(true);
   });

   it('applies fade-in animation classes on mount', async () => {
      const wrapper = await mountSuspended(EarlyAccessSignup);

      // After mount
      await nextTick();
      expect(wrapper.find('[data-test-id="early-access-section"]').classes()).toContain(
         'opacity-100',
      );
   });

   it('emits subscribe event with email on form submission', async () => {
      const wrapper = await mountSuspended(EarlyAccessSignup);
      const testEmail = 'test@example.com';

      // Fill in the email input
      await wrapper.find('[data-test-id="early-access-input"]').setValue(testEmail);

      // Submit the form
      await wrapper.find('[data-test-id="early-access-form"]').trigger('submit');

      // Check if the event was emitted with correct value
      expect(wrapper.emitted('subscribe')).toBeTruthy();
      expect(wrapper.emitted('subscribe')?.[0]).toEqual([testEmail]);
   });

   it('validates email input', async () => {
      const wrapper = await mountSuspended(EarlyAccessSignup);
      const input = wrapper.find('[data-test-id="early-access-input"]');

      // Check if email input has required attribute
      expect(input.attributes('required')).toBeDefined();
      expect(input.attributes('type')).toBe('email');
   });

   it('resets form after successful submission', async () => {
      const wrapper = await mountSuspended(EarlyAccessSignup);
      const testEmail = 'test@example.com';

      // Fill and submit form
      await wrapper.find('[data-test-id="early-access-input"]').setValue(testEmail);
      await wrapper.find('[data-test-id="early-access-form"]').trigger('submit');

      // Check if email input was reset
      expect(
         (wrapper.find('[data-test-id="early-access-input"]').element as HTMLInputElement).value,
      ).toBe('');
   });
});
