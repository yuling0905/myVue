import * as types from "./types"
let mutations = {
    [types.SET_LOADING]: (state, res) => {
        state.loading = res
    }
}
export default mutations