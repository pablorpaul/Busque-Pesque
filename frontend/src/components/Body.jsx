import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Body() {
  const [notLogged, setNotLogged] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setNotLogged(localStorage.getItem("userLogged") === null);
  }, []);

  const exibir = () => {
    return (
      window.location.pathname !== "/cadastro" &&
      window.location.pathname !== "/login"
    );
  };

  return (
    <>
      {exibir() && (
        <>
          <Header notLogged={notLogged} />
        </>
      )}
      <Outlet />
    </>
  );
}
