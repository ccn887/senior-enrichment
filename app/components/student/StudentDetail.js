import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../../reducers/students';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

const StudentDetail = (props) => {
  const { students, campuses } = props;
  const studentId = Number(props.match.params.studentId)
  const currentStudent = students.filter(student => student.id === studentId);
  const campus = (student) => props.campuses.filter(campus => campus.id === student.campusId)
  const deleteStudent = props.deleteStudent;
  const currentKid = currentStudent[0]

  return (
    <div id="singlestudent" className="student-profile">
      <div className="student-wrapper">
        <h4 className="student-name">{currentKid.firstName + ' ' + currentKid.lastName}</h4>
        <h4 className="student-info"> Email Address: {currentKid.email}</h4>
        <h4 className="student-info"> Current GPA: {currentKid.gpa}</h4>
        <NavLink className="nav-style" to={`/campuses/${campus(currentKid)[0].id}`}>
          <h4 className="student-info"> Attending: {campus(currentKid)[0].name}</h4>
        </NavLink>
      </div>
      <NavLink className="nav-style" to={`/students/update/${currentKid.id}`}>Update Student Information</NavLink>
      <button
      type="delete" id="delete" onClick={() => deleteStudent(currentStudent.id)}
      >Delete Student Record</button>
    </div>

  );
};




/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
};

const mapDispatch = { deleteStudent }

export default withRouter(connect(mapState, mapDispatch)(StudentDetail));
