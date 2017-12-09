import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import AllStudents from './components/student/AllStudents';
import AllCampuses from './components/campus/AllCampuses';
import CampusDetail from './components/campus/CampusDetail';
import StudentDetail from './components/student/StudentDetail';
import store from './store'
import {getCampuses} from './reducers/campuses'
import {getStudents} from './reducers/students'


export default class Routes extends Component {

    componentDidMount () {
      const campusesThunk = getCampuses();
      const studentsThunk = getStudents();
      store.dispatch(campusesThunk);
      store.dispatch(studentsThunk);
    }

  render(){
  return(
    <div>
    <Header />
    <Switch>
    <Route exact path="/" component={Home}  />
    <Route exact path="/campuses" component={AllCampuses} />
    <Route exact path="/students" component={AllStudents} />
    <Route exact path="students/:id" component={StudentDetail} />
     <Route exact path="campuses/:id" component={CampusDetail} />
    </Switch>
    </div>
)}
}

/* -----------------    CONTAINER     ------------------ */

// const mapProps = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(getCampuses());
//   }
//     // dispatch(fetchStories());
//   //   dispatch(fetchCurrentUser());
//     // what other data might we want to fetch on app load?
//   // },
//   // onStoryEnter: (nextRouterState) => {
//   //   const storyId = nextRouterState.params.id;
//   //   dispatch(fetchStory(storyId));
//   // }
// });

// export default connect(mapProps, mapDispatch)(Routes);

