import { useContext, useState } from "react";
import { JOContext } from '../context/JOContext';
import './style/Search.css';

function Search()
{
    const {JO} = useContext(JOContext);
    const [sizeArray, setSizeArray] = useState([])
    const oneHour = 4.1;

    JO[0].forEach((item) => {

        let timeJO = parseInt(item.heureDeFin) - parseInt(item.heureDeDebut);
        let size = 4.1 * timeJO;

        sizeArray.push(size);
    });


    return (
        <div id="timeline">
                {/* 1h c'est un width de 4.1% */}
                {sizeArray.map((data, key) => (
                    <>
                        {console.log("data :", data)}

                        <meter min="0" max="100" value={`${data}`}></meter>
                    </>
                ))}
        </div>
    )
}

export default Search;