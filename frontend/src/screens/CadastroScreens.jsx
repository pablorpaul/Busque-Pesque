import React, { useState } from 'react';
import './CadastroScreens';
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [email, setemail] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastro = () => {
    console.log('email:', email);
    console.log('senha:', senha);
    console.log('senha2:', senha2);
    console.log('nome:', nome);
    console.log('telefone:', telefone);
  };

  return (
    <div className="container d-flex flex-column justify-content-center vh-100">
        <div className="row">
        <h1 className='h1 text-center'>Cadastro</h1>
            <div className="col-md-6">
                <form>
                    <div className='text-left'>
                        <h4>Nome</h4>
                        <input 
                            type="nome" 
                            className="form-control" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome Sobrenome"
                        />
                    </div>
                    <br />
                    <div>
                        <h4>Telefone</h4>
                        <input 
                            type="telefone" 
                            className="form-control" 
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)} 
                            placeholder="(55) 47 9 9999-9999"
                        />
                    </div>
                    <br />
                </form>
            </div>
            <div className="col-md-6">
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
                    <div>
                        <h4>Confirmar Senha</h4>
                        <input 
                            type="senha2" 
                            className="form-control" 
                            value={senha2}
                            onChange={(e) => setSenha2(e.target.value)} 
                            placeholder="Confirme sua senha"
                        />
                    </div>
                    <br />
                </form>
            </div>
            <div className='text-center'>
                <button type="button" class="btn btn-primary" onClick={handleCadastro}>
                    Fazer Cadastro
                </button>
            </div>
            <div className='text-center'>
                <label>
                    Japossui uma conta? <Link to="/login">Fazer Login</Link>
                </label>
            </div>
        </div>
    </div>
  );
};

export default Cadastro;