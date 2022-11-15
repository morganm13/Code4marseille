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
        <>
            <div id="timeline">
                {/* 1h c'est un width de 4.1% */}
                {sizeArray.map((data, key) => ( 
                    <>
                        <div className="activity" style={{width:`${data[0]}%`, marginLeft:`${data[1]}%`}}></div>
                    </>
                ))}
            </div>
            <div id="hour">
                <p>|8h</p>
                <p className="hour">|12h</p>
                <p className="hour">|16h</p>
                <p className="hour">|20h</p>
                <p className="hour">00h|</p>
            </div>
        </>
    )
}

export default Search;