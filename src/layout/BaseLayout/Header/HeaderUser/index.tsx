import { useEffect, useRef, useState } from 'react';
import UserMenu from './UserMenu';

interface Props {
  onLogout: () => void;
}

const HeaderUser = ({ onLogout }: Props) => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setVisible(!visible);
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

  return (
    <div className="relative" ref={modalRef}>
      <img
        src="https://source.unsplash.com/random"
        alt="avator"
        className="w-9 h-9 rounded-full cursor-pointer hover:brightness-90 duration-200"
        onClick={toggleMenu}
      />
      <UserMenu visible={visible} onLogout={onLogout} />
    </div>
  );
};

export default HeaderUser;
