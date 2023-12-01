import React, { useState } from 'react';
import './CadastroScreens';
import Logo from '../../src/assets/images/logo.png';
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
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
                <h1 className='h1 text-center'>Cadastro</h1>
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
                        <button type="button" onClick={handleCadastro}>
                            Fazer Cadastro
                        </button>
                    </div>
                </form>
                <div className='text-center'>
                    <label>
                        Japossui uma conta? <Link to="login/">Fazer Login</Link>
                    </label>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Cadastro;