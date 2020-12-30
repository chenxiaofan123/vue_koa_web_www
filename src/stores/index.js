import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import account from './account'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

const state = {
    title:{
        title:''
    },
    loading:{
        loadingShow:false
    }
}
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', // 使用严格模式
    state,
    mutations,
    actions,
    modules: {
        user,
        account
    }
})
