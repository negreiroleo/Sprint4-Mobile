import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD4cTQ1Y4CPfQwg33omTQiZo1niCt5emxA",
  authDomain: "challenge-a8da4.firebaseapp.com",
  projectId: "challenge-a8da4",
  storageBucket: "challenge-a8da4.appspot.com",
  messagingSenderId: "575209597318",
  appId: "1:575209597318:web:0d4d02a57e4e46ee8d6407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore and Storage references
const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };
