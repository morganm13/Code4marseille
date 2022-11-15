import { useContext, useState } from "react";
import { JOContext } from '../context/JOContext';
import './style/Search.css';
import JOJson from '../JSON/JO.json';

function Search()
{
    const {JO} = useContext(JOContext);
    const [sizeArray, setSizeArray] = useState([])
    const oneHour = 4.1;

    JO.forEach(item => {

        var timeJO = JOJson[JO[item]].heureDeFin - JOJson[JO[item]].heureDeDebut;
    
        var size = 4.1 * timeJO;

        sizeArray.push(size);
    });

    console.log(sizeArray);

    return (
        <div id="timeline">
                {/* 1h c'est un width de 4.1% */}
                {sizeArray.map((data, key) => (
                    <>
                        {console.log("data :", data)}
                        <div className="activity" style={{width: `${data}%`}}>
                        </div>
                    </>
                ))}
        </div>
    )
}

export default Search;