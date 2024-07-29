import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";
import axios from "@/plugins/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules
});

store.$axios = axios;
Vue.prototype.$axios = axios

// Автоматически запустить действие `init` для каждого существующего модуля
for (const moduleName of Object.keys(modules)) {
    if ((modules[moduleName].actions || {}).init) {
        store.dispatch(`${moduleName}/init`);
    }
}

export default store;

