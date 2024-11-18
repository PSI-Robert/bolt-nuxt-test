import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import FeatureCard from '@/components/features/home/card/FeatureCard.vue';

describe('FeatureCard', () => {
   const defaultProps = {
      title: 'Test Feature',
      description: 'Test Description',
      imageUrl: '/test-image.jpg',
      benefits: [
         {
            icon: 'heart',
            title: 'Test Benefit 1',
            description: 'Benefit description 1',
         },
         {
            icon: 'thumbs-up',
            title: 'Test Benefit 2',
            description: 'Benefit description 2',
         },
         {
            icon: 'call',
            title: 'Test Benefit 3',
            description: 'Benefit description 2',
         },
      ],
   };

   it('renders properly with default props', async () => {
      const wrapper = await mountSuspended(FeatureCard, {
         props: defaultProps,
      });

      const title = wrapper.find('[data-test-id="feature-title"]');
      const description = wrapper.find('[data-test-id="feature-description"]');
      const benefit1 = wrapper.find('[data-test-id="feature-benefit-0"]');
      const benefit2 = wrapper.find('[data-test-id="feature-benefit-1"]');

      expect(title.text()).toBe('Test Feature');
      expect(description.text()).toBe('Test Description');
      expect(benefit1.exists()).toBe(true);
      expect(benefit2.exists()).toBe(true);
   });

   it('shows skeleton loaders when loading is true', async () => {
      const wrapper = await mountSuspended(FeatureCard, {
         props: {
            ...defaultProps,
            loading: true,
         },
      });

      expect(wrapper.find('[data-test-id="feature-title-skeleton"]').exists()).toBe(true);
      expect(wrapper.find('[data-test-id="feature-description-skeleton"]').exists()).toBe(true);
      expect(wrapper.find('[data-test-id="feature-button-skeleton"]').exists()).toBe(true);
      expect(wrapper.findAll('[data-test-id="feature-benefit-skeleton"]')).toHaveLength(3);
   });

   it('renders correct benefit content', async () => {
      const wrapper = await mountSuspended(FeatureCard, {
         props: defaultProps,
      });

      const benefit = wrapper.find('[data-test-id="feature-benefit-0"]');
      const benefitTitle = wrapper.find('[data-test-id="feature-benefit-title-0"]');
      const benefitDescription = wrapper.find('[data-test-id="feature-benefit-description-0"]');
      const benefitIcon = wrapper.find('[data-test-id="feature-benefit-icon-0"]');

      expect(benefit.exists()).toBe(true);
      expect(benefitTitle.text()).toBe('Test Benefit 1');
      expect(benefitDescription.text()).toBe('Benefit description 1');
      expect(benefitIcon.exists()).toBe(true);
   });

   it('applies reversed layout when reversed prop is true', async () => {
      const wrapper = await mountSuspended(FeatureCard, {
         props: {
            ...defaultProps,
            reversed: true,
         },
      });

      const card = wrapper.find('[data-test-id="feature-card"]');
      expect(card.find('.md\\:flex-row-reverse').exists()).toBe(true);
   });

   it('renders learn more button when not loading', async () => {
      const wrapper = await mountSuspended(FeatureCard, {
         props: defaultProps,
      });

      const button = wrapper.find('[data-test-id="feature-learn-more"]');
      expect(button.exists()).toBe(true);
      expect(button.text()).toContain('Learn more');
   });

   it('renders correct number of benefits', async () => {
      const wrapper = await mountSuspended(FeatureCard, {
         props: defaultProps,
      });

      const benefitsGrid = wrapper.find('[data-test-id="feature-benefits-grid"]');
      const benefits = benefitsGrid.findAll('[data-test-id^="feature-benefit-"]');

      expect(benefits).toHaveLength(12);
   });
});
