import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDjwJRaZR7zN8tkhSfbj583WZEexE6PrxY",
  authDomain: "volley-lock.firebaseapp.com",
  projectId: "volley-lock",
  storageBucket: "volley-lock.appspot.com",
  messagingSenderId: "222174613866",
  appId: "1:222174613866:web:5fa3f46f52e68f1357d513"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);