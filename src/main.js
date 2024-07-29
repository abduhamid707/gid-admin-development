import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './plugins/i18n'
import router from './router'

import Header from "./components/home/Header.vue";
import Pagination from './components/content/paginatorButtons.vue'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import preLoader from './components/layouts/preLoader.vue'
import Icons from '@/components/content/icons.vue'

import ElementUI from "element-ui"
import Vuelidate from 'vuelidate'
import VueMask from "v-mask"
import VueApexCharts from 'vue-apexcharts'


Vue.use(Vuelidate)
Vue.use(ElementUI, {locale});
Vue.use(VueMask)
Vue.use(VueApexCharts)


Vue.component('apexchart', VueApexCharts)
Vue.component('Icons', Icons)
Vue.component('preLoader', preLoader)
Vue.component('Header', Header)
Vue.component('Pagination', Pagination)

Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  router,
  i18n,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
