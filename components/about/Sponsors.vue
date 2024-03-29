<script setup lang="ts"></script>

<template>
  <div
    class="relative hidden lg:grid grid-cols-6 justify-between items-center content-wrapper py-6 xl:px-4 mt-6 pb-0"
    aria-label="our sponsors"
  >
    <a
      v-for="i in 6"
      :key="i"
      href="http://google.com"
      target="_blank"
      class="group"
      rel="noopener noreferrer"
    >
      <span class="sr-only">Google</span>
      <IconsGoogle aria-hidden="true" />
    </a>
  </div>
</template>
