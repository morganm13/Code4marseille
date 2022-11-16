import Calendar from 'react-calendar'
import React, { useState } from "react";
import '../App'
const Pcalendar =()=>{
    const [date, setDate]= useState(new Date());
    const onChange  = date => {
      setDate(date);
      ask();
    };
    function ask(){
        return(<>OUI</>)
    }
    return(
    <div>
    <Calendar showWeekNumbers onChange={onChange} value={date}/>
    </div>
    )
    }
export default Pcalendar