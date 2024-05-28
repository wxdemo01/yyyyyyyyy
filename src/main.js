import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router.js'
import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false

import auth from './auth.js'

Vue.use(auth)

import axios from './axios.js'

Vue.use(axios)

import VuePreview from 'vue-preview';

Vue.use(VuePreview);
Vue.config.productionTip = false

new Vue({

  store,

  router,

  render: h => h(App),

}).$mount('#app')