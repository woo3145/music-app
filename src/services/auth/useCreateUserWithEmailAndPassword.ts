import {
  Auth,
  AuthError,
  UserCredential,
  createUserWithEmailAndPassword as fsCreateUserWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth';
import { useState } from 'react';

const useCreateUserWithEmailAndPassword = (auth: Auth) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [registeredUser, setRegisteredUser] = useState<UserCredential>();

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    setError('');
    setLoading(true);
    try {
      const user = await fsCreateUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setRegisteredUser(user);
    } catch (e) {
      const error = e as AuthError;
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError('이미 사용중인 이메일입니다.');
      } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setError('패스워드는 6글자 이상이어야 합니다.');
      } else {
        setError('회원가입 도중 문제가 발생하였습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { createUserWithEmailAndPassword, registeredUser, loading, error };
};

export default useCreateUserWithEmailAndPassword;
