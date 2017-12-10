import React from 'react';
import { connect } from 'react-redux';
import { updateCampus, deleteCampus } from '../../reducers/campuses';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class UpdateStudent extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  render() {

    const { students, campuses } = this.props;
    const studentId = +this.props.match.params.studentId
    const currentStudent = students.filter(student => student.id === studentId);
    const currentKid = currentStudent[0]
    console.log('studentId:', studentId)
    return (
      <div id="student">
      <div className="student-profile">
        <div className="student-wrapper">
          <form onSubmit={this.submit}>
            <input
              name="firstname"
              type="text"
              className="student-name"
              placeholder="new first name"
            />
            <input
            name="lastname"
            type="text"
            className="student-name"
            placeholder="new last name"
          />
            <input
              name="email"
              type="text"
              className="form-like"
              placeholder="new email"
            />
            <input
            name="GPA"
            type="text"
            className="form-like"
            placeholder="Updated GPA"
          />
          <input
          name="campusId"
          type="text"
          className="form-like"
          placeholder="New Campus I.D."
        />
            <button type="submit" className="btn btn-warning btn-xs">
              <span className="glyphicon glyphicon-plus" />
            </button>
          </form>
        </div>
      </div>
      </div>
    )
  }
  submit(event) {
    const { students, campuses } = this.props;
    const studentId = +this.props.match.params.studentId
    const currentStudent = students.filter(student => student.id === studentId);
    const currentKid = currentStudent[0]

    event.preventDefault();
   const firstnameUp = (event.target.name.value ? event.target.firstname.value : currentKid.firstname);
   const lastnameUp = (event.target.name.value ? event.target.lastname.value : currentKid.firstname);
   const emailUp = (event.target.email.value ? event.target.email.value : currentKid.email);
   const GPAUp = (event.target.GPA.value ? +event.target.GPA.value : currentKid.gpa);
   const campusUp = (event.target.campus.value ?event.target.campusId.value : currentKid.campusId);
    const updatedstudent = {
      firstName: firstnameUp,
      lastName: lastnameUp,
      email: emailUp,
      gpa: GPAUp,
      campusId: campusUp
    }
    console.log('updated:', updatedstudent)
    this.props.updateStudent(studentId, updatedstudent)
  }

}





/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
};

const mapDispatch = { updateCampus }

export default withRouter(connect(mapState, mapDispatch)(UpdateStudent));
