import NavItem from './NavItem';

const NavBar = () => {
  return (
    <nav className="flex justify-center gap-8">
      <NavItem to="" text="Home" />
      <NavItem to="explore" text="Explore" />
      <NavItem to="library" text="Library" />
    </nav>
  );
};

export default NavBar;
