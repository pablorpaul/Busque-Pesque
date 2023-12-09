import Logo from "../../src/assets/images/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ notLogged }) => {
  const [show, setShow] = useState(notLogged);
  const [userLogged, setUserLogged] = useState(
    JSON.parse(localStorage.getItem("userLogged"))
  );

  useEffect(() => {
    setShow(notLogged);
  }, [notLogged]);

  const username = () => {
    return userLogged ? userLogged.username : "";
  };

  const id = () => {
    return userLogged ? userLogged.id : "";
  };

  const logout = () => {
    localStorage.removeItem("userLogged");
    setShow(true);
  };

  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-white px-1 px-sm-4">
      <div className="container-fluid px-0">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" height={60 + "px"} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center fs-5 fw-bold px-lg-5">
              <Link to="/estabelecimentos" className="nav-link">
                Estabelecimentos
              </Link>
            </li>
            {show && (
              <>
                <li className="nav-item d-flex align-items-center">
                  <Link to="/cadastro" className="nav-link">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary fw-bold btn-criar-conta"
                    >
                      Criar Conta
                    </button>
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center px-lg-5">
                  <Link to="/login" className="nav-link">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary fw-bold btn-login"
                    >
                      Login
                    </button>
                  </Link>
                </li>
              </>
            )}
            {!show && (
              <>
                <li className="nav-item d-flex align-items-center fs-5 fw-bold">
                  <Link to="cadastrarservico/" className="nav-link">
                    Cadastrar Serviço
                  </Link>
                </li>
                <li class="nav-item fs-5 fw-bold dropdown px-lg-5">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Olá, {username()}
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to={`/perfil/${id()}`}
                        className="dropdown-item fs-5 fw-bold text-white"
                      >
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={logout}
                        to="/"
                        className="dropdown-item fs-5 fw-bold text-white"
                      >
                        Sair
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
