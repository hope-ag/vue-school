<script setup lang="ts"></script>

<template>
  <footer class="mt-24 sm:mt-40 lg:mt-52">
    <div class="content-wrapper">
      <div class="grid lg:justify-between md:grid-cols-2 md:gap-16 container p-4">
        <div
          class="flex flex-col items-center md:items-start gap-8 sm:gap-10 lg:gap-[85px] lg:max-w-[470px]"
        >
          <NuxtImg src="/logo.svg" alt="Vue school logo" class="h-[88px]" />
          <p class="text-white">
            Thanks to fine people like you, Vue School can proudly sponsor Evan and the
            future of Vue.js by being a Platinum Patreon
          </p>
          <FooterSocials />
        </div>
        <div class="grid sm:grid-cols-2">
          <div class="lg:space-y-[50px]">
            <FooterLinkGroup v-bind="footerProductLinks" />
            <FooterLinkGroup v-bind="footerPricingLinks" />
            <FooterLinkGroup v-bind="footerConnectLinks" />
          </div>
          <div class="lg:space-y-[50px]">
            <FooterLinkGroup v-bind="footerEventLinks" />
            <FooterLinkGroup v-bind="footerCorporateLinks" />
            <FooterLinkGroup v-bind="footerResourceLinks" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
