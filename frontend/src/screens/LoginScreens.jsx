import React, { useState } from 'react';
import '../screens/LoginScreens';
import Logo from '../../src/assets/images/logo.png';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container text-center d-flex flex-column justify-content-center vh-100">
        <div className="row">
            <div className="col-md-6">
            <img src={Logo} alt="logo"/>
            </div>
            <div className="col-md-6">
                <h1 className='h1'>Login</h1>
                <form>
                    <label>
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;