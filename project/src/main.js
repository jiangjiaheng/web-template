import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import './plugins/element.js'
import api from './api/api'

Vue.prototype.$api = api
Vue.config.productionTip = false

require('./mock/mock')

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')