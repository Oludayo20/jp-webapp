import { storage, db } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';

export const addMediaInteraction = async (data) => {
  const storagePath = `mediaFiles/${data.speaker + data.category + Date.now()}`;
  const storageRef = ref(storage, storagePath);
  const uploadTask = uploadBytesResumable(storageRef, data.video);

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

    const mediaData = {
      title: data.title,
      category: data.category,
      speaker: data.speaker,
      videoUrl: downloadURL,
      date: Date.now()
    };

    await addDoc(collection(db, 'mediaFiles'), mediaData);

    return mediaData;
  } catch (error) {
    return error;
  }
};

export const getMediaInteraction = async () => {
  try {
    const collectionRef = collection(db, 'mediaFiles');
    const snapshot = await getDocs(collectionRef);
    const medias = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return medias;
  } catch (error) {
    return error;
  }
};
