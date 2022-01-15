const state = () => ({
    someRandomText: "abc",
    randomNumber: 4
})

// getters
const getters = {
    randomText: (state) => {
        return state.someRandomText;
    },

    randomNumber: (state) => {
        return state.randomNumber;
    },
}

// mutations
const mutations = {
    setRandomText(state, text){
        state.someRadomText = text;
    },

    setRandomNumber(state, number){
        state.randomNumber = number;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}