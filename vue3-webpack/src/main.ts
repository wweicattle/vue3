import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ElButton,ElScrollbar,ElTable,ElTableColumn} from 'element-plus'
const app = createApp(App)
app.use(ElButton)
app.use(ElScrollbar)
app.use(ElTable)
app.use(ElTableColumn)

app.use(store).use(router).mount('#app')
