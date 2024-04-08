
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

  apiKey: "AIzaSyA-ELIQNebnpZTApcYE4vgu6h_dQen0eMU",
  authDomain: "spotta-ng-e1da9.firebaseapp.com",
  projectId: "spotta-ng-e1da9",
  storageBucket: "spotta-ng-e1da9.appspot.com",
  messagingSenderId: "415988337252",
  appId: "1:415988337252:web:4fbf36b7101c3877346d71",

  // apiKey: "AIzaSyBUIMvZib3GgOW541XbGgj5OWWzh8h9SCc",
  // authDomain: "spotta-8025d.firebaseapp.com",
  // projectId: "spotta-8025d",
  // storageBucket: "spotta-8025d.appspot.com",
  // messagingSenderId: "274835403646",
  // appId: "1:274835403646:web:86e327001a7dc2abdbb92f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };