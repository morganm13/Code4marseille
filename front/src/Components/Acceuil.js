import '../App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../Components/Header"
import Search from "../Components/Search"
import Map from "../Components/Map"
import Result from "../Components/Result"

function Acceuil() {


    return (
    <>
    <Header/>
    <Search/>
    <Map/>
    <Result/>
    </>)


}
export default Acceuil; 
