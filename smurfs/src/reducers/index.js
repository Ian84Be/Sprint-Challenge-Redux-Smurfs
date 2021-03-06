/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURF,GET_SUCCESS} from '../actions';

const initialState = {
   smurfs: [],
   fetching: false,
   error: null,
 };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF:
      return {
        ...state,
        fetching:true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        fetching:false,
        smurfs: [...action.payload],
      }
    default: return state;
  }
}