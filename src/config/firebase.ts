import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Remove the following line
// import dotenv from 'dotenv';

// dotenv.config(); // Remove this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrr86OuE6dPID1YZS1klQCLQ8bWtaON_I',
  authDomain: 'something-5e33c.firebaseapp.com',
  projectId: 'something-5e33c',
  storageBucket: 'something-5e33c.appspot.com',
  messagingSenderId: '886615306959',
  appId: '1:886615306959:web:716429962ce8af37f6fdba',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
