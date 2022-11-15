
import '../App'
import './style/Header.css'
import logo from '../logo.svg'
function header() {
  return (
    <div className='container'>
      <div className='force'>
      <div className='padder'>
      <div className='Searcher'></div>
      </div>
      </div>
      <div className='Lpadder'>
      <img className='Logo' src={logo}/>
      </div>
    </div>
  )
}
export default header;