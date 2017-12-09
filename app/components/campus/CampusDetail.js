import React from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../../reducers/campuses';
// import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        campus: {
          name: '',
        imageUrl: '',
        description: ''
      }
    }
    this.onCampusUpdate = this.onCampusUpdate.bind(this);

  }

  componentWillReceiveProps (newProps, oldProps) {
    this.setState({
      campus: newProps.campus
    });
  }


  render() {
    const {students, campuses} = this.props;
    const campus = this.state.campus
     return <h1> Here is one campus!</h1>
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

    }}

export default connect(mapState, mapDispatch)(CampusDetail);
