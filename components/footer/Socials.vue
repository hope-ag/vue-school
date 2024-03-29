<script setup lang="ts">
const iconLinkClass =
  'grid place-content-center bg-surface-light h-[60px] w-[60px] rounded-full'
</script>

<template>
  <div aria-label="social links">
    <h2 class="mb-5 uppercase text-gray-2 font-medium text-[22px]">
      FOLLOW US IN SOCIAL MEDIA
    </h2>
    <ul class="flex items-center justify-between gap-2 sm:gap-8 md:gap-10">
      <li>
        <NuxtLink :class="iconLinkClass">
          <IconsFacebook />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass">
          <IconsTwitter />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass">
          <IconsGithub />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass">
          <IconsLinkedIn />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :class="iconLinkClass">
          <IconsYouTube />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
