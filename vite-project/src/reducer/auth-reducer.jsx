import { login, logout, user } from "./auth-action";
export const AuthReducer = (
  state = {
    user: "",
  },
  action
) => {
  switch (action.type) {
    case login:
      return {
        ...state,
      };
    case logout:
      return {
        ...state,
        user: (action.payload = ""),
      };
    case user:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
