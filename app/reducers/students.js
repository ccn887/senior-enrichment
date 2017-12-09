import axios from 'axios';


// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT ';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS


export function getStudentsCreator(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudentCreator(student) {
  const action = { type: GET_STUDENT, student };
  return action;
}
export function addStudentCreator(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}
export function updateStudentCreator(student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

export function deleteStudentCreator(id) {
  const action = { type: DELETE_STUDENT, id };
  return action;
}

// REDUCER
export default function reducer(students = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return action.student;

    case ADD_STUDENT:
      return [...students, action.student];

    case UPDATE_STUDENT:
      return students.map(student => (action.student.id === student.id ? action.student : student));

    case DELETE_STUDENT:
      return students.filter(student => student.id !== action.id);

    default:
      return students;
  }

}
//Dispatchers
export const getStudents = () => dispatch => {
  console.log("trying to get students in axios")
  axios.get('/api/students')
    .then(res => dispatch(getStudentsCreator(res.data)))
    .catch(err => console.error(`Could not find students:`, err))
};

export const getStudent = () => dispatch => {
  console.log("trying to get student in axios")
  axios.get(`/api/students/${student.id}`)
    .then(res => dispatch(getStudentCreator(res.data)))
    .catch(err => console.error(`Could not find students:`, err))
};

export const addStudent = (student) => dispatch => {
  axios.post('/api/students', student)
    .then(res => dispatch(addStudentCreator(res.data)))
    .catch(err => console.error(`Could not post student:`, err))
}


export const updateStudent = (student) => dispatch => {
  axios.put(`/api/students/${student.id}`, student)
    .then(res => dispatch(updateStudentCreator(res.data)))
    .catch(err => console.error(`Could not update student:`, err))
}
export const deleteStudent = (id) => dispatch => {
  console.log('deleting student # :', id)
  dispatch(deleteStudentCreator(id))
  axios.delete(`/api/students/${id}`)
    .then(res => dispatch(updateStudentCreator(res.data)))
    .catch(err => console.error(`Removing user: ${id} unsuccessful`, err))
}
