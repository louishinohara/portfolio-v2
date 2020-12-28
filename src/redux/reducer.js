import * as actions from "./actions"; // Imports all the actions from postsActions

export const initialState = {
  temp:'Add Saciation Data'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TEMP:                                                 // Begins loading
      return { ...state, temp: action.payload };
    default:
      return state;
  }
}