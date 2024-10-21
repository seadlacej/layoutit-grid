<template>
  <PropsHeader @toggle-props="toggleView('props')" @toggle-code="toggleView('code')" />
  <PropsSidebar :area="mainArea" />
  <div class="area-editor-container">
    <AreaEditor :area="mainArea" />
  </div>
  <SidebarRight>
    <template #body>
      <LiveCode :area="mainArea" :save-design="saveDesign" />
    </template>
  </SidebarRight>
</template>

<script setup lang="ts">
import { $ } from 'vue/macros';
import { loadFromStorage, useAppState } from '../store.js'
import { keyMonitor } from '../utils/keyMonitor'

let { mainArea, currentView } = $(useAppState())

const { saveDesign } = defineProps<{ saveDesign?: (area) => string }>()

function toggleView(view) {
  currentView = currentView === view ? 'editor' : view
}

onMounted(() => {
  loadFromStorage()
  addEventListener('keydown', keyMonitor)
})

onUnmounted(() => removeEventListener('keydown', keyMonitor))
</script>

<style lang="postcss">
:root {
  /* Create Colors */
  --color-turquoise-main: #08AC8F;
  --color-turquoise-50: #daf2ee;
  --color-turquoise-100: #ceeee8;
  --color-turquoise-200: #c1eae3;
  --color-turquoise-300: #9cddd1;
  --color-turquoise-400: #52c4af;
  --color-turquoise-500: #08AC8F;
  --color-turquoise-600: #07997f;
  --color-turquoise-700: #06806a;
  --color-turquoise-800: #056655;
  --color-turquoise-900: #045345;


  --color-green-main: #09AB56;
  --color-green-50: #daf2e6;
  --color-green-100: #ceeedd;
  --color-green-200: #c2ead5;
  --color-green-300: #9dddbb;
  --color-green-400: #53c489;
  --color-green-500: #09AB56;
  --color-green-600: #089a4d;
  --color-green-700: #078041;
  --color-green-800: #056734;
  --color-green-900: #04542a;

  --color-purple-main: #4D09AB;
  --color-purple-50: #e4daf2;
  --color-purple-100: #dbceee;
  --color-purple-200: #d3c2ea;
  --color-purple-300: #b89ddd;
  --color-purple-400: #8253c4;
  --color-purple-500: #4D09AB;
  --color-purple-600: #45089a;
  --color-purple-700: #3a0780;
  --color-purple-800: #2e0567;
  --color-purple-900: #260454;

  --color-red-main: #AB0919;
  --color-red-50: #f2ddda;
  --color-red-100: #eed1ce;
  --color-red-200: #eac6c2;
  --color-red-300: #dda39d;
  --color-red-400: #c45e53;
  --color-red-500: #AB1909;
  --color-red-600: #9a1708;
  --color-red-700: #801307;
  --color-red-800: #670f05;
  --color-red-900: #540c04;

  --color-blue-main: #407ec9;
  --color-blue-50: #e2ecf7;
  --color-blue-100: #d9e5f4;
  --color-blue-200: #cfdff2;
  --color-blue-300: #b3cbe9;
  --color-blue-400: #79a5d9;
  --color-blue-500: #407ec9;
  --color-blue-600: #3a71b5;
  --color-blue-700: #305f97;
  --color-blue-800: #264c79;
  --color-blue-900: #1f3e62;

  --color-yellow-main: #f6a117;
  --color-yellow-50: #fef1dc;
  --color-yellow-100: #fdecd1;
  --color-yellow-200: #fde8c5;
  --color-yellow-300: #fbd9a2;
  --color-yellow-400: #f9bd5d;
  --color-yellow-500: #f6a117;
  --color-yellow-600: #dd9115;
  --color-yellow-700: #b97911;
  --color-yellow-800: #94610e;
  --color-yellow-900: #794f0b;

  --color-text-main: rgba(0, 0, 0, 0.54);
  --color-text-darker: #444444;
  --color-white-btn-hover: #d5d5d5;

  /* END Create Colors */


  /* Green */
  --color-add-active: #50b83c;
  --color-darkmode-active: #27ae60;
  --color-green: var(--color-darkmode-active);
  --color-green-rgb: 39, 174, 96;
  --color-green-ligth: #bbe5b3;
  --color-green-hover: #f6fbf6;
  --color-green-dark: #032c06;
  /* Magenta */
  --color-remove: #c2185b;
  --color-remove-rgb: 194, 24, 91;
  --color-remove-active: #951246;
  --color-magenta: var(--color-remove);
  --color-magenta-light: #db4c69;
  --color-hire-us: var(--color-remove);
  --color-hire-us-active: var(--color-remove-active);
  /* Blue */
  --color-add: #0165b4;
  --color-darkmode: var(--color-add);
  --color-blue: #01579b;
  --color-blue-rgb: 1, 87, 155;
  --color-blue-dark: #014982;
  --color-blue-darkest: #2c3e50;
  --color-blue-light: #569cd6;
  --color-blue-lightest: #9cdcfe;
  /* Teal */
  --color-teal: #107292;
  --color-teal-dark: #236f86;
  /* White to Black */
  --color-white: #fafafa;
  --color-white-rgb: 250, 250, 250;
  --color-gray-lightest: #eee;
  --color-gray-light: #ddd;
  --color-gray: #aaa;
  --color-gray-middle: #555;
  --color-gray-dark: #333;
  --color-gray-dark-rgb: 51, 51, 51;
  --color-gray-darkest: #1e1e1e;
  --color-black: #151515;
  --color-black-rgb: 21, 21, 21;
  /* Purple */
  --color-purple: #6b16a1;
  --color-purple-middle: #490c6f;
  --color-purple-dark: #300548;
  --color-purple-dark-rgb: 48, 5, 72;
  --color-purple-darkest: #1d032d;
  /* Yellow */
  --color-golden: #d7ba7d;
  --color-orange: #ce9178;
  --color-yellow: #fdd835;
  --color-yellow-dark: #a79f7f;
  --color-yellow-light: #fff3c4;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  height: 100%;
  background: var(--color-black);
  font-size: 100%;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 1;
}

