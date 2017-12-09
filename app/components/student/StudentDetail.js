import React from 'react';
import { connect } from 'react-redux';
// import { updateCampus, fetchCampus } from '../../reducers/campuses';
// import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);

    // this.onStoryUpdate = this.onStoryUpdate.bind(this);
    // this.renderRawHTML = this.renderRawHTML.bind(this);
  }

  componentDidMount () {
    // this.props.fetchStoryData();
  }




  render() {
     return <h1> Here is one student!</h1>
  }
}



/* -----------------    CONTAINER     ------------------ */

const mapState = null

const mapDispatch = (dispatch, ownProps) => {
  return {

    }}

export default connect(mapState, mapDispatch)(StudentDetail);
