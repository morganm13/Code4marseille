import Acceuil from "../src/Components/Acceuil"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Result from '../src/Components/Result';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          {/* <Route path='/result' element={<Result />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
