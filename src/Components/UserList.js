import React from 'react'
import {connect} from 'react-redux'

const UserList = (props) => (
    <div>
        {
            //jeżeli nie ma props.users to loading
            !props.users ?
                'Loading'
                :
                props.users.map(
                    user => <div>USER</div>
                )
        }
    </div>
)

const mapStateToProps = state => ({
    usersList: state.randomUsers.usersList
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)