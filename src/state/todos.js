const ADD = 'todos/ADD'
const DEL = 'todos/DELETE'

export const add = (taskText) => ({type: ADD, taskText})
export const del = (index) => ({type: DEL, index}) //index bo będziemy usuwać po indexie


const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return action.taskText ?  //to mówi, że jeżeli action.taskText istnieje to ma zrobić concata, a jeżeli nie to ma zwrócić stan
                state.concat({ //zwracamy nową tablicę łączącą stan z taskText i właściwością completed
                    text: action.taskText,
                    completed: false
                })
                : state
        case DEL:
            return state.filter((task, index) => index !== action.index)
        default:
            return state

    }
}