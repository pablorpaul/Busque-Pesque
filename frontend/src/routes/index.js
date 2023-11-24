import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./../components/Body";
import Body from "./../screens/Contact";
import Body from "./../screens/CriarConta";
import Body from "./../screens/Estabelecimentos";
import Body from "./../screens/Fetch";
import Body from "./../screens/Home";
import Body from "./../screens/Login";
import Body from "./../screens/PerfilCliente";
import Body from "./../screens/PerfilEstabelecimento";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<Contact />} path="/telacontato" />
          <Route element={<CriarConta />} path="/telacriarconta" />
          <Route element={<Estabelecimentos />} path="/telaestabelecimentos" />
          <Route element={<Fetch />} path="/fetch" />
          <Route element={<Home />} path="/telahome" />
          <Route element={<Login />} path="/telalogin" />
          <Route element={<PerfilCliente />} path="/telaperfilcliente" />
          <Route element={<PerfilEstabelecimento />} path="/telaperfilestabelecimento" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
