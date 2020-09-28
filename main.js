import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api/api.js'

// #ifdef H5
import jweixin from './common/js/jweixin-module.js'
Vue.prototype.wx = jweixin
// #endif

// 全局组件
import pageCommon from './components/global/page-common/page-common.vue'
import titleBar from './components/global/title-bar/title-bar.vue'

Vue.component('page-common', pageCommon)
Vue.component('title-bar', titleBar)

Vue.config.productionTip = false
Vue.prototype.api = api

App.mpType = 'app'
App.store = store

const app = new Vue({
  ...App
})
app.$mount()
