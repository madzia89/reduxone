const ADD = 'exercise/ADD'

const initialState = ''

export const add = (myText) => ({type:ADD, myText})

export default (state = initialState, action) => {

    switch (action.type){
        case ADD:
            return action.myText

        default:
            return state
    }
}