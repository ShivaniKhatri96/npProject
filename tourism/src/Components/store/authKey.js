import React, {useState} from "react";
const AuthKey = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthKeyProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    // const userIsLoggedIn = (token !== null) ? true: false;
    const userIsLoggedIn = !!token;
    //!!: this converts to boolean 
    const loggedHandler = (token) => {
        localStorage.setItem('token',token);
        setToken(token);
    };
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loggedHandler,
        logout: logoutHandler
    }
    return <AuthKey.Provider value={contextValue}>{props.children}</AuthKey.Provider>
}
export default AuthKey;