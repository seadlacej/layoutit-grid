import 'vue-global-api'
import { createApp } from 'vue'
import App from './App.vue'
import GridEditor from './components/grid/GridEditor.vue'
import FlexEditor from './components/flex/FlexEditor.vue'
// import { EventBus } from './store/eventBus'

if (!window.PointerEvent) {
  //@ts-ignore
  import('pepjs')
}

const app = createApp(App)

// Globably register GridEditor to avoid issues with circular references
app.component('GridEditor', GridEditor)
app.component('FlexEditor', FlexEditor)
app.mount('#grid-layout-creator')

// EventBus.value.addEventListener('layoutStateUpdated', (event: CustomEvent) => {
//   const { html, css } = event.detail
//   console.log('Updated HTML:', html)
//   console.log('Updated CSS:', css)
// })
