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
      campusId: null,
      showForm: false
    };
    this.submit = this.submit.bind(this);
    this.hideFunction = this.hideFunction.bind(this)
  }

  render() {
    const newStudent = this.state
    const students = this.props.students
    const campuses = (student) => this.props.campuses.filter(campus => campus.id === student.campusId)
    const deleteStudent = this.props.deleteStudent


    return (
      <div>
      <table className="table">
      <thead>
      <tr>
      <th>Student I.D.</th>
      <th>Name</th>
      <th>{'Email Address  '}</th>
      <th>{'  Current GPA  '}</th>
      <th>{'  Campus  '}</th>
      <th>{'  Update Student Record  '}</th>
      <th>{'  Delete Student Record  '}</th>
    </tr>
    </thead>
    <tbody>
      {students.map(student => {
        return (
          <tr key={student.id}>
          <td> {student.id} </td>
                <td className="student-name">{student.firstName + ' ' + student.lastName}</td>
                <td className="student-info">{student.email} </td>
                <td className="student-info">{'       ' + student.gpa + '       '}</td>
                <td className="student-info"> {campuses(student)[0].name}  </td>
                <td><NavLink to={`/students/${student.id}`} style={{ textDecoration: 'none' }}>Update Record</NavLink></td>
                <td>
                <button
                id="delete" type="delete" onClick={() => deleteStudent(student.id) }>{'     Delete Student     '}</button>
                </td>
          </tr>
        )
      })}
      </tbody>
      </table>
      <button id="submit" onClick={() => this.hideFunction()}>Add New Student</button>
      {this.state.showForm ? this.renderNewStudent() : null}
      </div>
    )}
    hideFunction() {
      this.state.showForm ?
      this.setState({ showForm: false }) : this.setState({ showForm: true })
      console.log(this.state.showForm)
  }
      renderNewStudent() {
        console.log('invoked')
        return (
          <div id="hidden-form">
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
                type="submit" id="submit" >Submit</button>
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
