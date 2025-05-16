
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyALd3csQda7XyhWGfMbvonVagi2ZvegrC8",
  authDomain: "wsb-151-153.firebaseapp.com",
  projectId: "wsb-151-153",
  storageBucket: "wsb-151-153.firebasestorage.app",
  messagingSenderId: "662169703848",
  appId: "1:662169703848:web:859973db0dc8e421eb799d",
  measurementId: "G-0N8X5K3YCP"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);