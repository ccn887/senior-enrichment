import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { addStudent, deleteStudent } from '../../reducers/students';
import { NavLink } from 'react-router-dom';
/* -----------------    COMPONENT     ------------------ */

class AllStudents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: null,
      campusId: null
    }
    this.submit = this.submit.bind(this);
  }

  render() {
    const newStudent = this.state
    const students = this.props.students
    const campuses = (student) => this.props.campuses.filter(campus => campus.id === student.campusId)
    const deleteStudent = this.props.deleteStudent


    return (
      <section id="students">
      {students.map(student => {
        return (
          <div key={student.id}>
          <NavLink to={`/students/${student.id}`}>
            <div className="student-profile">
              <div className="student-wrapper">
                <img id="student-pic" src={student.imageUrl} />
                <h3 className="student-name">{student.firstName + ' ' + student.lastName}</h3>
                <h4 className="student-info"> Email Address: {student.email}</h4>
                <h4 className="student-info"> Current GPA: {student.gpa}</h4>
                <h4 className="student-info"> Attending: {campuses(student)[0].name}</h4>
                </div>
                </div>
                </NavLink>
                <button
                onClick={() => deleteStudent(student.id) }
                >Delete Student</button>
          </div>
        )
      })}
      {this.renderNewStudent()}
      </section>
    )}

      renderNewStudent() {
        return (
          <div >
        <form onSubmit={this.submit}>
          <div >
            <h4 >
              <input
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                className="form-like"
              />
            </h4>
            <h4 >
              <input
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
              <input
                name="GPA"
                type="GPA"
                placeholder="Current GPA"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
            <input
              name="campusId"
              type="campudId"
              placeholder="Campus ID"
              className="form-like"
            />
          </h5>
            <div >
              <button
                type="submit">Add New Student</button>
            </div>
          </div>
        </form>
      </div>
      )}



  submit(event) {
    event.preventDefault();
    const student = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      gpa: +event.target.GPA.value,
      campusId: +event.target.campusId.value,
    };
    this.props.addStudent(student);

    event.target.firstName.value = '';
    event.target.lastName.value = '';
    event.target.email.value = '';
    event.target.GPA.value = null;
    event.target.campusId.value = null;
  }
}



/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
};

const mapDispatch = {addStudent, deleteStudent }

export default withRouter(connect(mapState, mapDispatch)(AllStudents))
