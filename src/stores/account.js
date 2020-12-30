export const ACCOUNT_CHOICE = 'ACCOUNT_CHOICE' // 选择账户
export const ACCOUNT_SHOW = 'ACCOUNT_SHOW' // 常用账户
export const ACCOUNT_HIDE = 'ACCOUNT_HIDE' // 关闭账户

export default {
    state: {
        account:{
            isshow:false,
            choice:{},
            index:''
        }

    },
    mutations: {
        [ACCOUNT_CHOICE] (state,obj) {
            state.account.choice = obj.info;
            state.account.index = obj.index;
        },
        [ACCOUNT_SHOW] (state) {
           state.account.isshow = true;
        },
        [ACCOUNT_HIDE] (state) {
            state.account.isshow = false;
        }
    },
    actions: {
        showAccountInfo({ commit }){
            commit(ACCOUNT_SHOW)
        },
        hideAccountInfo({ commit }){
            commit(ACCOUNT_HIDE)
        },
        choiceAccount({ commit },obj){
            commit(ACCOUNT_CHOICE,obj)
        }

    }
}
