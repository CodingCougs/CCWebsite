import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectUser } from '../actions/index';
import { bindActionCreators } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

class UserList extends Component {
    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                key={user.firstName}
                onClick={() => this.props.selectUser(user)}
                className="list-group-item">{user.firstName}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);