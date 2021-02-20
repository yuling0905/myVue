import * as types from "./types"
let action = {
    setLoading: ({
        commit
    }, res) => {
        commit(types.SET_LOADING, res)
    }
}
export default action