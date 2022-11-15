import React, {useState, createContext} from "react";
import JOJson from '../JSON/JO.json';


export const JOContext = createContext();

export const JOConsumer = ({ children }) => 
{
    // console.log(`logging JOJson from context : ${JSON.parse(JOJson)}`)
    const [JO, setJO] = useState([JOJson]);

    return (
        <JOContext.Provider value={{JO, setJO}}>
            {children}
        </JOContext.Provider>
    )
}