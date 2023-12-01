import React, { useState } from 'react';
import '../screens/LoginScreens';
import Logo from '../../src/assets/images/logo.png';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container d-flex flex-column justify-content-center vh-100">
        <div className="row">
            <div className="col-md-6 text-center">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="col-md-6">
                <h1 className='h1 text-center'>Login</h1>
                <form>
                    <div className='text-left'>
                        <h4>Email</h4>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="name@example.com"
                        />
                    </div>
                    <br />
                    <div>
                        <h4>Password</h4>
                        <input 
                            type="Password" 
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="123456"
                        />
                    </div>
                    <br />
                    <div className='text-center'>
                        <button type="button" onClick={handleLogin}>
                            Fazer Login
                        </button>
                    </div>
                </form>
                <div className='text-center'>
                    <label>
                        Ainda não tem uma conta? <Link to="cadastro/">Criar uma conta</Link>
                    </label>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;