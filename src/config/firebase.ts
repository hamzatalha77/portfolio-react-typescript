// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrr86OuE6dPID1YZS1klQCLQ8bWtaON_I',
  authDomain: 'something-5e33c.firebaseapp.com',
  projectId: 'something-5e33c',
  databaseURL: 'https://something-5e33c-default-rtdb.firebaseio.com/',
  storageBucket: 'something-5e33c.appspot.com',
  messagingSenderId: '886615306959',
  appId: '1:886615306959:web:716429962ce8af37f6fdba',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
