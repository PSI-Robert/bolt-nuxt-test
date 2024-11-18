import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BlogCard from '@/components/features/blog/BlogCard.vue';
import type { VueWrapper } from '@vue/test-utils';

describe('BlogCard Component', () => {
   const mockPost = {
      title: 'Test Post',
      description: 'Test Description',
      image: '/images/cover.avif',
      tags: ['test', 'mock'],
      author: {
         name: 'Test Author',
         avatar: '/images/test-avatar.avif',
      },
      date: '2024-01-01',
   };

   let wrapper: VueWrapper<InstanceType<typeof BlogCard>>;

   beforeEach(() => {
      wrapper = shallowMount(BlogCard, {
         props: {
            post: mockPost,
         },
         global: {
            stubs: {
               'Card': true,
               'NuxtLink': true,
               'nuxt-img': true,
               'CardContent': true,
               'Badge': true,
               'Avatar': true,
               'AvatarImage': true,
               'AvatarFallback': true,
            },
         },
      });
   });

   it('renders the blog card component', () => {
      expect(wrapper.exists()).toBe(true);
   });

   it('renders a Card component', () => {
      expect(wrapper.findComponent({ name: 'Card' }).exists()).toBe(true);
   });

   it('applies the correct classes to the Card', () => {
      const card = wrapper.findComponent({ name: 'Card' });
      expect(card.classes()).toContain('overflow-hidden');
      expect(card.classes()).toContain('transition-all');
      expect(card.classes()).toContain('hover:scale-[1.02]');
   });

   it('has the correct data-test-id', () => {
      expect(wrapper.attributes('data-test-id')).toBe('blog-card');
   });

   it('receives the post prop correctly', () => {
      expect(wrapper.props('post')).toEqual(mockPost);
   });
});
