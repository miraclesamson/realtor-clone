import React from 'react'
import { Outlet } from 'react-router';
import{ Outlet, Navigate} from 'react-router-dom';

export default function PrivateRoute() {
    const loggedIn = false;
  return loggedIn ? <Outlet/>
}
