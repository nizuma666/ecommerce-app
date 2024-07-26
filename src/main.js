// src/main.js
import { createApp, h } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable'
import apolloClient from './apollo'

const app = createApp({
  setup() {
    provideApolloClient(apolloClient)
  },
  render: () => h(App)
})

app.use(createPinia())
app.mount('#app')
