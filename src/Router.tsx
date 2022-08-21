import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import LibraryLayout from './layout/LibraryLayout';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Library from './pages/You/Library';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="you" element={<LibraryLayout />}>
            <Route path="library" element={<Library />} />
            <Route path="likes" element={<Library />} />
            <Route path="playlists" element={<Library />} />
          </Route>
          <Route path="login" element={<Home />} />

          <Route path="search/:query" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
