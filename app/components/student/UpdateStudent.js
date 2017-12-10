import React from 'react';
import { connect } from 'react-redux';
import { updateStudent, deleteStudent } from '../../reducers/students';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class UpdateStudent extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  render() {
    const studentId = +this.props.match.params.studentId
    const currentStudent = this.props.students.filter(student => student.id === studentId);
    const currentKid = currentStudent[0]

    return (
      <section id="students">
      <div className="student-profile">
        <div className="student-wrapper">
          <form onSubmit={this.submit}>
            <input
              name="firstname"
              type="text"
              className="student-name"
              placeholder={currentKid.firstName}
            />
            <input
            name="lastname"
            type="text"
            className="student-name"
            placeholder={currentKid.lastName}
          />
            <input
              name="email"
              type="text"
              className="form-like"
              placeholder={currentKid.email}
            />
            <input
            name="GPA"
            type="text"
            className="form-like"
            placeholder={currentKid.gpa}
          />
          <input
          name="campusId"
          type="text"
          className="form-like"
          placeholder={currentKid.campusId}
        />
            <button type="submit" className="btn btn-warning btn-xs">Submit Changes
              <span className="glyphicon glyphicon-plus" />
            </button>
          </form>
        </div>
      </div>
      </section>
    );
  }
  submit(event) {
    const { students } = this.props;
    const studentId = +this.props.match.params.studentId
    const currentStudent = students.filter(student => student.id === studentId);
    const currentKid = currentStudent[0]

    event.preventDefault();
   const firstnameUp = (event.target.firstname.value ? event.target.firstname.value : currentKid.firstName);
   const lastnameUp = (event.target.lastname.value ? event.target.lastname.value : currentKid.lastName);
   const emailUp = (event.target.email.value ? event.target.email.value : currentKid.email);
   const GPAUp = (event.target.GPA.value ? event.target.GPA.value : currentKid.gpa);
   const campusUp = (event.target.campusId.value ? event.target.campusId.value : currentKid.campusId);
    const updatedstudent = {
      firstName: firstnameUp,
      lastName: lastnameUp,
      email: emailUp,
      gpa: GPAUp,
      campusId: null
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

const mapDispatch = { updateStudent }

export default withRouter(connect(mapState, mapDispatch)(UpdateStudent));
