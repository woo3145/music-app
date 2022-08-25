import {
  Auth,
  AuthError,
  UserCredential,
  signInWithEmailAndPassword as fsSignInWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth';
import { useState } from 'react';

const useSignInWithEmailAndPassword = (auth: Auth) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [loggedInUser, setLoggedInUser] = useState<UserCredential>();

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    setError('');
    setLoading(true);
    try {
      const user = await fsSignInWithEmailAndPassword(auth, email, password);

      setLoggedInUser(user);
    } catch (e) {
      const error = e as AuthError;
      console.log(error.code);
      if (error.code === AuthErrorCodes.USER_DELETED) {
        setError('이메일 또는 패스워드가 잘못되었습니다.');
      } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        setError('이메일 또는 패스워드가 잘못되었습니다.');
      } else {
        setError('로그인 도중 문제가 발생하였습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { signInWithEmailAndPassword, loggedInUser, loading, error };
};

export default useSignInWithEmailAndPassword;
