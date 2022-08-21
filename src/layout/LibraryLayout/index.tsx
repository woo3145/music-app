import { NavLink, Outlet } from 'react-router-dom';
import { useMockMe } from '../../mockData/useMockMe';

const LibraryLayout = () => {
  const me = useMockMe();
  return (
    <div className="pt-4 pb-20">
      <div className="py-8 flex items-center">
        <img
          src={me.avatarUrl}
          alt="avatar"
          className="w-20 h-20 rounded-full mr-8 shrink-0"
        />
        <p className="text-4xl">{me.name}</p>
      </div>
      <div className="flex gap-8 text-xl pb-8">
        <NavLink
          to="library"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive
                ? 'text-blue-900 border-b-4 pb-2 border-blue-900'
                : 'text-black'
            }`
          }
        >
          Recently
        </NavLink>
        <NavLink
          to="likes"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive
                ? 'text-blue-900 border-b-4 pb-2 border-blue-900'
                : 'text-black'
            }`
          }
        >
          Likes
        </NavLink>
        <NavLink
          to="playlists"
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive
                ? 'text-blue-900 border-b-4 pb-2 border-blue-900'
                : 'text-black'
            }`
          }
        >
          Playlists
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default LibraryLayout;
