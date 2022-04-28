import VueDPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTreeList from 'vue-tree-list'
import './router/permission'
import api from './api/index';
import store from "./store";
import * as echarts from 'echarts'

Vue.use(VueDPlayer);
Vue.use(VueTreeList)
Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(ElementUI)


let userinfo = localStorage.getItem('userinfo')
if (userinfo) {
    userinfo = JSON.parse(userinfo);
    store.commit('LoginModule/setUser', userinfo)
}
new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app')
