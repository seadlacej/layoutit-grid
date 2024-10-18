<script setup lang="ts">
import { areaToCSS, areaToHTML, presentationCSS } from '../../generateCode.js'
import { restart, useHtmlCssState } from '../../store.js';

const { area, options } = defineProps<{ area; options }>()

function onSubmit(event) {
  event.preventDefault()
  event.preventDefault()
  const cssCode = areaToCSS(area, options)
  const htmlCode = areaToHTML(area)
  const { setHtmlCssState } = useHtmlCssState();
  setHtmlCssState(htmlCode, cssCode);
  restart();
}

</script>

<template>
  <button type="button" @click="onSubmit">
    Layout benutzen
    <IconCodepen />
  </button>
</template>
