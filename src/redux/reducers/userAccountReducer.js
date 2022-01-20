import { userAccountActionTypes } from "@redux/actionTypes/index"

const initialState = {
    isRequesting: false,
    error: "",
    user: {},
    token: ""
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {

        //#region LOGIN
        case userAccountActionTypes.LOGIN_REQUESTED:
            return { ...state, isRequesting: true, error: "" }
        case userAccountActionTypes.LOGIN_SUCCESSED:
            return { ...state, isRequesting: false, user: payload?.user, token: payload?.token }
        case userAccountActionTypes.LOGIN_FAIL:
            return { ...state, isRequesting: false, error: payload }
        //#endregion

        default:
            return state;
    }
}

export default reducer;