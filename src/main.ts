import './lib/gulu.scss'
import { router } from './router';
import { createApp } from 'vue'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import './assets/svg.js'
import './index.scss'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
  // }
app.use(router)
app.mount('#app')
app.component("Markdown",Markdown)
