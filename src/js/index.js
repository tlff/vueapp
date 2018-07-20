import VUE from "vue/dist/vue.js";
import app from "./components/index.vue";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import table from "./components/table.vue";

VUE.use(VueRouter)
// import vuex from "vuex/dist/vuex.esm.js";
// import vuex from "vuex";
VUE.use(ElementUI);
const routes = [
    { path: '/table', component: table },
    // { path: '/bar', component: Bar }
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
let a=new VUE({
    router,
    store,
    el:"#container",
    render:h=>h(app)
})
if (module.hot) {
    module.hot.accept();
}