import { BsTsunami } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <Link to="" className="flex items-center text-blue-900 cursor-pointer">
      <BsTsunami className="text-2xl animate-pulse duration-200" />
      <p className="text-xl pl-4">Woo3145 - Music Player</p>
    </Link>
  );
};

export default HeaderLogo;
