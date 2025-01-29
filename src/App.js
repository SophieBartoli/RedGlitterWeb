import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Accueil from './Pages/Accueil';
import APropos from './Pages/APropos';
import Projets from './Pages/Projets';
import Ateliers from './Pages/Ateliers';
import Contact from './Pages/Contact';
import Mentions from './Pages/Mentions';
import Error from './Pages/Error';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Accueil />} />
          <Route path='/accueil' element={<Accueil />} />
          <Route path='/apropos' element={<APropos />} />
          <Route path='/projets' element={<Projets />} />
          <Route path='/ateliers' element={<Ateliers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mentions' element={<Mentions />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
