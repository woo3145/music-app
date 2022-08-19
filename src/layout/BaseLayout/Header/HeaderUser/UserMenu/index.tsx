interface Props {
  visible: boolean;
  onLogout: () => void;
}

const UserMenu = ({ visible, onLogout }: Props) => {
  return (
    <ul
      className={`absolute top-14 w-44 h-auto border rounded-md p-1 right-0
    ${visible ? 'visible' : 'invisible'}`}
    >
      <li
        className="w-full py-2 px-4 hover:bg-slate-200 cursor-pointer"
        onClick={onLogout}
      >
        Logout
      </li>
    </ul>
  );
};

export default UserMenu;
