<script setup lang="ts">
   interface NavItem {
      title: string;
      href: string;
      subItems?: {
         title: string;
         href: string;
      }[];
   }

   const navItems: NavItem[] = [
      {
         title: 'MEN',
         href: '/men',
         subItems: [
            { title: 'Formal wear', href: '/men/formal-wear' },
            { title: 'Active wear', href: '/men/active-wear' },
            { title: 'Casual wear', href: '/men/casual-wear' },
            { title: 'Foot wear', href: '/men/foot-wear' },
         ],
      },
      {
         title: 'WOMAN',
         href: '/woman',
         subItems: [
            { title: 'Formal wear', href: '/men/formal-wear' },
            { title: 'Active wear', href: '/men/active-wear' },
            { title: 'Casual wear', href: '/men/casual-wear' },
            { title: 'Foot wear', href: '/men/foot-wear' },
         ],
      },
      { title: 'KIDS', href: '/kids' },
      { title: 'WELLNESS', href: '/wellness' },
   ];

   const searchQuery = ref<string>('');
</script>

<template>
   <header class="sticky top-0 z-50 bg-white px-6 py-4 shadow-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between">
         <!-- Logo -->
         <NuxtLink
            to="/"
            class="flex items-center"
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
                  fill="#FFC107"
               />
               <text
                  x="35"
                  y="28"
                  font-family="Arial-BoldMT, Arial"
                  font-size="24"
                  font-weight="bold"
                  fill="#1A237E"
               >
                  Velocity
               </text>
            </svg>
         </NuxtLink>

         <!-- Navigation -->
         <nav class="flex items-center space-x-16">
            <div
               v-for="item in navItems"
               :key="item.title"
               class="group relative"
            >
               <NuxtLink
                  :to="item.href"
                  class="relative inline-block py-6 text-base font-medium tracking-wide text-gray-800"
               >
                  {{ item.title }}
                  <!-- Hover border effect -->
                  <span
                     class="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-[#000080] transition-transform duration-200 ease-out group-hover:scale-x-100"
                  ></span>
               </NuxtLink>

               <!-- Dropdown Menu -->
               <div
                  v-if="item.subItems"
                  class="absolute left-1/2 z-50 hidden w-[500px] -translate-x-1/2 transform grid-cols-2 gap-x-16 gap-y-4 border-t bg-white px-12 py-8 shadow-lg group-hover:grid"
               >
                  <NuxtLink
                     v-for="subItem in item.subItems"
                     :key="subItem.title"
                     :to="subItem.href"
                     class="text-lg font-medium text-[#000080] transition-colors duration-200 hover:text-[#000066]"
                  >
                     {{ subItem.title }}
                  </NuxtLink>
               </div>
            </div>
         </nav>

         <!-- Search and Actions -->
         <div class="flex items-center space-x-4">
            <!-- Search Bar -->
            <div class="relative">
               <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search products here"
                  class="w-64 rounded-md border bg-gray-50 py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-200"
               />
               <button class="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5 text-gray-400"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                     />
                  </svg>
               </button>
            </div>

            <!-- Action Icons -->
            <div class="flex items-center space-x-4">
               <button class="text-gray-700 hover:text-gray-900">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                     />
                  </svg>
               </button>
               <button class="text-gray-700 hover:text-gray-900">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                     />
                  </svg>
               </button>
               <button class="text-gray-700 hover:text-gray-900">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                     />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   </header>
</template>

<style scoped>
   .group:hover .group-hover\:grid {
      display: grid;
   }

   /* Add these custom colors to your tailwind.config.js */
   :root {
      --navy-900: #000080;
      --navy-700: #000066;
   }

   .text-navy-900 {
      color: var(--navy-900);
   }

   .text-navy-700 {
      color: var(--navy-700);
   }

   .bg-navy-900 {
      background-color: var(--navy-900);
   }

   header {
      transition: box-shadow 0.3s ease;
   }

   /* Optional: Change background color when sticky */
   header.sticky {
      background-color: rgba(255, 255, 255, 0.95);
   }
</style>