p {
  margin-top: 0;
  font-size: 18px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.disabled,
[disabled],
.area-selection button[disabled] {
  opacity: 0.8;
  pointer-events: none;
}

*:focus {
  outline: none;
}

/* TODO: Try to remove this
   The right border produces a jump when active without this */
#grid-layout-creator.darkmode > .grid {
  padding-right: 1px;
}

#grid-layout-creator {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: var(--color-blue-darkest);
  background: linear-gradient(var(--color-purple-darkest), var(--color-purple-dark));
  background: var(--color-purple-dark);
  background: var(--color-gray-lightest);
  height: 100%;
  display: flex;
  &.darkmode {
    .grid {
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 9px,
        var(--color-purple-darkest) 9px,
        var(--color-purple-darkest) 14px
      );
    }
    .inside-row-size,
    .inside-col-size {
      color: var(--color-white);
    }
    .grid-section {
      background: var(--color-purple-dark);
      &:after,
      &:before {
        background: var(--color-purple-dark);
        color: var(--color-white);
      }
      &.grid-saved,
      &.grid-add {
        background: var(--color-white);
      }
      &.grayed {
        background: var(--color-green-dark);
      }
    }

    .area-editor,
    .area-selection {
      background: rgba(var(--color-purple-dark-rgb), 0.6);
    }

    .line-number {
      color: var(--color-gray);
      background: var(--color-purple-dark);
      &.dragging,
      &.focused {
        background: var(--color-green);
        color: var(--color-white);
      }
    }

    .row .line-number {
      left: 1px;
    }

    .editor-track-size {
      &.row,
      &.col {
        color: var(--color-gray);
      }
    }

    .col.first .line-number {
      left: 1px;
    }
    .col.last .line-number {
      right: 1px;
    }

    .grid-section.grayed {
      &:before {
        background: var(--color-green-dark);
      }
      background: var(--color-green-dark);
    }

    .area-selection {
      input {
        color: var(--color-gray);
      }
    }
  }
}

.area-editor-container {
  flex: 1;
  display: grid;
  overflow: auto;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 48px;
  }
}
</style>
