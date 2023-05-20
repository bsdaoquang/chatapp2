// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXTI4gzCTHH0zTNF3HB9ABlu5HFe_KAM8',
  authDomain: 'demochatapp-22e97.firebaseapp.com',
  projectId: 'demochatapp-22e97',
  storageBucket: 'demochatapp-22e97.appspot.com',
  messagingSenderId: '747229140328',
  appId: '1:747229140328:web:442bc911b3bb84ef11b2dd',
  databaseURL:
    'https://demochatapp-22e97-default-rtdb.asia-southeast1.firebasedatabase.app',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
