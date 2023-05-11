import { createStore } from "redux";

// initial state
const initialState = {
  counter: 0,
};

// create reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "reset":
      return {
        counter: 0,
      };
    default:
      return state;
  }
};

// create store
const store = createStore(counterReducer);

export default store;
