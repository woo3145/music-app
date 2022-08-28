// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  DocumentData,
  collection,
  CollectionReference,
} from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

// 생성된 콜렉션에 타입을 매핑해주는 헬퍼함수
export const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

// DB Collections

export const usersCollection = createCollection<IUser>('users');
