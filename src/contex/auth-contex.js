import { useContext, createContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";

const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const initialAuthState = {
    userData: [],
    token: "",
  };

  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContex.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContex.Provider>
  );
};
//console.log(authState);
//custom hook
const useAuthContex = () => useContext(AuthContex);
export { AuthProvider, useAuthContex };
