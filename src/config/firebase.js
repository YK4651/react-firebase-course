import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR4wDJUuphQRQX08mS4AaDAysrPngl0D0",
  authDomain: "fir-cours-cd50b.firebaseapp.com",
  projectId: "fir-cours-cd50b",
  storageBucket: "fir-cours-cd50b.appspot.com",
  messagingSenderId: "544152594112",
  appId: "1:544152594112:web:07e4a77ba9db1010032f25",
  measurementId: "G-WWHJYJ67LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);