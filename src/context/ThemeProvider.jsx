import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

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


const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )

};

export default ThemeProvider;