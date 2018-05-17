import React from 'react'
import {connect} from 'react-redux'
import LogInByGoogle from "./LogInByGoogle";
import { logInByGoogle } from '../../state/auth'

const Auth = (props) => (
    <div>
        {//jeżeli użytkownik jest zalogowany to mają być wyświetlone dzieci propsa
            //jeżeli nie jest zalogowany ma się wyświetlić component LogInByGoogle
            props.isUserLoggedIn ?
                props.children
                :
                <LogInByGoogle
                    onLogInHandler={}
                />
        }
    </div>
)

const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)