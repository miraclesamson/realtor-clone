import React from "react";
import { useState } from "react";

export default function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  return <div>useAuthStatus</div>;
}
