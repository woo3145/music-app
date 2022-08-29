import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../../../../../modals/AuthModal';
import Modal from '../../../../../modals/Modal';

const LoginButton = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const toggleLoginModalVisible = () => {
    setLoginModalVisible(!loginModalVisible);
  };
  
  return (
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
          <AuthModal />
        </Modal>
      )}
    </>
  );
};

export default LoginButton;
