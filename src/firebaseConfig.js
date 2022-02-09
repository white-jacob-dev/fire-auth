import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAs_l0AS2tw4I_e9hFZ0xqoqexcKkzkY88',
  authDomain: 'money-db435.firebaseapp.com',
  projectId: 'money-db435',
  storageBucket: 'money-db435.appspot.com',
  messagingSenderId: '340811528346',
  appId: '1:340811528346:web:4fa78fe3443d853e0ec723',
  measurementId: 'G-JDH28WXCGZ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
