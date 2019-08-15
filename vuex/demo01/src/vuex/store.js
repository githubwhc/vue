import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:13
}
const mutations={   //改变状态里面的值使用mutations
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}

export default new Vuex.Store({
    state,
    mutations
})