export default {
    namespaced: true,
    state: {
        username: null,
        teamName: null,
        role: "player"
    },
    getters: {
        fullName: function (state) {
            if (state.username != null && state.teamName != null) {
                return `${state.username}@${state.teamName}`
            }
            return "";
        },
        username: function (state) {
            return state.username;
        },
        isAdmin: function (state) {
            return state.role === 'admin';
        }
    },
    mutations: {
        UPDATE_USERNAME(state, payload) {
            state.username = payload
        },

        UPDATE_TEAM_NAME(state, payload) {
            state.teamName = payload
        },

        UPDATE_ROLE(state, payload) {
            state.role = payload;
        }
    },
    actions: {
        registerTeam(context, payload) {
            context.commit('UPDATE_USERNAME', payload.username)
            context.commit('UPDATE_TEAM_NAME', payload.teamName);
        },
        changeRole(context, payload){
            context.commit('UPDATE_ROLE', payload);
        }
    },
}
