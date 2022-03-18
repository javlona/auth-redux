const SIGN_IN = "signIn";
const SIGN_OUT = "signOut";
const SIGN_UP = "signUp";


export const signIn = (user) => {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}

const initialState = []

function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, user: action.payload.user, isAuthenticated: true };
        case SIGN_OUT:
            return { ...state, user: {}, isAuthenticated: false };
        default:
            return state;
    }
}

export default reducer;