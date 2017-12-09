import React from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../../reducers/campuses';
import { withRouter } from 'react-router';
/* -----------------    COMPONENT     ------------------ */

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);

    // this.onStoryUpdate = this.onStoryUpdate.bind(this);
    // this.renderRawHTML = this.renderRawHTML.bind(this);
  }

  // componentDidMount () {
  //   console.log('im trying to render')

  //   this.props.getStudent();
  // }




  render() {
    console.log('im trying to render')
     return <h1> Here is one student!</h1>
  }
}



/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  // return {
  //   students: state.students,
  //   campuses: state.campuses
  // }
};

const mapDispatch = {getStudent}


export default withRouter(connect(mapState, mapDispatch)(StudentDetail));
