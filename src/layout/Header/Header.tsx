import HeaderLogo from './Logo';
import { Info } from './Info';

const Header = () => {
  return (
    <header
      className="w-full h-16 flex justify-between items-center fixed top-0 left-0 bg-white z-40 shadow-md
    px-4 lg:px-16 duration-200"
    >
      <HeaderLogo />
      <Info />
    </header>
  );
};

export default Header;
