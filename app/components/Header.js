import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img
          src="http://img.photobucket.com/albums/v223/Liz-ONBC/Alice%20in%20Wonderland/Lion%20and%20Unicorn/500px-UK_Royal_Coat_of_Armssvg.png"
          alt=" photo 500px-UK_Royal_Coat_of_Armssvg.png" />
      </div>
      <nav>
        <NavLink to={`/`} className="nav-item"> Home</NavLink>
        <NavLink to={`/campuses`} className="nav-item">Campuses</NavLink>
        <NavLink to={`/students`} className="nav-item">Students</NavLink>
      </nav>
      <div id="app" className="home">
        <div id="title">Margaret Hamilton Interplanetary Academy of JavaScript
      </div>
      </div>
    </header>
  )
}

const mapState = null;
export default withRouter(connect(mapState)(Header))
