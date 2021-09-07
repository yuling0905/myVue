import * as types from "./types"
let mutations = {
    [types.SET_LOADING]: (state, res) => {
        state.loading = res
    },
    [types.SET_SIGN_STATUS]: (state, res) => {
        state.isSignIn = res
        alert(state.isSignIn,"state.isSignIn");
        console.log(state.isSignIn," state.isSignIn");
    }
}
export default mutations