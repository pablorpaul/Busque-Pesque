import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './../components/Body';
import PerfilScreen from '../screens/PerfilScreen';

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<PerfilScreen />} path="/perfil/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
