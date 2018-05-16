import {database} from "../firebase";

export const SET = 'asyncReduxCounter/SET'

export const set = (newValue) => ({
    type: SET,
    newValue
})

//poniżej funkcja która ma cały czas synchronizować
//dispatchujemy nowoutworzonoą funkcję do której przekazujemy wartość która jest w bazie danych
//akcja set będzie dispatchowana za każdą zmianą

export const inc = () => (dispatch, getState) => {
    //tutaj mamy getState ponieważ nie zawsze musimy użyć getState w momencie w którym funkcja zostanie wywołana
    // a później ten stan może sie różnić:
    const state = getState()
    database.ref('/counter').set(state.asyncReduxCounter.asyncCounterValue + 1)
}
export const dec = () => (dispatch, getState) => {
    const state = getState()
    database.ref('/counter').set(state.asyncReduxCounter.asyncCounterValue - 1)
}

export const initCounterSync = () => (dispatch, getState) => {
    database.ref('/counter').on(
        'value',
        (snapshot) => dispatch(
            set(
                snapshot.val()
            )
        )
    )
}

const initialState = {
    asyncCounterValue: 0
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET:
            return {
                asyncCounterValue: action.newValue
            }
        default:
            return state
    }
}
