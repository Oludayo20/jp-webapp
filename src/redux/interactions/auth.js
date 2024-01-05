import { auth, storage, db } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, setDoc, getDoc, doc } from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

export const registerInteraction = async (data) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const user = userCredential.user;
    const { fullName, email } = data;

    await updateProfile(user, {
      displayName: fullName,
      photoURL:
        'https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png'
    });

    return await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      isAdmin: false,
      fullName,
      email,
      photoURL:
        'https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png'
    });
  } catch (error) {
    return error;
  }
};

export const signInWithGoogleInteraction = async () => {
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());

    const userDocRef = doc(db, 'users', result.user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      const { displayName, email, uid } = result.user;
      await setDoc(userDocRef, {
        uid,
        isAdmin: false,
        fullName: displayName,
        email,
        photoURL:
          'https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png'
      });
    }

    return 'Successful!!'
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return error;
  }
};

export const loginInteraction = async (data) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const { uid, displayName, email, photoURL } = userCredential.user;

    return { uid, displayName, email, photoURL };
  } catch (error) {
    return error;
  }
};

export const getUserByIdInteraction = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();

      return user;
    } else {
      return 'No user found!!';
    }
  } catch (error) {
    return error;
  }
};

export const logoutInteraction = async () => {
  try {
    await signOut(auth);
    return 'Logout successful';
  } catch (error) {
    return error;
  }
};
