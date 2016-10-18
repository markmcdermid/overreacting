import React from 'react';
import { IoSocialGoogle } from 'react-icons/lib/io';
import GoogleLogin from 'react-google-login';

const Login = (props) => (
    <div>
      <GoogleLogin
        style={{}}
        className="btn animate--bounce"
        clientId="859078627820-qboh12tbl1vv98ii80gf6oh8dqddn67a.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      >
        <IoSocialGoogle className="icon--s" /> <span>Login With Google</span>
      </GoogleLogin>
    </div>
);

export default Login;
