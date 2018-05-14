//typy akcji:
const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creators declarations - funkcja pomocnicza abyśmy w dispatchu nie musieli tworzyć obiektu
export const inc = (value) => ({type: INC, value})
export const dec = (value) => ({type: DEC, value})

//initial state stan zanim jakakolwiek akcja będzie dispatched
const initialState = 0

//reducerowi zawsze musimy podawać akcję i stary stan, a on zwraca nam nowy stan


//state==initialState mówi nam że ma wziąć stan, a jeżeli go jeszcze nie ma, to wziąć initial state
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + action.value
        case DEC:
            return state - action.value

        //return mówi co robić gdy inne akcje będą miały miejsce niż INC i DEC, w tym przypadku default zwraca stan sprzed akcji dla tego reducera
        default:
            return state
    }
}