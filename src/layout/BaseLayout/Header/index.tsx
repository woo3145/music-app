import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HeaderLogo from './HeaderLogo';
import HeaderUser from './HeaderUser';
import { useEffect, useState } from 'react';
import Modal from '../../../modals/Modal';
import LoginModal from '../../../modals/AuthModal';
import { useAppDispatch, useAppSelector } from '../../../utils/redux/store';
import { logout } from '../../../utils/redux/modules/userSlice';
import { auth } from '../../../services/firebase';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const toggleLoginModalVisible = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const onLogout = () => {
    if (window.confirm('정말 로그아웃을 하겠습니까?')) {
      dispatch(logout());
      auth.signOut();
    }
  };
  useEffect(() => {
    if (user) {
      setLoginModalVisible(false);
    }
  }, [user]);

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
          <>
            <Link
              to="login"
              className="px-6 py-2 text-blue-900 rounded-md cursor-pointer hover:bg-slate-300 duration-300"
              onClick={toggleLoginModalVisible}
            >
              로그인
            </Link>
            {loginModalVisible && (
              <Modal onBackdropClick={toggleLoginModalVisible}>
                <LoginModal />
              </Modal>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
