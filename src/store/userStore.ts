export default {
    namespaced: true,
    state: {
        username: null,
        teamName: null
    },
    getters: {
        fullName: function (state) {
            if(state.username != null && state.teamName != null){
                return `${state.username}@${state.teamName}`
            }
            return "";
        },
        username: function (state){
            return state.username;
        }
    },
    mutations: {
        UPDATE_USERNAME(state, payload) {
            state.username = payload
        },

        UPDATE_TEAM_NAME(state, payload) {
            state.teamName = payload
        }
    },
    actions: {
        registerTeam(context, payload) {
            context.commit('UPDATE_USERNAME', payload.username)
            context.commit('UPDATE_TEAM_NAME', payload.teamName);
        }
    },
}
