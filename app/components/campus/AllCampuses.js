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
      description: '',
      showForm: false
    };
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
              <button id="delete" type="delete" onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
            </div>
          );
        })}
        <button className="campus-wrapper" id="submit" onClick={() => this.hideFunction()}>Add New Campus</button>
        {this.state.showForm ? this.renderNewCampus() : null}
      </section>
    )
  }
  hideFunction() {
    this.state.showForm ?
    this.setState({ showForm: false }) : this.setState({ showForm: true })
    console.log(this.state.showForm)
}
  renderNewCampus() {
    return (
      <section id="campus" >
        <form onSubmit={this.submit}>
          <div >
            <h2 >
              <input
                name="name"
                type="text"
                required
                placeholder="Campus Name"
                className="form-like"
              />
            </h2>
            <h2 >
              <input
                name="description"
                type="description"
                placeholder="Campus Description"
                className="form-like"
              />
            </h2>
            <h2 >
              <input
                name="imgUrl"
                type="imgUrl"
                placeholder="Image URL here"
                className="form-like"
              />
            </h2>
            <div >
              <button
                type="submit">Submit</button>
            </div>
          </div>
        </form>
        </section>
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
