import *  as types from './mutation-type'

export default {
    [types.SET_HEADER_TIILE](state, title){
        state.title.title = title
    },
    [types.SET_LOADING](state, loadingState){
        state.loading.loadingShow = loadingState;
    }
}
