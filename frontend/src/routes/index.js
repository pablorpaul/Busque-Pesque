import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './../components/Body';
import PerfilScreen from '../screens/PerfilScreen';
import CadastrarServico from "./../screens/CadastrarServicoScreen";
import EditarServico from "./../screens/EditarServicoScreen";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<PerfilScreen />} path="/perfil/:id" />
          <Route
            element={<CadastrarServico />}
            path="cadastrarservico/"
          ></Route>
          <Route element={<EditarServico />} path="editarservico/"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
