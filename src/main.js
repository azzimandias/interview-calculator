import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/main.css'
import './styles/light.css'
import './styles/dark.css'
import './styles/personalColotTheme.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
