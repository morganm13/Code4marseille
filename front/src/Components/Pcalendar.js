import Calendar from 'react-calendar'
import React, { useState } from "react";
import '../App'
const Pcalendar =()=>{
    const [date, setDate]= useState(new Date());
    const [state, setState] = useState(true);
    var result;
    const locale = 'fr-CA';
    const onChange  = date => {
      setDate(date.toLocaleDateString());
      console.log(date);
      ask();
      setState(false);
    };
    function ask(){
        result = <p>OUI</p>;
    }
    return(
    <div>
      {state ?
        <Calendar showWeekNumbers onChange={onChange} value={date} />
      : 
        <div><p>oui</p></div>
      }
    </div>
    )
    }
export default Pcalendar