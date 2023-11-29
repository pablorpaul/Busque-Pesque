import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './../components/Body';

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}
