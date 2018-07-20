import vue from "vue/dist/vue.js";
import vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
vue.use(vuex);
const state={
    a:true
}
const store = new vuex.Store({
    state,
    actions,
    mutations, 
    modules:{

    }
})
export default store;