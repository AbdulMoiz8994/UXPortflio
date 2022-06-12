import { createStore } from "redux";
import { AuthReducer } from "../reducer/auth-reducer";
import { CounterReducer } from "../reducer/counter-reducer";
export const Store = createStore(AuthReducer);

// for multiple reducers
// export const Store = createStore({
//     reducer: {
//       AuthReducer,
//       CounterReducer,
//     },
//   });
