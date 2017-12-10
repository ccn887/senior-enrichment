import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';


export const HomeCampuses = (props) => {

  return (
    <section id="campus">
      {props.campuses.map(campus => {
        return (
          <div key={campus.id} className="campus-profile">
            <NavLink to={`/campuses/${campus.id}`} style={{ textDecoration: 'none' }}>
              <div >
                <div className="campus-wrapper">
                  <img id="campus-pic" src={campus.imageUrl} />
                  <h3 className="campus-name">{campus.name}</h3>
                  <p className="campus-info">{campus.description}</p>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </section>
  );
};


const mapState = (state) => {
  return {
    campuses: state.campuses
  }
};


export default withRouter(connect(mapState)(HomeCampuses))
