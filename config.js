import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const firebaseConfig = {
  apiKey: 'AIzaSyCpe5zjQd2vFZfK8PFcZpyyZmuUZqcqFHQ',
  authDomain: 'savvy-concord-399617.firebaseapp.com',
  databaseURL: 'https://savvy-concord-399617-default-rtdb.firebaseio.com/',
  projectId: 'savvy-concord-399617',
  storageBucket: 'savvy-concord-399617.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:883282856626:web:87df85216858e7e1e0d7ab',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);