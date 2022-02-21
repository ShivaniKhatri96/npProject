import React, {useState} from "react";
const AuthKey = React.createContext({
    token: "",
    userId:"",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthKeyProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const initialUserId = localStorage.getItem('userId');
    const [userId, setUserId] = useState(initialUserId);
    // const userIsLoggedIn = (token !== null) ? true: false;
    const userIsLoggedIn = !!token;
    //!!: this converts to boolean 
    const loggedHandler = (token, userId) => {
        localStorage.setItem('token',token);
        setToken(token);
        localStorage.setItem('userId',userId);
        setUserId(userId);
    };
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        setUserId(null);
        localStorage.removeItem('userId');
    };
    const contextValue = {
        token: token,
        userId: userId,
        isLoggedIn: userIsLoggedIn,
        login: loggedHandler,
        logout: logoutHandler
    }
    return <AuthKey.Provider value={contextValue}>{props.children}</AuthKey.Provider>
}
export default AuthKey;