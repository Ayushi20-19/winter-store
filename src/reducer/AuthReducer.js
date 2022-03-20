const clearToken = () => {};
const AuthReducer = (authState, { type, payload }) => {
  console.log(authState, payload);
  switch (type) {
    case "SIGN_UP":
      return { ...authState, token: payload.token, userData: payload.userData };
  }
};
export { AuthReducer };
