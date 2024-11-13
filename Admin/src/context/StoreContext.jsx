import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [token, setToken] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <StoreContext.Provider value={{ 
            token, 
            setToken, 
            isAuthenticated, 
            setIsAuthenticated 
        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;