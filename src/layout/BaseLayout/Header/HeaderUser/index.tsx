import { useEffect, useRef, useState } from 'react';
import { defaultPhotoUrl } from '../../../../services/auth/useCreateUserWithEmailAndPassword';
import { auth } from '../../../../services/firebase';
import { logout } from '../../../../utils/redux/modules/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../utils/redux/store';
import LoginButton from './LoginButton';
import UserMenu from './UserMenu';

const HeaderUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const onLogout = () => {
    if (window.confirm('정말 로그아웃을 하겠습니까?')) {
      dispatch(logout());
      auth.signOut();
    }
  };

  // 해당 관련 요소가 아닌 다른부분 클릭 시 드롭다운메뉴 닫기
  useEffect(() => {
    const handleOutsideClick = (e: globalThis.MouseEvent) => {
      if (!modalRef.current) return;

      if (e.target && !modalRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    window.document.addEventListener('click', handleOutsideClick);
    return () => {
      window.document.removeEventListener('click', handleOutsideClick);
    };
  }, [visible]);

  return user ? (
    <div className="relative" ref={modalRef}>
      <img
        src={user.photoUrl || defaultPhotoUrl}
        alt="avator"
        className="w-9 h-9 rounded-full cursor-pointer hover:brightness-90 duration-200"
        onClick={toggleMenu}
      />
      <UserMenu visible={visible} onLogout={onLogout} />
    </div>
  ) : (
    <LoginButton />
  );
};

export default HeaderUser;
