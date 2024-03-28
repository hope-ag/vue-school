<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <NuxtLink
    to="/"
    aria-details="Workshop details"
    class="block rounded-[30px] overflow-hidden bg-surface-light w-[calc(100vw-2rem)] max-w-[570px]"
  >
    <div
      class="h-[68px] px-4 sm:px-9 flex items-center gap-3 font-medium bg-gradient-to-r from-tertiary-violet/50 to-tertiary-orange/50"
      aria-label="workshop date"
    >
      <IconsCalendar aria-hidden="true" />
      <h3>December 14th - 11:00 AM (GMT-3)</h3>
    </div>

    <!-- Workshop content -->
    <div class="px-4 sm:px-9 p-9 space-y-2.5">
      <div class="flex items-center gap-9">
        <p aria-label="workshop type" class="flex items-center gap-2">
          <IconsPlay aria-hidden="true" />
          <span class="text-sm text-gray-2">Live training</span>
        </p>
        <p aria-label="workshop duration" class="flex items-center text-gray-2 gap-2">
          <IconsClock aria-hidden="true" /> <span class="text-sm">15 Hours</span>
        </p>
      </div>

      <h4 aria-label="workshop title" class="text-2xl font-medium">{{ title }}</h4>
      <p aria-label="workshop description" class="text-sm text-gray-2">
        {{ description }}
      </p>

      <div aria-label="speaker details" class="flex text-sm gap-3 items-center">
        <NuxtImg src="/speaker.png" class="h-6 w-6" />
        <span aria-label="speaker name" class="text-gray-2">Steve Popoola</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
