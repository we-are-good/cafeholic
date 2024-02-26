import Aside from '../components/aside/AsideTest';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Aside />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
