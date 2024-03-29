<script setup lang="ts"></script>

<template>
  <header class="">
    <LayoutTopNav />

    <section class="content-wrapper py-6 px-4">
      <div class="container grid lg:grid-cols-2 lg:gap-12 items-center">
        <div
          class="text space-y-8 max-w-sm sm:max-w-lg mx-auto lg:mx-0 xl:max-w-xl flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0"
        >
          <h1 class="text-white h1">
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
          class="w-[90%] sm:w-full max-w-[450px] sm:block mx-auto lg:max-w-none lg:mx-0 flex-shrink-0"
        />
      </div>
    </section>
  </header>
</template>
