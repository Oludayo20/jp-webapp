import { storage, db } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';

export const addJobInteraction = async (data) => {
  const storagePath = `jobFiles/${data.role + data.company + Date.now()}`;
  const storageRef = ref(storage, storagePath);
  const uploadTask = uploadBytesResumable(storageRef, data.logo);

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

    const jobData = {
      company: data.company,
      description: data.description,
      location: data.location,
      position: data.position,
      role: data.role,
      contact: data.contact,
      logoUrl: downloadURL,
      postedAt: Date.now()
    };

    await addDoc(collection(db, 'jobs'), jobData);

    return jobData;
  } catch (error) {
    return error;
  }
};

export const getJobInteraction = async () => {
  try {
    const collectionRef = collection(db, 'jobs');
    const snapshot = await getDocs(collectionRef);
    const jobs = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return jobs;
  } catch (error) {
    return error;
  }
};
