import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorizeUser, logoutUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class Login extends Component {
  handleLogin = () => {
    this.props.authorizeUser('sieg');
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  renderButton = () => {
    if (this.props.status === 'logged in') {
      return <button onClick={this.handleLogout}>Logout</button>;
    } else {
      return <input type="button" value="Login" onClick={this.handleLogin} />;
    }
  };

  render() {
    return (
      <div>
        <input type="text" />
        {this.renderButton()}
        <h1>
          Current state is {`${this.props.status} as ${this.props.value}`}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { status: state.status, value: state.value };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { authorizeUser: authorizeUser, logoutUser: logoutUser },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
