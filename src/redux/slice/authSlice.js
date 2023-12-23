import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, storage, db } from '../../firebase.config';
import { setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null
};

export const register = createAsyncThunk('register', async (userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    const user = userCredential.user;
    const { fullName, email, profilePic } = userData;

    if (profilePic) {
      const storageRef = ref(storage, `userImages/${Date.now() + fullName}`);

      const uploadTask = uploadBytesResumable(storageRef, profilePic);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          () => {},
          (error) => {
            console.log(error);
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              await updateProfileAndFirestore(
                user,
                fullName,
                email,
                downloadURL
              );
              resolve('User saved successfully');
            } catch (error) {
              console.log(error);
              reject('An unknown error');
            }
          }
        );
      });
    } else {
      await updateProfileAndFirestore(user, fullName, email);
    }

    return 'User saved successfully';
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const updateProfileAndFirestore = async (user, fullName, email, photoURL) => {
  await updateProfile(user, {
    displayName: fullName,
    photoURL: photoURL || null
  });

  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    fullName,
    email,
    photoURL: photoURL || null
  });
};

export const updateUser = createAsyncThunk('updateUser', async (data) => {
  const {
    uid,
    firstName,
    lastName,
    email,
    phoneNum,
    country,
    address,
    city,
    company
  } = data;
  try {
    console.log(uid);
    const userRef = doc(db, 'users', uid);

    await updateDoc(userRef, {
      firstName,
      lastName,
      email,
      phoneNum: phoneNum,
      country,
      address,
      city,
      company: company || null
    });

    return 'Your data has been updated completely';
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const login = createAsyncThunk('login', async (userData) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    const { uid, displayName, email, photoURL } = userCredential.user;

    return { uid, displayName, email, photoURL };
  } catch (error) {
    throw error;
  }
});

export const getUserById = createAsyncThunk('getUserById', async (id) => {
  try {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();

      return user;
    } else {
      throw new Error('No user found!!');
    }
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk('logout', async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw 'Failed to logout';
  }
});

export const resetState = createAsyncThunk('resetState', async () => {
  const { user } = initialState;
  return user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error.message;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error.message;
      state.user = null;
    },
    [resetState.pending]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
    [resetState.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
      // state.user = action.payload;
    },
    [resetState.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
    [getUserById.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
      // state.user = null;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error.message;
      state.user = null;
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error.message;
    },
    [resetState.pending]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
    [resetState.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
      // state.user = action.payload;
    },
    [resetState.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    }
  }
});

export const { setCurrentUser } = authSlice.actions;

// selectors
export const selectUser = (state) => state.auth.user;
export const authState = (state) => state.auth;

export default authSlice.reducer;
