import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
// import { updateCampus, fetchCampus } from '../../reducers/campuses';
// import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class AllStudents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: null
    }
  }

  render() {
    const newStudent = this.state
    const students = this.props.students
    console.log('props students:', students)
    return (<section id="students">
      {students.map(student => {
        console.log("kids:", student)
        return (
          <div key={student.id}>>
         <div className="student-profile">
              <div className="student-wrapper">
              <img id="student-pic" src={student.imageUrl}/>
                <h3 className="student-name">{student.firstName + ' ' + student.lastName}</h3>
                <h4 className="student-info"> Email Address: {student.email}</h4>
                <h4 className="student-info"> Current GPA: {student.gpa}</h4>
                <h4 className="student-info"> Attending: {/*campuses.filter(campus => campus.id === student.campusId)*/}</h4>
              </div>
            </div>
          </div>
        )
      })}
    </section>
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

const mapDispatch = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(AllStudents);
