import 'vue-global-api'
import { createApp } from 'vue'
import App from './App.vue'
import GridEditor from './components/grid/GridEditor.vue'
import FlexEditor from './components/flex/FlexEditor.vue'
import { createI18n } from 'vue-i18n'
// import { EventBus } from './store/eventBus'

if (!window.PointerEvent) {
  //@ts-ignore
  import('pepjs')
}

// import translations
import de from './locales/de.json'
import en from './locales/en.json'

// configure i18n
const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: { de, en },
})

const app = createApp(App)

// Globably register GridEditor to avoid issues with circular references
app.component('GridEditor', GridEditor)
app.component('FlexEditor', FlexEditor)
app.use(i18n)
app.mount('#grid-layout-creator')

// EventBus.value.addEventListener('layoutStateUpdated', (event: CustomEvent) => {
//   const { html, css } = event.detail
//   console.log('Updated HTML:', html)
//   console.log('Updated CSS:', css)
// })
