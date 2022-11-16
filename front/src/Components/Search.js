import { useContext, useState } from "react";
import { JOContext } from '../context/JOContext';
import './style/Search.css';
import JOJson from '../JSON/JO.json';

function Search()
{
    const {JO} = useContext(JOContext);
    const [sizeArray, setSizeArray] = useState([])

    JO.forEach((item) => {

        let timeJO = parseInt(JOJson[item].heureDeFin) - parseInt(JOJson[item].heureDeDebut);
        let timeAfter8Hour = parseInt(JOJson[item].heureDeDebut) - 8;

        let positionLeft = 6.25 * timeAfter8Hour;
        let size = 6.2 * timeJO;

        sizeArray.push([size, positionLeft]);
    }); 


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