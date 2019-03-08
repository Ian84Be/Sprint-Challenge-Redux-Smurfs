import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const GET_SUCCESS = 'GET_SUCCESS';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const addSmurf = smurf => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
          dispatch({type:GET_SUCCESS,payload:res.data});
      })
      .catch(err => console.log(err));
}

export const deleteSmurf = e => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${e.target.value}`)
      .then(res => {
          dispatch({type:GET_SUCCESS,payload:res.data});
      })
      .catch(err => console.log(err));
}

export const getSmurf = () => dispatch => {
  dispatch({type:GET_SMURF});
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type:GET_SUCCESS,payload:res.data});
    })
    .catch(err => console.log(err));
}