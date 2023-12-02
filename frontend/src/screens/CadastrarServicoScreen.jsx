import React, { useState } from "react";
import "./CadastrarServicoScreen";
import Logo from "../../src/assets/images/logo.png";
import "../../src/screens/CadastrarServicoScreen.css";

const CadastrarServico = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCadastrarServico = () => {
    console.log("Título:", titulo);
    console.log("Descrição:", descricao);
  };

  const handleLimparServico = () => {
    setTitulo("");
    setDescricao("");
  };

  return (
    <div className="container text-center d-flex flex-column justify-content-center vh-100">
      <div className="row">
        <div className="col-md-6">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col-md-6">
          <h1 className="h1">Cadastrar Serviço</h1>
          <form>
            <label>
              Título:        
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </label>
            <br />
            <label>
              Descrição:
              <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </label>
            <br />
            <div className="container">
              <div className="text-start col-md-5">
                <button type="button" onClick={handleLimparServico}>
                  Limpar
                </button>
              </div>
              <div className="text-end col-md-2">
                <button type="button" onClick={handleCadastrarServico}>
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastrarServico;
