import { storage, db } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';

export const addMinisterInteraction = async (data) => {
  const storagePath = `ministerFile/${data.fullName + Date.now()}`;
  const storageRef = ref(storage, storagePath);
  const uploadTask = uploadBytesResumable(storageRef, data.img);

  try {
    const downloadURL = await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        () => {},
        reject,
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(url);
          } catch (error) {
            reject(error);
          }
        }
      );
    });

    const ministerData = {
      fullName: data.fullName,
      title: data.title,
      position: data.position,
      bio: data.bio,
      imgUrl: downloadURL,
      socialLinks: data.socialLinks
    };

    await addDoc(collection(db, 'ministers'), ministerData);

    return ministerData;
  } catch (error) {
    return error;
  }
};

export const getMinisterInteraction = async () => {
  try {
    const collectionRef = collection(db, 'ministers');
    const snapshot = await getDocs(collectionRef);
    const products = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return products;
  } catch (error) {
    return error;
  }
};

export const getMinisterByIdInteraction = async (id) => {
  try {
    const collectionRef = collection(db, 'ministers');
    const snapshot = await getDocs(collectionRef);
    const ministers = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return ministers;
  } catch (error) {
    return error;
  }
};
