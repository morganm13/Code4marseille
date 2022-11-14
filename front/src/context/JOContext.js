import React, {useState, createContext} from "react";

export const JOContext = createContext();

export const JOConsumer = ({ children }) => 
{
    const [JO, setJO] = useState([1, 2]);

    return (
        <UserContext.Provider value={{JO, setJO}}>
            {children}
        </UserContext.Provider>
    )
}