import React, { useState } from 'react';
import './Navbar.css';
import nav from '../../assets/df.png'
import close from '../../assets/close.png'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <nav>
        {/* Sidebar */}
        <ul className="side_bar" style={{ display: showSidebar ? 'flex' : 'none' }}>
          <li onClick={() => setShowSidebar(false)}><a href="#"><img src={close} alt="close" /></a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/skill">Skill</a></li>
          
        </ul>

        {/* Main nav */}
        <ul>
          <li><a href="/home">Home</a></li>

          <li className="OnMobile"><a href="/about">About</a></li>
          <li className="OnMobile"><a href="/project">Project</a></li>
          <li className="OnMobile"><a href="/contact">Contact</a></li>
          <li className="OnMobile"><a href="/skill">Skill</a></li>
          
          <li onClick={() => setShowSidebar(true)}><a href='#'>
            <img src={nav} alt="another" /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
