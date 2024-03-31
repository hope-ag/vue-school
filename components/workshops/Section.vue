<script setup lang="ts">
const workshope = [
  {
    title: 'Vue.js Fundamentals',
    description:
      'A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...'
  },
  {
    title: 'Vue 3 and Composition API',
    description:
      'Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...'
  },
  {
    title: 'Vue 3 and Composition API',
    description:
      'Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...'
  }
]

const scrollButtonClass =
  'inline-grid place-content-center h-12 w-12 rounded-full bg-gray-2/20 hover:bg-gray-2/40 active:bg-gray-2/10 duration-200 disabled:cursor-not-allowed'

const scrollWrapper = ref<HTMLElement>()
const cardsWrapper = ref<HTMLElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const defaultScrollFactor = 400

const { width } = useElementSize(cardsWrapper)

function calcCanScrollLeft() {
  if (!scrollWrapper.value) return false
  return scrollWrapper.value.scrollLeft > 0
}

function calcCanScrollRight() {
  if (!scrollWrapper.value) return false
  return scrollWrapper.value.scrollLeft <= width.value - scrollWrapper.value.clientWidth
}

function updateButtons() {
  canScrollLeft.value = calcCanScrollLeft()
  canScrollRight.value = calcCanScrollRight()
}

function doScroll(type: 'left' | 'right') {
  const scrollRatio = isDesktop.value ? 0.5 : 1 / 3
  const scrollFactor = width.value ? width.value * scrollRatio : defaultScrollFactor
  if (!scrollWrapper.value) return
  if (type === 'left') {
    scrollWrapper.value.scrollLeft =
      scrollWrapper.value.scrollLeft > scrollFactor
        ? scrollWrapper.value.scrollLeft - scrollFactor
        : 0
  } else {
    scrollWrapper.value.scrollLeft += scrollFactor
  }
}

onMounted(() => {
  if (!scrollWrapper.value) return
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateButtons()
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(scrollWrapper.value)
})
</script>

<template>
  <section class="mt-40">
    <div class="content-wrapper mb-[56px]">
      <div class="container p-4 flex flex-col">
        <div class="flex justify-center lg:justify-between items-center">
          <h2 class="text-white font-bold h1 text-center lg:text-left">
            Available workshops
          </h2>
          <SharedAppButton label="See all the workshops" class="hidden lg:flex" />
        </div>
      </div>
    </div>

    <div class="relative group">
      <div class="absolute flex items-center gap-6 right-4 bottom-full">
        <button
          :disabled="!canScrollLeft"
          :class="[scrollButtonClass, canScrollLeft ? '' : 'opacity-20']"
          @click="doScroll('left')"
        >
          <span class="sr-only">Scroll left</span>
          <Icon name="ion:chevron-left" />
        </button>
        <button
          :disabled="!canScrollRight"
          :class="[scrollButtonClass, canScrollRight ? '' : 'opacity-20']"
          @click="doScroll('right')"
        >
          <span class="sr-only">Scroll right</span>
          <Icon name="ion:chevron-right" />
        </button>
      </div>
      <div
        ref="scrollWrapper"
        class="overflow-x-scroll scroll-smooth scrollbar-none"
        aria-orientation="horizontal"
        @scroll="updateButtons"
        @mouseover="updateButtons"
      >
        <div class="content-wrapper pb-2">
          <div class="container py-4">
            <div
              ref="cardsWrapper"
              class="workshop-cards flex w-max gap-4 sm:gap-6 pr-4 sm:pr-6"
            >
              <WorkshopsCard
                v-for="workshop in workshope"
                :key="workshop.title"
                v-bind="workshop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center lg:hidden mt-8 sm:mt-14">
      <SharedAppButton label="See all the workshops" />
    </div>
  </section>
</template>

<style scoped></style>
