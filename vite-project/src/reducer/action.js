export const increment = "INCREMENT";
export const decrement = "DECREMENT";

export const incrementAction = () => ({
  type: increment,
  payload: 5,
});

export const decrementAction = () => ({
  type: decrement,
});
