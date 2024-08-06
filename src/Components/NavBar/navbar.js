import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav>
     <div className="nav-brand">SACHINI NAWODYA</div>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">ABOUT <br/>ME</NavLink></li>
        <li><NavLink to="/academic">ACADEMIC  <br/>FOCUS</NavLink></li>
        <li><NavLink to="/extra" >JOURNIES  <br/> UNVEILED</NavLink></li>
        <li><NavLink to="/articles" >ARTICLE<br/>COLLECTION</NavLink></li>
        <li><NavLink to="/contact" >CONTACT <br/> ME</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

