import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
class signIn extends Component {
  state = {};
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <div className="container">
        <GoogleLogin
          clientId="71094826543-0r4v5epljunej2ti23v49b46gpk562r4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />,
      </div>
    );
  }
}

export default signIn;
