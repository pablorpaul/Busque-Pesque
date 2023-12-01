import React, { useState } from 'react';
import '../screens/LoginScreens';
import logoB from '../../src/assets/images/logoB.png';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('email:', email);
    console.log('senha:', senha);
  };

  return (
    <div className="container d-flex flex-column justify-content-center vh-100">
        <div className="row">
            <div className="col-md-6 text-center">
                <img src={logoB} alt="logo" style={{ maxWidth: '100%', height: 'auto'}}/>
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
                        <h4>Senha</h4>
                        <input 
                            type="senha" 
                            className="form-control" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} 
                            placeholder="123456"
                        />
                    </div>
                    <br />
                    <div className='text-center'>
                        <button type="button" class="btn btn-primary" onClick={handleLogin}>
                            Fazer Login
                        </button>
                    </div>
                </form>
                <div className='text-center'>
                    <label>
                        Ainda não tem uma conta? <Link to="/cadastro">Criar uma conta</Link>
                    </label>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;