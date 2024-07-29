import {
    getToken as fGetToken
} from "@/constants/utils/storage"
export const state = () => ({
    user: null,
});

export const mutations = {
    setState(state, payload) {
        Object.keys(payload).forEach((key) => {
            if (key in state) {
                state[key] = payload[key];
            }
        });
    },
    setRole(state, role) {
        state.role = role
    },
    setUserId(state, user) {
        state.user = user
    }
};

export const actions = {
    init({
        commit,
        dispatch
    }) {
        const token = fGetToken()

        const p = {
            token: token || null,
        }

        commit("setState", p)

        if (p.tokens) {
            dispatch("setCredentials", {
                data: {
                    tokens: p.token,
                }
            })
        }
    },
    setCredentials({
        commit
    }, res) {
        const access_token = res.data.result.token
        const token_split = access_token.split(".")
        const fields_str = JSON.parse(atob(token_split[1]))
        commit('setUserId', fields_str && fields_str.user)
        localStorage.setItem("tokens", JSON.stringify(res.data.result))
    },


    login({
        dispatch
    }, payload) {
        return this.$axios({
            method: "POST",
            data: payload,
            url: "/login"
        }).then((res) => {
            dispatch("setCredentials", res)
            return res
        }).catch((err)=>{
            console.log(err);
            return err
        })
    },
    getUser({ commit }){
        const access_token  = localStorage.getItem("tokens")
        const token_split = access_token && access_token.split(".")
        const fields_str = token_split && JSON.parse(atob(token_split[1]))
        const user = fields_str && fields_str.user && fields_str.user
        const role = fields_str && fields_str.role && fields_str.role
        commit("setUserId",user)
        commit("setRole",role)
    },
    logout({
        commit
    }) {
        commit("setState", {
            user: null,
        })
        localStorage.removeItem("tokens")
    }
}