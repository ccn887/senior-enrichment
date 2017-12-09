import React from 'react';

const Header = (props) => {
return (
    <header>
      <div className="logo">
        <img src="http://img.photobucket.com/albums/v223/Liz-ONBC/Alice%20in%20Wonderland/Lion%20and%20Unicorn/500px-UK_Royal_Coat_of_Armssvg.png"
          alt=" photo 500px-UK_Royal_Coat_of_Armssvg.png"></img>
      </div>
      <nav>

        <div className="nav-item">
          <a href="#">Home</a>
        </div>
        <div className="nav-item">
          <a href="#">Students</a>
        </div>
      </nav>
      <div id="app" className="home">
      <div id="title">Margaret Hamilton Interplanetary Academy of JavaScript
      </div>
      </div>
    </header>
)}

export default Header
