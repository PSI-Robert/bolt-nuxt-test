<script setup lang="ts">
   import Badge from '@/components/ui/badge/Badge.vue';
   import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

   import type { Post } from '@/types/blog';

   defineProps<{
      post: Post;
   }>();

   function useBlog() {
      const formatDate = (date: string) => {
         return new Date(date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
         });
      };

      const slugify = (text: string) => {
         return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
      };

      const getInitials = (name: string) => {
         return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
      };

      return {
         formatDate,
         slugify,
         getInitials,
      };
   }

   const { formatDate, getInitials } = useBlog();
</script>

<template>
   <Card
      class="overflow-hidden transition-all hover:scale-[1.02]"
      data-test-id="blog-card"
   >
      <NuxtLink
         to="#"
         data-test-id="blog-link"
      >
         <div
            class="relative"
            data-test-id="blog-image-container"
         >
            <nuxt-img
               :src="post.imageUrl"
               :alt="post.title"
               class="aspect-video w-full object-cover"
               loading="lazy"
               width="600"
               height="600"
               format="webp"
               quality="90"
               data-test-id="blog-image"
            />
         </div>

         <CardContent class="p-6">
            <div
               class="mb-4 flex gap-2"
               data-test-id="blog-tags"
            >
               <Badge
                  v-for="tag in post.tags"
                  :key="tag"
                  variant="secondary"
                  class="text-xs uppercase"
                  :data-test-id="`blog-tag-${tag}`"
               >
                  {{ tag }}
               </Badge>
            </div>

            <h3
               class="mb-2 text-xl font-semibold"
               data-test-id="blog-title"
            >
               {{ post.title }}
            </h3>
            <p
               class="mb-4 text-muted-foreground"
               data-test-id="blog-description"
            >
               {{ post.description }}
            </p>

            <div
               class="flex items-center justify-between"
               data-test-id="blog-footer"
            >
               <div
                  class="flex items-center gap-2"
                  data-test-id="blog-author"
               >
                  <Avatar>
                     <AvatarImage :src="post.author.avatar" />
                     <AvatarFallback>{{ getInitials(post.author.name) }}</AvatarFallback>
                  </Avatar>
                  <span class="text-sm font-medium">{{ post.author.name }}</span>
               </div>
               <time
                  class="text-sm text-muted-foreground"
                  data-test-id="blog-date"
               >
                  {{ formatDate(post.date) }}
               </time>
            </div>
         </CardContent>
      </NuxtLink>
   </Card>
</template>
