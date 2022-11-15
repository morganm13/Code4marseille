import Acceuil from "../src/Components/Acceuil"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from '../src/Components/Result';

function App() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
      </Routes>
    </BrowserRouter>
  </>
>>>>>>> 61da38215e8b3a24c310c14ba3f2b0d7a99275ae
  );
}

export default App;
