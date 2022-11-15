
import '../App'
import './style/Header.css'
import logo from './JORoute.png'
import React, { useState } from "react";

function Header() {
    const [Modalspe, setModalspe] = useState(false);
    const [Modaldate, setModaldate] = useState(false);
    const [Modalsearch, setModalsearch] = useState(false);

  return (<>
    <div className='container'>
      <div className='force'>
      <div className='padder'>
      <div className='Searcher'>
        <div className={`Evenement ${Modalspe ? 'sizeOn' : 'sizeOff'}`}id='spe' onClick={() => setModalspe(!Modalspe)}><h6>Event</h6></div>
        <div className={`Evenement ${Modaldate ? 'sizeOn' : 'sizeOff'}`} id='Date'onClick={() => setModaldate(!Modaldate)}><h6>Date</h6></div>
        {/* É */}
        <div className={`Evenement ${Modalsearch ? 'sizeOn' : 'sizeOff'}`} id='Search'onClick={() => setModalsearch(!Modalsearch)}><h5>Search</h5></div>
      </div>
      </div>
      </div>
      <div className='Lpadder'>
      <img className='Logo' src={logo}/>
      </div>
    </div>
    {Modalspe ? (
      <div className="eventspe">
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
        spe<br/>
      </div>
    ) : null}
    {Modaldate ? (
      <div className="spe">
        date
      </div>
    ) : null}
    {Modalsearch ? (
       <div className={`wht ${Modalsearch ? 'hasOn' : 'hasOff'}`} id='searcher'>
      <div className='bordure'>
      <input className="search"/>
      </div>
       </div>
    ) : null}
    </>
  )
}
export default Header;