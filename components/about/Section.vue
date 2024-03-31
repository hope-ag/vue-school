<script setup lang="ts"></script>

<template>
  <section class="relative -mt-48 sm:-mt-16 lg:-mt-24">
    <div class="w-screen overflow-x-hidden">
      <SharedWave1
        class="absolute -top-16 sm:-top-24 lg:-top-8 xl:top-0 -left-[90vw] sm:left-0 h-screen lg:h-auto w-[200vw] sm:w-full inset-y-0 -inset-x-6"
      />
      <SharedWave2
        class="absolute -top-28 sm:-top-40 lg:-top-0 -left-[75vw] sm:left-0 w-[200vw] sm:w-full h-screen lg:h-auto inset-0 -inset-x-6"
      />
    </div>
    <div class="content-wrapper pt-56 sm:pt-32 lg:pt-36 relative">
      <div class="bg-gradient-to-b from-white/20 to-transparent p-px rounded-[30px]">
        <div
          class="p-6 sm:py-10 md:px-10 md:py-10 flex flex-col sm:flex-row items-center sm:items-start xl:items-center gap-6 md:gap-10 rounded-[30px] bg-surface-light/90"
        >
          <NuxtImg
            src="/logo-icon-only.svg"
            alt="logo"
            class="w-16 sm:w-28 lg:w-40 flex-shrink-0 lg:p-5"
            width="135"
            height="153"
          />
          <div class="text space-y-4 md:space-y-6 text-center sm:text-left">
            <h2 class="text-white font-bold text-2xl sm:text-4xl">
              About Vue School corporate training
            </h2>
            <p class="text-sm md:text-lg">
              School is the #1 training resource for Vue.js and has provided the most
              comprehensive Vue.js video library in the world to over 140,000 developers.
              Private individuals and small to enterprise companies have used our services
              to develop their skills since 2016.
            </p>
          </div>
        </div>
      </div>
    </div>
    <AboutSponsors />
  </section>
</template>
