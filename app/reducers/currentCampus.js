// import axios from 'axios';
// import history from '../history';

// // ACTION TYPES

// const SET_CURRENT_CAMPUS = 'SET_CURRENT_CAMPUS';
// const REMOVE_CURRENT_CAMPUS = 'REMOVE_CURRENT_CAMPUS'

// // ACTION CREATORS


// export function setCurrentCampusCreator(campus) {
//   const action = { type: SET_CURRENT_CAMPUS, campus };
//   return action;
// }
// export function removeCurrentCampusCreator() {
//   const action = { type: REMOVE_CURRENT_CAMPUS };
//   return action;
// }

// // REDUCER
// export default function reducer(currentCampus = null, action) {

//   switch (action.type) {

//     case GET_CURRENT_CAMPUS:
//       return action.campus;

//     default:
//       return currentCampus;
//   }

// }
// //Dispatchers
// const resToData = res => res.data;

// export const getCampus = (campus) => dispatch => {
//   console.log("trying to get one in axios")
//   axios.get('/api/campus')
//     .then(res => dispatch(getCampusesCreator(res.data)))
//     .catch(err => console.error(`Could not find campuses:`, err))
// };

// export const addCampus = (campus, history) => dispatch => {
//   axios.post('/api/campuses/new-campus', campus)
//     .then(res => dispatch(addCampusCreator(res.data)))
//     .catch(err => console.error(`Could not post campus:`, err))
// }


// export const updateCampus = (campus) => dispatch => {
//   axios.put(`/api/campuses/${campus.id}`, campus)
//     .then(res => dispatch(updateCampusCreator(res.data)))
//     .catch(err => console.error(`Could not update campus:`, err))
// }
// export const deleteCampus = (id) => dispatch => {
//   dispatch(deleteCampusCreator(id))
//   axios.delete(`/api/campuses/${id}`, campus)
//     .then(res => dispatch(updateCampusCreator(res.data)))
//     .catch(err => console.error(`Removing user: ${id} unsuccessful`, err))}
