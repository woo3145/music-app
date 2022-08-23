import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onBackdropClick: () => void;
  children: React.ReactNode;
}
const Modal = ({ onBackdropClick, children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')!;

  useEffect(() => {
    // body를 fixed로 고정하고 top에서 현재스크롤 위치만큼 내린후 스크롤 없애줌
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: hidden;
    `;
    // 모달이 닫힐 때 body 속성 초기화
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-screen z-50">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 flex items-center justify-center"
        onClick={onBackdropClick}
      ></div>
      <div className="w-64 h-44 bg-red-400 fixed">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
