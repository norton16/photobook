import { Auth } from 'aws-amplify'

export const auth = {

    namespaced: true,

    // State
    state: { user: null },

    // Mutations - called by actions to update state
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },

    // Actions - handle async events & update vuex state
    actions: {
        async logout({ commit }) {
            commit("setUser", null);
            return await Auth.signOut();
        },
        async login({ commit }, {username, password}) {
            try {
                await Auth.signIn({
                    username,
                    password
                })

                const userInfo = await Auth.currentUserInfo();
                commit("setUser", userInfo);
                return Promise.resolve("Success");

            } catch(error) {
                console.log(error);
                return Promise.reject();
            }
        },
        async comfirmSignUp(_, { username, code}) {
            try{
                await Auth.confirmSignUp(username, code);
                return Promise.resolve();
            } catch(error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        async signUp(_, { username, password, email}) {
            try {
                await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email
                    }
                });
                return Promise.resolve();
            } catch(error) {
                console.log(error);
                return Promise.reject();
            }
        },
        async AuthenticatorAssertionResponse({ commit }) {
            const userInfo = await Auth.currentUserInfo();
            commit("setUser", userInfo);
        }
    },

    // Getters - access state
    getters: {
        user: (state) => state.user
    }

}