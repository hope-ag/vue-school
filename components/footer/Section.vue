<script setup lang="ts"></script>

<template>
  <footer class="mt-24 sm:mt-40 lg:mt-52 pb-12 sm:pb-20">
    <div class="content-wrapper">
      <div class="grid lg:justify-between lg:grid-cols-2 lg:gap-16">
        <div
          class="flex flex-col items-center lg:items-start gap-8 sm:gap-10 lg:gap-[85px] lg:max-w-[470px]"
        >
          <NuxtImg src="/logo.svg" alt="Vue school logo" class="h-[88px]" />
          <p class="text-white text-center lg:text-left">
            Thanks to fine people like you, Vue School can proudly sponsor Evan and the
            future of Vue.js by being a Platinum Patreon
          </p>
          <FooterSocials />
        </div>
        <div
          class="grid lg:grid-cols-2 items-center sm:items-start text-center sm:text-left mt-12 sm:mt-16 lg:mt-0"
        >
          <div
            class="lg:space-y-[50px] grid gap-8 grid-cols-1 sm:grid-cols-3 justify-between lg:block"
          >
            <FooterLinkGroup v-bind="footerProductLinks" />
            <FooterLinkGroup class="hidden lg:block" v-bind="footerPricingLinks" />
            <FooterLinkGroup class="lg:hidden" v-bind="footerCorporateLinks" />
            <FooterLinkGroup v-bind="footerConnectLinks" />
          </div>
          <div
            class="lg:space-y-[50px] grid gap-8 grid-cols-1 sm:grid-cols-3 justify-between lg:block mt-8 lg:mt-0"
          >
            <FooterLinkGroup v-bind="footerEventLinks" />
            <FooterLinkGroup v-bind="footerCorporateLinks" class="hidden lg:block" />
            <FooterLinkGroup v-bind="footerResourceLinks" class="lg:hidden" />
            <FooterLinkGroup v-bind="footerResourceLinks" class="hidden lg:block" />
            <FooterLinkGroup v-bind="footerPricingLinks" class="lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
