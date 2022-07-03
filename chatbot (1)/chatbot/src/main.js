import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'

Vue.use(vueCustomElement)

createApp(App).mount('#app')
Vue.customElement('vue-widget', App)
