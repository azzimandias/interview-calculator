import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './styles/css/main.css'
/*import './styles/css/light.css'
import './styles/css/dark.css'
import './styles/css/personalColorTheme.css'*/
import './styles/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
