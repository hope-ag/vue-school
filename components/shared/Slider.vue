<script setup lang="ts">
import * as DomHandler from '@/utils/domHandler'

interface SliderProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  range?: boolean
  disabled?: boolean
  tabindex?: number
  ariaLabel?: string
  ariaLabelledby?: string
}
const emit = defineEmits(['update:modelValue', 'change', 'slideend'])
const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  tabindex: 0
})

const wrapper = ref<HTMLDivElement>()
const dragging = ref(false)
const handleIndex = ref(0)
const initX = ref(0)
const barWidth = ref(0)
const dragListener = ref<(event: Event) => void>()
const dragEndListener = ref<(event: Event) => void>()

const value = computed(() => props.modelValue ?? props.min)
const rangeStyle = computed(() => ({ width: handlePosition.value + '%' }))
const handleStyle = computed(() => ({ left: handlePosition.value + '%' }))
const handlePosition = computed(() => {
  if (value.value < props.min) return 0
  else if (value.value > props.max) return 100
  else return ((value.value - props.min) * 100) / (props.max - props.min)
})

function updateDomData() {
  if (!wrapper.value) return
  let rect = wrapper.value.getBoundingClientRect()
  initX.value = rect.left + DomHandler.getWindowScrollLeft()
  barWidth.value = wrapper.value.offsetWidth
}

function updateModel(event: Event, value: number) {
  let newValue = parseFloat(value.toFixed(10))
  let modelValue
  if (newValue < props.min) newValue = props.min
  else if (newValue > props.max) newValue = props.max
  modelValue = newValue
  emit('update:modelValue', modelValue)
  emit('change', modelValue)
}

function setValue(event: any) {
  let handleValue
  let pageX = event.touches ? event.touches[0].pageX : event.pageX

  handleValue = ((pageX - initX.value) * 100) / barWidth.value
  let newValue = (props.max - props.min) * (handleValue / 100) + props.min

  if (props.step) {
    const oldValue = value.value
    const diff = newValue - oldValue

    if (diff < 0)
      newValue =
        oldValue + Math.ceil(newValue / props.step - oldValue / props.step) * props.step
    else if (diff > 0)
      newValue =
        oldValue + Math.floor(newValue / props.step - oldValue / props.step) * props.step
  } else {
    newValue = Math.floor(newValue)
  }

  updateModel(event, newValue)
}

function decrementValue(event: Event, index: number, pageKey = false) {
  let newValue

  if (props.step) newValue = value.value - props.step
  else if (!props.step && pageKey) newValue = value.value - 10
  else newValue = value.value - 1
  updateModel(event, newValue)
  event.preventDefault()
}
function incrementValue(event: Event, index: number, pageKey = false) {
  let newValue

  if (props.step) newValue = value.value + props.step
  else if (!props.step && pageKey) newValue = value.value + 10
  else newValue = value.value + 1
  updateModel(event, newValue)
  event.preventDefault()
}

function onKeyDown(event: KeyboardEvent, index = 0) {
  handleIndex.value = index

  switch (event.code) {
    case 'ArrowDown':
    case 'ArrowLeft':
      decrementValue(event, index)
      event.preventDefault()
      break

    case 'ArrowUp':
    case 'ArrowRight':
      incrementValue(event, index)
      event.preventDefault()
      break

    case 'PageDown':
      decrementValue(event, index, true)
      event.preventDefault()
      break

    case 'PageUp':
      incrementValue(event, index, true)
      event.preventDefault()
      break

    case 'Home':
      updateModel(event, props.min)
      event.preventDefault()
      break

    case 'End':
      updateModel(event, props.max)
      event.preventDefault()
      break

    default:
      break
  }
}

function onDragStart(event: Event, index = 0) {
  if (!wrapper.value) return
  if (props.disabled) {
    return
  }
  wrapper.value.setAttribute('data-p-sliding', 'true')
  dragging.value = true
  updateDomData()
  handleIndex.value = index
  event.preventDefault()
}

function onDrag(event: Event) {
  if (dragging.value) {
    setValue(event)
    event.preventDefault()
  }
}

function onDragEnd(event: Event) {
  if (dragging.value && wrapper.value) {
    dragging.value = false
    wrapper.value.setAttribute('data-p-sliding', 'false')
    emit('slideend', { originalEvent: event, value: value.value })
  }
}

function onBarClick(event: MouseEvent) {
  if (props.disabled || !event.target) return
  if (
    DomHandler.getAttribute(event.target as HTMLElement, 'data-pc-section') !== 'handle'
  ) {
    updateDomData()
    setValue(event)
  }
}

function onMouseDown(event: Event, index = 0) {
  bindDragListeners()
  onDragStart(event, index)
}

function bindDragListeners() {
  if (!dragListener.value) {
    dragListener.value = onDrag
    document.addEventListener('mousemove', dragListener.value)
  }
  if (!dragEndListener.value) {
    dragEndListener.value = onDragEnd
    document.addEventListener('mouseup', dragEndListener.value)
  }
}

function unbindDragListeners() {
  if (dragListener.value) {
    document.removeEventListener('mousemove', dragListener.value)
    dragListener.value = undefined
  }

  if (dragEndListener.value) {
    document.removeEventListener('mouseup', dragEndListener.value)
    dragEndListener.value = undefined
  }
}

onBeforeUnmount(unbindDragListeners)
</script>

<template>
  <div
    ref="wrapper"
    :class="[
      'relative border-0 bg-gray-2 h-1 w-60 rounded-full',
      { 'opacity-60 select-none pointer-events-none cursor-default': disabled }
    ]"
    @click="onBarClick"
    :data-p-sliding="false"
  >
    <span
      class="absolute block bg-primary left-0 inset-y-0 rounded-full pointer-events-none"
      aria-hidden="true"
      :style="{
        width: handlePosition + '%'
      }"
    ></span>
    <span
      :class="['block absolute bg-primary-500 top-0 left-0 h-full']"
      :style="[rangeStyle]"
    />
    <span
      v-if="!range"
      :class="[
        'absolute block w-3.5 h-3.5 rounded-full border-2 bg-primary border-primary hover:bg-primary hover:border-primary focus:outline-none focus:outline-offset-0 focus:ring ring-primary-light/50 transition duration-200 cursor-grab touch-action-none top-[50%] -translate-y-1/2 ml-[-0.5715rem]'
      ]"
      :style="[handleStyle]"
      @touchstart.passive="onDragStart"
      @touchmove.passive="onDrag"
      @touchend="onDragEnd"
      @mousedown="onMouseDown"
      @keydown="onKeyDown"
      :tabindex="tabindex"
      role="slider"
      :aria-valuemin="min"
      :aria-valuenow="modelValue"
      :aria-valuemax="max"
      :aria-labelledby="ariaLabelledby"
      :aria-label="ariaLabel"
      aria-orientation="horizontal"
    />
  </div>
</template>
