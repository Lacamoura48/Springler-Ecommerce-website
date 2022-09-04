import { Auth, getAuth } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import "firebase/auth"


const firebaseConfig= {
    apiKey:'AIzaSyAwvYXaQoqoz5lnBoYQQ0Yb_zTzjiFNLyI',
    authDomain:'springle-3da11.firebaseapp.com',
    projectId:'springle-3da11',
    storageBucket:'springle-3da11.appspot.com',
    messagingSenderId:'213414633287',
    appId:'1:213414633287:web:4d8df9e4ea567995e63662',
    measurementId:'G-3FPTM5N2PN'
 }

 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
 export const auth = getAuth(app)