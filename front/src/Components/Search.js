import { useContext } from "react";
import { JOContext } from '../context/JOContext';
import './style/Search.css';
import JOJson from '../JSON/JO.json';

function Search()
{
    const {JO} = useContext(JOContext);

    var OneHour = 4.1;

    var timeJO1 = JOJson[JO[0]].heureDeFin - JOJson[JO[0]].heureDeDebut;

    var size = 4.1 * timeJO1;

    return (
        <div id="timeline">
            {/* 1h c'est un width de 4.1% */}
            <div className="activity" style={{width: `${size}%`}}>

            </div>
        </div>
    )
}

export default Search;