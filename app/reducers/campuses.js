
import axios from 'axios';
// import history from '../history';

// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS '
const DELETE_CAMPUS = 'DELETE_CAMPUS '

// ACTION CREATORS


export function getCampusesCreator(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action
}
export function addCampusCreator(campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action
}
export function updateCampusCreator(campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action
}

export function deleteCampusCreator(id) {
  const action = { type: DELETE_CAMPUS, id };
  return action
}

// REDUCER
export default function reducer(campuses = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...campuses, action.campus];

    case UPDATE_CAMPUS:
      return campuses.map(campus => (action.campus.id === campus.id ? action.campus : campus))

    case DELETE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id)

    default:
      return campuses;
  }

}
//Dispatchers
export const getCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(getCampusesCreator(res.data)))
    .catch(err => console.error(`Could not find campuses:`, err))
};

export const addCampus = (campus) => dispatch => {
  axios.post('/api/campuses/new-campus', campus)
    .then(res => dispatch(addCampusCreator(res.data)))
    .catch(err => console.error(`Could not post campus:`, err))
}


export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/update/${id}`, campus)
    .then(res => dispatch(updateCampusCreator(res.data)))
    .catch(err => console.error(`Could not update campus:`, err))
}
export const deleteCampus = (id) => dispatch => {
  dispatch(deleteCampusCreator(id));
  axios.delete(`/api/campuses/${id}`)
    .then(res => dispatch(updateCampusCreator(res.data)))
    .catch(err => console.error(`Removing user: ${id} unsuccessful`, err))}
