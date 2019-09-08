import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import './plugins/element.js'
import api from './api/api'
import ajaxApi from './api/ajaxApi'
import echarts from 'echarts'

// echarts 按需引入
let echarts2 = require('echarts/lib/echarts')

// 引入折线图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/radar')

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

Vue.prototype.$api = api
Vue.prototype.$ajaxApi = ajaxApi
Vue.prototype.$echarts = echarts
Vue.prototype.$echarts2 = echarts2

Vue.config.productionTip = false

require('./mock/mock')

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')