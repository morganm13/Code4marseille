import '../App';
import Header from "../Components/Header"
import Search from "../Components/Search"
import Map from "../Components/Map"
import Result from "../Components/Result"
import './style/Acceuil.css'

function Acceuil() {
    return (
        <>
            <Header />
            <Map />
            <Result/>
        </>
    )
}
export default Acceuil; 
