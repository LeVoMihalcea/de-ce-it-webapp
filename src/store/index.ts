import {createStore} from 'vuex'
// @ts-ignore
import UserStore from "./userStore.ts";

export default createStore({
    modules:{
        user: UserStore,
    }
})
