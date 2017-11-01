import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange(ev) {
    this.setState({
      username: ev.target.value
    })
  }

  handlePasswordChange(ev) {
    this.setState({
      password: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    if(this.state.username.length>0 && this.state.password.length>0) {
      this.props.onSubmit({username: this.state.username, password: this.state.password})
      this.setState({
        username: "",
        password: ""
      })
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
