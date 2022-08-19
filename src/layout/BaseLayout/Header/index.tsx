import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HeaderLogo from './HeaderLogo';
import HeaderUser from './HeaderUser';
import { useState } from 'react';

const Header = () => {
  const [user, setUser] = useState(false);

  // 임시 로그인, 로그아웃
  const onLogin = () => {
    setUser(true);
  };
  const onLogout = () => {
    if (window.confirm('정말 로그아웃을 하겠습니까?')) {
      setUser(false);
    }
  };

  return (
    <header
      className="w-full h-16 flex justify-between items-center fixed top-0 left-0 bg-white z-40 shadow-md
    px-4 lg:px-16 duration-200"
    >
      <HeaderLogo />

      <NavBar />
      <div className="flex items-center gap-4">
        <SearchBar />
        {user ? (
          <HeaderUser onLogout={onLogout} />
        ) : (
          <Link
            to="login"
            className="px-6 py-2 text-blue-900 rounded-md cursor-pointer hover:bg-slate-300 duration-300"
            onClick={onLogin}
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
