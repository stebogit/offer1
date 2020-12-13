import React, { useContext, createContext, useState } from "react";
import { Redirect, Route } from 'react-router-dom';

const authContext = createContext();

export function ProvideAuth ({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth () {
    return useContext(authContext);
}

export function PrivateRoute ({ children, ...rest }) {
    const auth = useAuth();
    return (
        <Route {...rest} render={({ location }) => auth.user ? (
            children
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }}/>
        )}/>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    signin (cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 1000); // fake async
    },
    signout (cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 1000);
    }
};

export function useProvideAuth () {
    const [user, setUser] = useState(null);

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}
