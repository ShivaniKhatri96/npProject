import React, {useState} from "react";
const AuthKey = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthKeyProvider = (props) => {
    const [token, setToken] = useState(null);
    // const userIsLoggedIn = !!token;
    const userIsLoggedIn = (token !== null) ? true: false;
    //!!: this converts to boolean 
    const loggedHandler = (token) => {
        setToken(token);
    };
    const logoutHandler = () => {
        setToken(null);
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