interface IUser {
  uid: string;
  displayName: string;
  photoURL?: string;
}

interface IMe {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
}
