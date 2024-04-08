'use client'
// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

   const googleSignIn = () => {
     const provider = new GoogleAuthProvider();
     signInWithPopup(auth, provider);
   };

  //  const googleSignIn = async () => {
  //   const provider = new GoogleAuthProvider();
  //    try {
  //      await signInWithPopup(auth, provider).then((result) =>
  //        console.log(result)
  //      );
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  const signUp =
  (email, password, username) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        const user = credential.user;
        // Create a user in your own database
        return updateDoc(doc(firestore, 'users', user.uid),{name: username});
      });

  const logout = () => {
    return auth.signOut().then(() => setUser(null));
  };

  // const signUp = (email, password) => {
  //   return createUserWithEmailAndPassword(email, password);
  // };

  const logOut = () => {
    signOut(auth);
  };


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, [user]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
      
  //   });

  //   return unsubscribe;
  // }, []);


  return (
    <AuthContext.Provider value={{user, signUp, googleSignIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
