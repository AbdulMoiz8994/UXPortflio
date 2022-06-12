const transaction = {
  initialtransaction: [
    { id: 1, desc: "Food", amount: 2000 },
    { id: 2, desc: "Grocery", amount: 200 },
    { id: 3, desc: "Lunch", amount: -1000 },
    { id: 4, desc: "Dinner", amount: -500 },
  ],
};

export const Reducer = (state = transaction, action) => {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "ADD_DATA":
      return {
        // ...state,
        initialtransaction: [action.payload, ...state.initialtransaction],
      };
    case "DELETE_TRANSACTION":
      return {
        initialtransaction: state.initialtransaction.filter(
          (value) => value.id !== action.payload
        ),
        ...state.initialtransaction,
      };
    default:
      return state;
  }
};
