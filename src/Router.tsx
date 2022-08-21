import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import Explore from './pages/Explore';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="library" element={<Home />} />
          <Route path="login" element={<Home />} />

          <Route path="search/:query" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
