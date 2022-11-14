import { useState } from "react";
import { JOContext } from '../context/JOContext';

function Search()
{
    const {JO} = useContext(JOContext);

    return (
        console.log("oui")
    )
}

export default Search;