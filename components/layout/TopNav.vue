<script setup lang="ts"></script>

<template>
  <div class="p-4">
    <nav class="flex items-center justify-between container">
      <div class="flex items-center gap-6">
        <button class="xl:hidden" name="open mobile navigation">
          <IconsHamburger />
        </button>
        <NuxtImg src="/logo.svg" alt="logo" class="h-14" height="56" width="170" />
      </div>
      <ul class="hidden xl:flex gap-5">
        <li v-for="link in navbarLinks" :key="link.name">
          <NuxtLink :to="link.path" class="hover:text-primary flex items-center gap-1">
            <span>{{ link.name }}</span>
            <Icon name="ion:caret-down-outline" v-if="link.children" class="text-sm" />
          </NuxtLink>
        </li>
      </ul>
      <div class="hidden sm:flex gap-5 items-center">
        <NuxtLink to="/" class="hover:text-primary duration-200">Log in</NuxtLink>
        <NuxtLink
          to="/"
          class="inline-block relative bg-gradient-to-r from-primary-light to-secondary p-0.5 rounded-lg"
        >
          <span
            class="inline-block font-medium py-3 px-9 bg-surface hover:bg-opacity-90 duration-200 rounded-[7px] whitespace-nowrap text-primary"
          >
            Sign up
          </span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
