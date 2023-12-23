import { storage, db } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';

export const addDepartmentInteraction = async (data) => {
  try {
    let profilePicUrl = null;

    if (data.profilePic) {
      const storagePath = `departmentTeamLeadFiles/${
        data.teamLead + Date.now()
      }`;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, data.profilePic);

      profilePicUrl = await new Promise((resolve, reject) => {
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
    }

    const departmentData = {
      name: data.name,
      description: data.description,
      teamLead: data.teamLead,
      bio: data.bio,
      profilePicUrl
    };

    await addDoc(collection(db, 'departments'), departmentData);

    return departmentData;
  } catch (error) {
    console.error('Error adding department:', error);
    return error; // Rethrow the error to be caught by the caller
  }
};

export const getDepartmentInteraction = async () => {
  try {
    const collectionRef = collection(db, 'departments');
    const snapshot = await getDocs(collectionRef);
    const departments = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return departments;
  } catch (error) {
    return error;
  }
};
