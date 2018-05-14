//typy akcji:
const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creators declarations - funkcja pomocnicza abyśmy w dispatchu nie musieli tworzyć obiektu
const ins = () => ({type: INC})
const dec = () => ({type: DEC})

//initial state stan zanim jakakolwiek akcja będzie dispatched
const initialState = 0

//reducerowi zawsze musimy podawać akcję i stary stan, a on zwraca nam nowy stan


//state==initialState mówi nam że ma wziąć stan, a jeżeli go jeszcze nie ma, to wziąć initial state
export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + 1
        case DEC:
            return state - 1

        //return mówi co robić gdy inne akcje będą miały miejsce niż INC i DEC, w tym przypadku default zwraca stan sprzed akcji dla tego reducera
        default:
            return state
    }
}