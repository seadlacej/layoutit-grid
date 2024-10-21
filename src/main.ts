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

const defaultMessagesParams = {
  locale: 'en',
  fallbackLocale: 'en',
  messages: { de, en },
}

const setMessages = (locale: string) => createI18n({ ...defaultMessagesParams, locale })

import type { App as VueApp } from 'vue'

export function layoutGrid(locale = 'en'): VueApp {
  const app = createApp(App) // Pass the locale as a prop to the App component
  app.component('GridEditor', GridEditor)
  app.use(setMessages(locale))
  app.mount('#grid-layout-creator')
  return app
}

layoutGrid()

// EventBus.value.addEventListener('layoutStateUpdated', (event: CustomEvent) => {
//   const { html, css } = event.detail
//   console.log('Updated HTML:', html)
//   console.log('Updated CSS:', css)
// })
