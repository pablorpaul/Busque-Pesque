import React, { useState } from "react";
import "./CadastrarServicoScreen";
import Logo from "../../src/assets/images/logo.png";

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
            <div className="campo">
              <label>
                Título:
                <input
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </label>
              <br />
            </div>
            <div className="campo">
              <label>
                Descrição:
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </label>
              <br />
            </div>
            <button type="button" onClick={handleLimparServico}>
              Limpar
            </button>
            <button type="button" onClick={handleCadastrarServico}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastrarServico;
