<script setup lang="ts">
const iconLinkClass =
  'grid place-content-center bg-surface-light h-[60px] w-[60px] rounded-full text-gray-1 hover:bg-gray/[0.08] duration-300'
</script>

<template>
  <div aria-label="social links" class="text-center lg:text-left">
    <h2 class="mb-5 uppercase text-gray-2 font-medium text-[22px]">
      FOLLOW US IN SOCIAL MEDIA
    </h2>
    <ul class="flex items-center justify-between gap-4 sm:gap-8 md:gap-10">
      <li>
        <NuxtLink :class="iconLinkClass" to="/" class="hover:text-[#3b5998]">
          <span class="sr-only">Facebook</span>
          <IconsFacebook />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" to="/" class="hover:text-sky-500">
          <span class="sr-only">Twitter</span>
          <IconsTwitter />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" to="/" class="hover:text-white">
          <span class="sr-only">Github</span>
          <IconsGithub />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" to="/" class="hover:text-[#0e76a8]">
          <span class="sr-only">LinkedIn</span>
          <IconsLinkedIn />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" to="/" class="hover:text-[#b2071d]">
          <span class="sr-only">YouTube</span>
          <IconsYouTube />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
