
import '../App'
import './style/Header.css'
import logo from '../logo.svg'
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
        <div className='Evenement'id='spe' onClick={() => setModalspe(!Modalspe)}><h6>Event</h6></div>
        <div className='Evenement' id='Date'onClick={() => setModaldate(!Modaldate)}><h6>Date</h6></div>
        {/* É */}
        <div className='Evenement' id='Search'onClick={() => setModalsearch(!Modalsearch)}><h5>Search</h5></div>
      </div>
      </div>
      </div>
      <div className='Lpadder'>
      <img className='Logo' src={logo}/>
      </div>
    </div>
    {Modalspe ? (
      <div className="spe">
        spe
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