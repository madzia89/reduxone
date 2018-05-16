import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from "../state/randomUsers";
import RaisedButton from 'material-ui/RaisedButton'

const upper = word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const UserList = (props) => (
    <div>
        <div>
            <RaisedButton
                onClick={props.onReloadClick}
                fullWidth={true}
                secondary={true}
                label={
                    props.usersList.length === 0 ?
                        'CLICK TO LOAD' :
                        'CLICK TO RELOAD'
                }
            />
        </div>
        <div className="users"
             style={{display: 'flex', justifyContent: 'center'}}>
            {
                //jeżeli nie ma props.users to loading
                props.isDataLoading ?
                    'Loading...'
                    :
                    props.usersList.map(
                        (user, i) => <div key={i}>
                            <strong>{upper(user.name.last)}</strong> {upper(user.name.first)}
                        </div>
                    )
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    isDataLoading: state.randomUsers.isDataLoading,
    usersList: state.randomUsers.usersList
})

const mapDispatchToProps = dispatch => ({
    onReloadClick: () => dispatch(fetchUsers())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)