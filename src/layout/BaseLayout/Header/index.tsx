import NavBar from './NavBar';
import SearchBar from './SearchBar';
import HeaderLogo from './HeaderLogo';
import HeaderUser from './HeaderUser';

const Header = () => {
  return (
    <header
      className="w-full h-16 flex justify-between items-center fixed top-0 left-0 bg-white z-40 shadow-md
    px-4 lg:px-16 duration-200"
    >
      <HeaderLogo />

      <NavBar />
      <div className="flex items-center gap-4">
        <SearchBar />
        <HeaderUser />
      </div>
    </header>
  );
};

export default Header;
