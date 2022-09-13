import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import LibraryLayout from './layout/LibraryLayout';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Library from './pages/You/Library';
import Likes from './pages/You/Likes';
import PlayLists from './pages/You/PlayLists';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="you" element={<LibraryLayout />}>
          <Route path="library" element={<Library />} />
          <Route path="likes" element={<Likes />} />
          <Route path="playlists" element={<PlayLists />} />
        </Route>
        <Route path="login" element={<Home />} />

        <Route path="search/:query" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
