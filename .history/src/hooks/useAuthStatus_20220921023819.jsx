import React, { useEffect } from "react";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthStatus() {
  //login is false by default
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    //checkingStatus if the user is authenticated
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { loggedIn, checkingStatus };
}
