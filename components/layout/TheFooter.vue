<script setup lang="ts">
   interface FooterLink {
      label: string;
      href: string;
   }

   // You can move this to a separate config file if needed
   const productLinks: FooterLink[] = [
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
   ];

   const legalLinks: FooterLink[] = [
      { label: 'Privacy policy', href: '/' },
      { label: 'Terms and conditions', href: '/' },
   ];

   const currentYear = new Date().getFullYear();
   const isVisible = ref(false);

   onMounted(() => {
      isVisible.value = true;
   });
</script>

<template>
   <footer
      data-test-id="main-footer"
      class="border-t border-gray-800 bg-primary-900/50 transition-opacity duration-500"
      :class="{
         'opacity-0': !isVisible,
         'opacity-100': isVisible,
      }"
   >
      <div class="container mx-auto px-4 py-12">
         <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <!-- Logo & Copyright -->
            <div
               class="space-y-4"
               data-test-id="footer-branding"
            >
               <NuxtLink
                  to="/"
                  class="inline-block"
                  data-test-id="footer-logo"
               >
                  <svg
                     width="120"
                     height="40"
                     viewBox="0 0 120 40"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-8"
                  >
                     <path
                        d="M0 0L15 40L30 0"
                        fill="#46d39e"
                     />
                     <text
                        x="35"
                        y="28"
                        font-size="24"
                        font-weight="bold"
                        fill="#fff"
                     >
                        acme
                     </text>
                  </svg>
               </NuxtLink>
               <p
                  class="text-sm text-gray-400"
                  data-test-id="footer-copyright"
               >
                  © {{ currentYear }} supastarter. All rights reserved.
               </p>
            </div>

            <!-- Product Links -->
            <div
               class="space-y-4"
               data-test-id="footer-product-links"
            >
               <ul class="space-y-3">
                  <li
                     v-for="link in productLinks"
                     :key="link.label"
                  >
                     <NuxtLink
                        :to="link.href"
                        :data-test-id="`footer-link-${link.label.toLowerCase()}`"
                        class="text-gray-400 transition-colors hover:text-white"
                     >
                        {{ link.label }}
                     </NuxtLink>
                  </li>
               </ul>
            </div>

            <!-- Legal Links -->
            <div
               class="space-y-4"
               data-test-id="footer-legal-links"
            >
               <ul class="space-y-3">
                  <li
                     v-for="link in legalLinks"
                     :key="link.label"
                  >
                     <NuxtLink
                        :to="link.href"
                        :data-test-id="`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`"
                        class="text-gray-400 transition-colors hover:text-white"
                     >
                        {{ link.label }}
                     </NuxtLink>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </footer>
</template>
