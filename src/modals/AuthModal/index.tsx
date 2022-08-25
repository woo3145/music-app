import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = () => {
  const [formType, setFormType] = useState('login');

  const changeForm = () => {
    setFormType(formType === 'login' ? 'register' : 'login');
  };
  return (
    <div>
      <p className="text-2xl font-bold">
        {formType === 'login' ? '로그인' : '회원가입'}
      </p>

      <div className="py-8">
        {formType === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>

      <div className="flex justify-center">
        <p className="mr-2">
          {formType === 'login'
            ? '아직 회원이 아니신가요?'
            : '계정이 이미 있으신가요?'}
        </p>
        <p
          className="text-blue-900 cursor-pointer font-semibold"
          onClick={changeForm}
        >
          {formType === 'login' ? '회원가입' : '로그인'}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
