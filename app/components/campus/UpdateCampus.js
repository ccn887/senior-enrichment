import React from 'react';
import { connect } from 'react-redux';
import { updateCampus, deleteCampus } from '../../reducers/campuses';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class UpdateCampus extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  render() {

    const { students, campuses } = this.props;
    const campusId = +this.props.match.params.campusId;
    const studentsForCampus = students.filter(student => student.campusId === campusId);
    const currentCampus = campuses.filter(campus => campus.id === campusId);
    const currentCamp = currentCampus[0]
    return (
      <section id="campus">
        <div className="campus-profile">
            <form onSubmit={this.submit}>
              <input
                name="name"
                type="text"
                className="form-like"
                placeholder={currentCamp.name}
              />
              <input
                name="image"
                type="text"
                className="form-like"
                placeholder="new image URL"
              />
              <input
                name="description"
                type="text"
                className="form-like"
                placeholder="new description"
              />
              <button type="submit" id="submit" >Submit Changes</button>
            </form>
          </div>

          <ul>{
            studentsForCampus.map(student => {
              return (
                <div key={student.id}>
                  <NavLink className="nav-style" to={`/students/${student.id}`}>
                    <li> {student.id + '. ' + student.firstName + ' ' + student.lastName}
                    </li>
                  </NavLink>
                </div>
              )
            }
            )}
          </ul>
          <NavLink className="nav-style" to={`/students`}>Add Student to Campus
          </NavLink>
      </section>
    )
  }
  submit(event) {
    const { campuses } = this.props;
    const campusId = +this.props.match.params.campusId
    const currentCampus = campuses.filter(campus => campus.id === campusId);
    const currentCamp = currentCampus[0]
    event.preventDefault();
    const nameUp = (event.target.name.value ? event.target.name.value : currentCamp.name);
    const descriptUp = (event.target.description.value ? event.target.description.value : currentCamp.description);
    const imageUp = (event.target.image.value ? event.target.image.value : currentCamp.imageUrl);
    const updatedcampus = {
      name: nameUp,
      imageUrl: imageUp,
      description: descriptUp
    }
    this.props.updateCampus(campusId, updatedcampus)
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

export default withRouter(connect(mapState, mapDispatch)(UpdateCampus));
