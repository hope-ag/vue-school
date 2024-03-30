<script setup lang="ts">
defineProps<{
  heroContent?: globalThis.HeroContent | null
}>()
</script>

<template>
  <header class="">
    <LayoutTopNav />

    <section class="content-wrapper py-6 px-4">
      <div class="container grid lg:grid-cols-2 lg:gap-12 items-center">
        <div
          class="text space-y-8 max-w-sm sm:max-w-lg mx-auto lg:mx-0 xl:max-w-xl flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0"
        >
          <h1 class="text-white h1 opacity-0 animate-[fade-in_0.7s_0.5s_forwards]">
            <span v-if="!heroContent">Welcome to VueSchool</span>
            <template v-else>
              <span
                v-for="block in heroContent.title"
                :key="block._key"
                :class="block.highlighted ? 'text-primary' : ''"
              >
                {{ block.text }} {{ ' ' }}
              </span>
            </template>
          </h1>
          <p class="sm:text-lg opacity-0 animate-[fade-in_0.7s_1s_forwards]">
            <span v-if="!heroContent">...</span>
            <span v-else>{{ heroContent.description }}</span>
          </p>

          <SharedAppButton
            :label="heroContent ? heroContent.cta : 'Get Started'"
            class="opacity-0 animate-[fade-in_0.7s_1.5s_forwards]"
          />
        </div>
        <HeroImage
          class="w-[90%] sm:w-full max-w-[450px] sm:block mx-auto lg:max-w-none lg:mx-0 flex-shrink-0"
        />
      </div>
    </section>
  </header>
</template>
