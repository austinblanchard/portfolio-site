import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import SvgIcon from 'vue-svgicon'

import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(SvgIcon, {
    tagName: 'svgicon'
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
