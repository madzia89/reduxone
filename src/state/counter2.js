//ten plik jes właśnie reducerem!! nie musi miec nazwy bo jest nadawana podczas importu w store.js

const initialState = 0

const INC = 'counter2/INC' //to jest nazwa akcji która jest wykonywana, a nie ścieżka do niej
const DEC = 'counter2/DEC'

export const inc = () => ({type:INC})
export const dec = () => ({type:DEC})

export default (state = initialState, action) => {

    switch (action.type){
        case INC :
            return state + 1
        case DEC :
            return state - 1
        default:
            return state
    }
}
