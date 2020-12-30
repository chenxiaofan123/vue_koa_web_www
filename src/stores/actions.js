import * as types from './mutation-type'

export default {
    setTitle({commit}, title){
        commit(types.SET_HEADER_TIILE, title);
    },
    setLoadingState({commit}, state){
        commit(types.SET_LOADING, state);
    }
}