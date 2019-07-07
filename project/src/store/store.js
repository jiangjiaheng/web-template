import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 多模块引入简写
let ms = require.context('./modules', false, /\.js$/)
let modules = {}
ms.keys().forEach(k => {
    let n = k.substring(2, k.length - 3)
    modules[n] = ms(k).default
})

const store = new Vuex.Store({
    modules
})

export default store