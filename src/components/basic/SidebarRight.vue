<template>
  <vue-resizable :min-width="minWidth" :max-width="maxWidth" :width="width" :active="['l']" :disable-attributes="['l']">
    <div :class="['code-sidebar', { active: currentView === 'code' }]">
      <slot name="body" />
      <BrandBanner />
    </div>
  </vue-resizable>
</template>

<script setup>
import VueResizable from 'vue-resizable'
import { useAppState } from '../../store.js'
import { debounce } from '../../utils'

let { currentView } = $(useAppState())

let maxWidth = ref(0)
let minWidth = ref(0)
let width = ref(0)

onMounted(() => {
  window.addEventListener('resize', debounce(handleResize))
})

onUnmounted(() => {
  window.removeEventListener('resize', debounce(handleResize))
})

function handleResize() {
  if (window.innerWidth < 768) {
    maxWidth.value = 0
    minWidth.value = 0
    width.value = 0
  } else {
    maxWidth.value = 320
    minWidth.value = 240
    width.value = 275
  }
}

handleResize()
</script>

<style scoped lang="postcss">
.code-sidebar {
  /*overflow: auto;*/
  text-align: left;
  color: var(--color-gray-lightest);
  padding: 15px 15px;
  height: 100vh;
  transition: transform 0.2s ease-in;
  position: relative;
  @media (max-width: 769px) {
    transform: translateX(100%);
    width: 100%;
    background: var(--color-gray-lightest);
    position: fixed;
    right: 0;
    bottom: 0;
    top: 48px;
    height: calc(100vh - 48px);
    &.active {
      transform: translateX(0em);
    }
  }
}

.btn-github {
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.8;
  transition: opacity 0.1s linear;
  &:hover {
    opacity: 0.9;
  }
}
</style>
