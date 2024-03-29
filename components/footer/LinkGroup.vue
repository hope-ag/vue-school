<script setup lang="ts">
defineProps<{
  title: string
  links: {
    label: string
    href: string
  }[]
}>()
</script>

<template>
  <div>
    <h2
      aria-label="footer navigation heading"
      class="mb-5 uppercase text-gray-2 font-medium text-[22px]"
    >
      {{ title }}
    </h2>

    <ul class="text-white space-y-3.5">
      <li v-for="link in links" :key="link.label">
        <NuxtLink :to="link.href" class="text-white">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
