import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './../components/Body';
import Login from './../screens/LoginScreens';
import Cadastro from '../screens/CadastroScreens';

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/"></Route>
        <Route element={<Login />} path="login/"></Route>
        <Route element={<Cadastro />} path="cadastro/"></Route>
      </Routes>
    </BrowserRouter>
  );
}
