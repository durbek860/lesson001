import React from "react";
import { useLocation, Outlet, Navigate } from 'react-router-dom'

export const Auth = () => {
    let location = useLocation()

    let token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return <Outlet/>
}