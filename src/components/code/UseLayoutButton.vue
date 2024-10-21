<script setup lang="ts">
import { areaToCSS, areaToHTML, presentationCSS } from '../../generateCode.js'
import { restart, useHtmlCssState } from '../../store.js';

const { area, options } = defineProps<{ area; options }>()

function onSubmit(event) {
  console.log("onSubmit", event);
  
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
  <button type="button" class="use-layout-btn" @click="onSubmit">
    <IconUpload />
    <span>&nbsp;</span>
    Layout benutzen
  </button>
</template>

<style scoped lang="postcss">
  .use-layout-btn {
    border: 0;
    cursor: pointer;
    border-radius: 30px;
    font-size: 1rem;
    letter-spacing: 0.2px;
    text-shadow: rgba(var(--color-black-rgb), 0.3) 0 1px 1px;
    color: var(--color-white);
    background: var(--color-turquoise-main);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 700;
    &:hover {
      background: var(--color-turquoise-700);
    }

  }
</style>