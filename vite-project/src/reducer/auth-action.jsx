export const login = "LOGIN";
export const logout = "LOGOUT";
export const user = "USER";

// const [username, setUserName] = useState(null);
export const loginFunc = () => ({
  type: login,
  //   payload: value,
});
export const logoutFunc = (value) => ({
  type: logout,
  payload: value,
});
export const userFunc = (username) => ({
  type: user,
  payload: username,
});
