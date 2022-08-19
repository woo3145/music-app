import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

const NavItem = ({ to, text }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? 'text-blue-900' : 'text-black'
        } text-xl px-4 py-2 cursor-pointer hover:bg-slate-300 rounded-md duration-300`
      }
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
