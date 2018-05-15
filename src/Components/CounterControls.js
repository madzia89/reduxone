import React from 'react'
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import {inc, dec} from '../state/counter'

const CounterControls = (props) => (
    <div>
        <h1 style={{textAlign: 'center'}}>{props.counterValue}</h1>
        <RaisedButton
            label={'-'}
            backgroundColor={'#FF5722'}
            onClick={props.onDecreaseHandler}
        />

        <RaisedButton
            label={'+'}
            backgroundColor={'#689F38'}
            onClick={props.onIncreaseHandler}
        />
    </div>
)

const mapDispatchToProps = dispatch => ({
    onDecreaseHandler: () => dispatch(dec()), //do propsa przypisz funkcję która wywoła metodę dispatch która dostanie akcję wyprodukowaną przez akcję dec, bez ()=> onDecreaseHandler będzie obiektem a nie funkcją
    onIncreaseHandler: () => dispatch(inc())
})

const mapStateToProps = state => ({
    counterValue: state.counter,
})


//to dzięki connectovi który z odbiera stan z providera, counterValue wie jaki stan ma przyjąć, bez connect
//stanstate.counter jest niczym! (provider zainstalowaliśmy w index.js
export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(CounterControls)
