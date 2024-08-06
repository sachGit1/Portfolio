import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/navbar';
import Home from './Pages/Home';
import ContactMe from './Pages/ContactMe';
import Academic from './Pages/Academic';
import ExtraMe from './Pages/ExtraMe';
import Articles from './Pages/Articles';
import Footer from './Components/Footer/footer';
import ReactDom from 'react-dom/client';

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

function App() {
  
  return (
    
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/extra" element={<ExtraMe />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
