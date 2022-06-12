import { increment, decrement } from "./index";

const initialData = {
  counter: 0,
  name: "Abdul Moiz",
};
export const CounterReducer = (state = initialData, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        counter: state.counter + action.payload,
        name: state.name,
      };
    case decrement:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
