import React, { useEffect } from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";

export default function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
  });
  return <div>useAuthStatus</div>;
}
