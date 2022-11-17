import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/common/Footer/Footer";
import Header from "../Components/common/Header/Header";
import routes from "../Routes/routes";

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;
