import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import ContextProvider from "./context/ContextProvider";
import ThemeProvider from "./context/ThemeProvider";
import Layout from "./Pages/Layout";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
