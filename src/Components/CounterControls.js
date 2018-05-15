import React from 'react'
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

const CounterControls = (props) => (
    <div>
        <h1>{props.counterValue}</h1>
        <RaisedButton
            label={'-'}
            backgroundColor={'#FF5722'}
        />

        <RaisedButton
            label={'+'}
            backgroundColor={'#689F38'}
        />
    </div>
)

const mapStateToProps = state => ({
    counterValue: state.counter
})


//to dzięki connectovi który z odbiera stan z providera, counterValue wie jaki stan ma przyjąć, bez connect
//stanstate.counter jest niczym! (provider zainstalowaliśmy w index.js
export default connect (
    mapStateToProps
)(CounterControls)
