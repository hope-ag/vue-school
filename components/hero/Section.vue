<script setup lang="ts"></script>

<template>
  <header class="">
    <LayoutTopNav />

    <section class="content-wrapper py-6 px-4">
      <div class="container grid md:grid-cols-2 gap-12 items-center">
        <div
          class="text space-y-8 sm:max-w-md mx-auto md:mx-0 max-w-xl flex-col items-center md:items-start text-center md:text-left flex-shrink-0"
        >
          <h1 class="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
            Complete <span class="text-primary">Vue.js training</span> solutions for
            companies
          </h1>
          <p class="sm:text-lg">
            Training solutions designed for companies, agencies and organisations with
            developers using or who are considering using the Vue.js framework
          </p>

          <SharedAppButton label="Get started" class="" />
        </div>
        <HeroImage
          class="w-[90%] sm:w-full max-w-[450px] sm:block mx-auto md:max-w-none md:mx-0 flex-shrink-0"
        />
      </div>
    </section>
  </header>
</template>
