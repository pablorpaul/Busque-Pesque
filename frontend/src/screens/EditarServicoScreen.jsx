import React, { useState } from "react";
import "../screens/EditarServicoScreen";
import Logo from "../../src/assets/images/logo.png";

const EditarServico = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleEditarServico = () => {
    console.log("Título:", titulo);
    console.log("Descrição:", descricao);
  };

  const handleLimparServico = () => {};

  return (
    <div className="container text-center d-flex flex-column justify-content-center vh-100">
      <div className="row">
        <div className="col-md-6">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col-md-6">
          <h1 className="h1">Editar Serviço</h1>
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
            <button type="button" onClick={handleLimparServico}>
              Limpar
            </button>
            <button type="button" onClick={handleEditarServico}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarServico;
