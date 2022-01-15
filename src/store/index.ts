import {createStore} from 'vuex'
// @ts-ignore
import UserStore from "./userStore.ts";
// @ts-ignore
import AirportStore from "./airportStore.ts";

export default createStore({
    modules:{
        user: UserStore,
        airport: AirportStore
    }
})