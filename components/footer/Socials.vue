<script setup lang="ts">
const iconLinkClass =
  'grid place-content-center bg-surface-light h-[60px] w-[60px] rounded-full text-gray-1 duration-300'
</script>

<template>
  <div aria-label="social links" class="text-center lg:text-left">
    <h2 class="mb-5 uppercase text-gray-2 font-medium text-[22px]">
      FOLLOW US IN SOCIAL MEDIA
    </h2>
    <ul class="flex items-center justify-between gap-4 sm:gap-8 md:gap-10">
      <li>
        <NuxtLink :class="iconLinkClass" class="hover:text-[#3b5998]">
          <IconsFacebook />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" class="hover:text-sky-500">
          <IconsTwitter />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" class="hover:text-white">
          <IconsGithub />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" class="hover:text-[#0e76a8]">
          <IconsLinkedIn />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass" class="hover:text-[#b2071d]">
          <IconsYouTube />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
