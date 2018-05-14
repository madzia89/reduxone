
const initialState = 0

//reducerowi zawsze musimy podawać akcję i stary stan, a on zwraca nam nowy stan


//state==initialState mówi nam że ma wziąć stan, a jeżeli go jeszcze nie ma, to wziąć initial state
export default (state = initialState, action) => {
    return state
}