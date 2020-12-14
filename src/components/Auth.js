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
    signin (data, cb, error) {
        const exists = localStorage.getItem(data.email);
        if (!exists) {
            localStorage.setItem(data.email, JSON.stringify(data));
            fakeAuth.isAuthenticated = true;
            setTimeout(() => cb(data), 500);
        } else {
            setTimeout(() => error('User already exists, please chose a different email.'), 500); // fake async
        }
    },
    login (credentials, cb, error) {
        const user = JSON.parse(localStorage.getItem(credentials.email));
        if (user) {
            fakeAuth.isAuthenticated = true;
            setTimeout(() => cb(user), 500);
        } else {
            setTimeout(() => error('User not found, please sign in.'), 500);
        }
    },
    logout (user, cb) {
        fakeAuth.isAuthenticated = false;
        localStorage.removeItem(user.email);
        setTimeout(cb, 500);
    }
};

export function useProvideAuth () {
    const [user, setUser] = useState(null);

    const signin = (data, cb, error) => {
        return fakeAuth.signin(
            data,
            (user) => {
                setUser(user);
                cb();
            },
            error
        );
    };

    const login = (credentials, cb, error) => {
        return fakeAuth.login(
            credentials,
            (user) => {
                setUser(user);
                cb();
            },
            error
        );
    };

    const logout = cb => {
        return fakeAuth.logout(user, () => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        login,
        logout
    };
}
