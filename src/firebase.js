import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB62aK-w4r6U1gC9XxZL-cS6BswsaMJnb0",
  authDomain: "garena-free-fire-85c70.firebaseapp.com",
  projectId: "garena-free-fire-85c70",
  storageBucket: "garena-free-fire-85c70.appspot.com",
  messagingSenderId: "1010216807066",
  appId: "1:1010216807066:web:79fabb20ae668606d94d23",
  measurementId: "G-PM62XX7LBF"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db} 