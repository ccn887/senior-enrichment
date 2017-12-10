import React from 'react';
import { connect } from 'react-redux';
import { deleteCampus } from '../../reducers/campuses';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {students, campuses} = this.props;
    const campusId = Number(this.props.match.params.campusId)
    const studentsForCampus = students.filter(student => student.campusId === campusId);
    const currentCampus = campuses.filter(campus => campus.id === campusId);
    console.log('studentsForCampus', studentsForCampus)
    const deleteCampus = this.props.deleteCampus
    const currentCamp = currentCampus[0]

    return (
      <div className="campus-profile">
        <div className="campus-wrapper">
          <img id="campus-pic" src={currentCamp.imageUrl} />
          <h3 className="campus-name">{currentCamp.name}</h3>
          <p className="campus-info">{currentCamp.description}</p>
        </div>
        <NavLink to={`/campuses/update/${currentCamp.id}`}>Update Campus Information</NavLink>
      <button
      onClick={() => deleteCampus(currentCampus.id) }
      >Delete Campus</button>
      <ul>{
        studentsForCampus.map(student =>{
        return(
          <div key={student.id}>
          <NavLink to={`/students/${student.id}`}>
      <li> {student.id + '. ' +student.firstName + ' ' + student.lastName}
      </li>
      </NavLink>
      </div>
    )}
    )}
      </ul>
    </div>
    )
  }
}



/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
};

const mapDispatch = {deleteCampus}

export default withRouter(connect(mapState, mapDispatch)(CampusDetail));
