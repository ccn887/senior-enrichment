import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addCampus, deleteCampus } from '../../reducers/campuses';
import { NavLink, withRouter } from 'react-router-dom';


class AllCampuses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      imgUrl: '',
      description: ''
    }
    this.submit = this.submit.bind(this)
  }
  render() {
    const newCampus = this.state
    const campuses = this.props.campuses
    const deleteCampus = this.props.deleteCampus

    return (
      <section id="campus">
        {campuses.map(campus => {
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
              <button
                onClick={() => deleteCampus(campus.id)}
              >Delete Campus</button>
            </div>
          );
        })}
        {this.renderNewCampus()}
      </section>
    )
  }
  renderNewCampus() {
    return (
      <div >
        <form onSubmit={this.submit}>
          <div >
            <h4 >
              <input
                name="name"
                type="text"
                required
                placeholder="Campus Name"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="description"
                type="description"
                placeholder="Campus Description"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
              <input
                name="imgUrl"
                type="imgUrl"
                placeholder="Image URL here"
                className="form-like"
              />
            </h5>
            <div >
              <button
                type="submit">Add Campus</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  submit(event) {
    event.preventDefault();
    const campus = {
      name: event.target.name.value,
      imgUrl: event.target.imgUrl.value,
      description: event.target.description.value,

    };
    this.props.addCampus(campus);
    event.target.name.value = '';
    event.target.description.value = '';
    event.target.imgUrl.value = '';
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses
  }
};

const mapDispatch = { addCampus, deleteCampus };

export default withRouter(connect(mapState, mapDispatch)(AllCampuses))
