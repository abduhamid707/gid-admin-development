import locales from '../locale/index'
import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)
let locale = window.location.pathname.replace(/^\/([^/]+).*/i,'$1');
const langs = ['uz','ru'];
let loc = false;
langs.forEach((el)=>{
  if(el == locale){
    loc = true
  }
})
const i18n = new VueI18n({
  locale: (locale.trim().length && locale != "/") ? (loc ? locale : 'uz') : 'uz',
  fallbackLocale: 'uz',
  messages: locales
});
export default i18n
