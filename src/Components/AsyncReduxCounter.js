import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import asyncReduxCounter, {inc, dec} from '../state/asyncReduxCounter'


const ToDo = (props) => (
    props.asyncCounterValue === null ?
        'Loading...'
        :
    <div>
        <h1>
            {props.asyncCounterValue}
        </h1>
        <RaisedButton
            onClick={props.onDecClick}
            label={'-'}
        />
        <RaisedButton
            onClick={props.onIncClick}
            label={'+'}
        />

    </div>
)

const mapStateToProps = state => ({
    asyncCounterValue: state.asyncReduxCounter.asyncCounterValue
})

const mapDispatchToProps = dispatch => ({
    onIncClick: () => dispatch(inc()),
    onDecClick: () => dispatch(dec())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)