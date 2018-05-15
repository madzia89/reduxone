import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const Controls = (props) => (
    <div>
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

export default Controls