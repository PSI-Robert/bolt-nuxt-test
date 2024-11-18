<script setup lang="ts">
   import LazyBlogCard from '@/components/features/blog/BlogCard.vue';
   import type { BlogPageData } from '@/types/blog';
   import Skeleton from '@/components/ui/skeleton/Skeleton.vue';

   // Fetch all data for b,ogs
   const { data: pageData, status, error } = await useFetch<BlogPageData>('/api/blog');

   // SEO metadata
   useHead({
      title: computed(() => pageData.value?.seo.title || 'Nuxt Boilerplate'),
      meta: [
         {
            name: computed(() => pageData.value?.seo.meta.name || 'description'),
            content: computed(() => pageData.value?.seo.meta.content || 'content'),
         },
      ],
   });
</script>

<template>
   <div
      class="container min-h-screen px-4 py-16"
      data-test-id="blog-page"
   >
      <div
         class="my-16 text-center"
         data-test-id="blog-header"
      >
         <h1 class="mb-4 text-4xl font-bold text-white">{{ pageData?.data.heading }}</h1>
         <p class="text-muted-foreground">{{ pageData?.data.subheading }}</p>
      </div>

      <LazyErrorDisplay
         v-if="error"
         :error="error"
      />

      <template v-else>
         <div
            v-if="status !== 'success'"
            class="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-test-id="blog-loading"
         >
            <Skeleton
               v-for="n in 4"
               :key="n"
               class="h-[400px]"
            />
         </div>
         <div
            v-else
            class="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-test-id="blog-grid"
         >
            <LazyBlogCard
               v-for="post in pageData?.data.posts"
               :key="post.title"
               :post="post"
            />
         </div>
      </template>
   </div>
</template>
