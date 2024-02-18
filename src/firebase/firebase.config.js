// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyD90gYOi1eG0LibvROcLBN7d2mKI1cpEjs",
//   authDomain: "camera-sell-f0967.firebaseapp.com",
//   projectId: "camera-sell-f0967",
//   storageBucket: "camera-sell-f0967.appspot.com",
//   messagingSenderId: "363167512126",
//   appId: "1:363167512126:web:406141d5a1559952c2436f"

  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;