// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCSM1JB_jxYT4yjFrBHQXJuvh6n70NU1o4',
  authDomain: 'jp-webapp-9527d.firebaseapp.com',
  projectId: 'jp-webapp-9527d',
  storageBucket: 'jp-webapp-9527d.appspot.com',
  messagingSenderId: '764115940301',
  appId: '1:764115940301:web:e4d68f3ea7242e180cca84',
  measurementId: 'G-3VHRE7BJ4S'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
