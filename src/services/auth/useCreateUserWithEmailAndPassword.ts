import {
  Auth,
  createUserWithEmailAndPassword as fsCreateUserWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
} from 'firebase/auth';
import { useState } from 'react';
import { CustomErrorCodes } from '../../error/error.constants';
import { login } from '../../utils/redux/modules/userSlice';
import { useAppDispatch } from '../../utils/redux/store';
import { addDoc } from 'firebase/firestore';
import { usersCollection } from '../firebase';
import { getErrorMessage } from '../../utils/utils';

export const defaultPhotoUrl =
  'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGN1dGUlMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';

const useCreateUserWithEmailAndPassword = (auth: Auth) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const dispatch = useAppDispatch();

  const createUserWithEmailAndPassword = async (
    name: string,
    email: string,
    password: string
  ) => {
    setError('');
    setLoading(true);
    try {
      if (name.length < 3 || 12 < name.length) {
        throw Error(CustomErrorCodes.INVALID_NICKNAME);
      }
      const { user } = await fsCreateUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(user, {
        displayName: name,
        photoURL: defaultPhotoUrl,
      });

      const docRef = await addDoc(usersCollection, {
        uid: user.uid,
        photoURL: defaultPhotoUrl,
        displayName: name,
      });
      console.log('유저 회원가입 성공', docRef.id);

      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        })
      );
    } catch (e: any) {
      switch (getErrorMessage(e)) {
        case AuthErrorCodes.EMAIL_EXISTS:
          setError('이미 사용중인 이메일입니다.');
          break;
        case AuthErrorCodes.WEAK_PASSWORD:
          setError('패스워드는 6글자 이상이어야 합니다.');
          break;
        case AuthErrorCodes.INVALID_EMAIL:
          setError('잘못 된 이메일 형식 입니다.');
          break;
        case CustomErrorCodes.INVALID_NICKNAME:
          setError('닉네임 길이는 3 ~ 12글자 사이입니다.');
          break;
        default:
          setError('회원가입 도중 문제가 발생하였습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { createUserWithEmailAndPassword, loading, error };
};

export default useCreateUserWithEmailAndPassword;
