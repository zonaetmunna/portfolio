import React, { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/common/Footer/Footer";
import Header from "../Components/common/Header/Header";
import { ThemeContext } from "../context/ThemeProvider";
import routes from "../Routes/routes";

const Layout = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  element={<route.element />}
                  path={route.path}
                  key={idx}
                ></Route>
              )
            );
          })}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
