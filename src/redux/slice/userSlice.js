import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByIdInteraction } from '../interactions/auth';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';

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

const userSlice = createSlice({
  name: 'user',
  initialState: { userData: null },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: {
    [getUserById.pending]: (state) => {
      state.userData = null;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.userData = null;
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUserData = (state) => state.user.userData;
