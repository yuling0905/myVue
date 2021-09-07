import * as types from "./types"
let action = {
    setLoading: ({
        commit
    }, res) => {
        commit(types.SET_LOADING, res)
    },
    setSignStatus: ({
        commit
    }, res) => {
        commit(types.SET_SIGN_STATUS, res)
    },

}
export default action