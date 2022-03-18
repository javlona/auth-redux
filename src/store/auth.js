import {createAction, createReducer} from '@reduxjs/toolkit'

export const signIn = createAction('auth/singIn')
export const signOut = createAction('auth/singOut')

const initialState = {
    user: {},
    isAuthenticated: false
}

const authReducer = createReducer(initialState, {
    [signIn.type] : (state, action) => {
        return { user: action.payload.user, isAuthenticated: true };
    },

    [signOut.type] : () => {
        return { user: {}, isAuthenticated: false };
    }
})

export default authReducer;