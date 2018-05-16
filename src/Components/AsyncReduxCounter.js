import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import asyncReduxCounter, {set} from '../state/asyncReduxCounter'



const ToDo = (props) => (
    <div>
        <h1>
            {props.asyncCounterValue}
        </h1>
        <RaisedButton
            onClick={props.onSetClick}
            label={'+'}
        />

    </div>
)

const mapStateToProps = state => ({
    asyncCounterValue: state.asyncReduxCounter.asyncCounterValue
})

const mapDispatchToProps = dispatch => ({
    onSetClick: () => dispatch(set())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)