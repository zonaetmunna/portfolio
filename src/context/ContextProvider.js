import { createContext, useReducer } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const initialState = {
  darkMode: false,
};
const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const allContext = useFirebase();
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <AuthContext.Provider value={(allContext, [state, dispatch])}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
