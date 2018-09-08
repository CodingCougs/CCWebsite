import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return <div>Select a user to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.user.firstName} {this.props.user.lastName}</div>
                <div>Position: {this.props.user.position}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);