import React, { createContext } from 'react'

import { useAuth0 } from "@auth0/auth0-react";


export const Login_Signup_Context = createContext();

const Login_Signup_Provider = ({ children }) => {

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return <Login_Signup_Context.Provider value={
        {
            loginWithRedirect, logout, user, isAuthenticated
        }
    } >
        {children}
    </Login_Signup_Context.Provider >

};

export default Login_Signup_Provider