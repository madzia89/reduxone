import {auth, googleProvider} from "../firebase";

const LOGGED_IN = 'auth/LOGGED_IN'
const LOGGED_OUT = 'auth/LOGGED_OUT'

export const loggedIn = (user) => ({type: LOGGED_IN, user})
export const loggedOut = () => ({type: LOGGED_OUT,})


export const initAuthUSerSync = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(loggedIn(user))
            }
            else {
                dispatch(loggedOut())
            }
        }
    )
}

export const logInByGoogle = () => (dispatch, getState) => {
    auth.signInWithRedirect(googleProvider)
}

const initialState = {
    isUserLoggedIn: false, // wstępnie użytkownik nie będzie zalogowany
    user: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user, //tutaj przekazujemy do stanu id usera
            }
        case LOGGED_OUT:
            return {
                ...state,
                initialState,
                user: null,
            }
        default:
            return state
    }
}