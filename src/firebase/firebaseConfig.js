import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCStBQbLNpG9zf2WLLLgjOEmtaPwDC_t18',
  authDomain: 'chatappdemo-c2111.firebaseapp.com',
  databaseURL:
    'https://chatappdemo-c2111-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chatappdemo-c2111',
  storageBucket: 'chatappdemo-c2111.appspot.com',
  messagingSenderId: '46798470918',
  appId: '1:46798470918:web:169b13891cce4a72202887',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
