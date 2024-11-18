import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Blog from '@/pages/blog.vue';

describe('Blog Page', () => {
   const wrapper = shallowMount(Blog, {
      global: {
         stubs: {
            LazyBlogCard: true,
            Skeleton: true,
         },
      },
   });

   it('renders the blog page component', () => {
      expect(wrapper.exists()).toBe(true);
   });
});
