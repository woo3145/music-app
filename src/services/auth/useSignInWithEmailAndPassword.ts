import {
  Auth,
  signInWithEmailAndPassword as fsSignInWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth';
import { useState } from 'react';
import { login } from '../../utils/redux/modules/userSlice';
import { useAppDispatch } from '../../utils/redux/store';
import { getErrorMessage } from '../../utils/utils';

const useSignInWithEmailAndPassword = (auth: Auth) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    setError('');
    setLoading(true);
    try {
      const { user } = await fsSignInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        })
      );
    } catch (e) {
      switch (getErrorMessage(e)) {
        case AuthErrorCodes.USER_DELETED:
          setError('이메일 또는 패스워드가 잘못되었습니다.');
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          setError('이메일 또는 패스워드가 잘못되었습니다.');
          break;
        default:
          setError('로그인 도중 문제가 발생하였습니다.');
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return { signInWithEmailAndPassword, loading, error };
};

export default useSignInWithEmailAndPassword;
