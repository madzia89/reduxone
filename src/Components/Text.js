import React from 'react'
import ReactDOM from 'react-dom'
import {add} from '../state/exerciseState'
import TextField from 'material-ui/TextField'
import {connect} from 'react-redux'


const Text = (props) => (

    <div>
        <h1>{props.theText}</h1>
        <TextField
            name={'newText'}
            onChange={props.show}
        />
    </div>

)

const check = state => ({
    theText: state.exerciseState
})

const dispatched = dispatch => ({
    show: (ev, value) => dispatch(add(value))
})


export default connect(
    check,
    dispatched
)(Text)

