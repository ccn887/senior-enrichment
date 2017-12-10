import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../../reducers/students';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {students, campuses} = this.props;
    const studentId = Number(this.props.match.params.studentId)
    const currentStudent = students.filter(student => student.id === studentId);
    const campus = (student) => this.props.campuses.filter(campus => campus.id === student.campusId)
    const deleteStudent = this.props.deleteStudent
    const currentKid = currentStudent[0]
console.log('students', this.props)
    return (

      <div id=
      "students" className="student-profile">
      <div className="student-wrapper">
        <h3 className="student-name">{currentKid.firstName + ' ' + currentKid.lastName}</h3>
        <h4 className="student-info"> Email Address: {currentKid.email}</h4>
        <h4 className="student-info"> Current GPA: {currentKid.gpa}</h4>
        <NavLink to={`/campuses/${campus(currentKid)[0].id}`}>
        <h4 className="student-info"> Attending: {campus(currentKid)[0].name}</h4>
        </NavLink>
        </div>
        <NavLink to={`/students/update/${currentKid.id}`}>Update Student Information</NavLink>
      <button
      onClick={() => deleteStudent(currentStudent.id) }
      >Delete Student Record</button>
      </div>

    )}
    }



/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
};

const mapDispatch = {deleteStudent}

export default withRouter(connect(mapState, mapDispatch)(StudentDetail));
