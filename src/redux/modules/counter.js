// initialize state
const initialState = {
  number: 0,
};

// Action value
const ADD_NUM = "ADD_NUM";

//Action Creator
export const addNum = (payload) => {
  return {
    type: ADD_NUM,
    payload: payload,
  };
};

//reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return { number: state.number + action.payload };
    default:
      return state;
  }
};

export default counter;
