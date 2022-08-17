import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  const user = null;

  return (
    <header className="w-full h-16 flex justify-between items-center px-10">
      <HeaderLogo />

      <NavBar />
      <div className="flex items-center">
        <SearchBar />
        {user ? null : (
          <Link
            to="login"
            className="px-6 py-2 text-blue-900 font-mono rounded-md ml-8 cursor-pointer hover:bg-slate-300 duration-300"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
