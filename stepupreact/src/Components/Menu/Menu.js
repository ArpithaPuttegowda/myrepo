import React, {lazy, Suspense} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Home} from "../Routings/Home";
import WithoutRedux from "../WithoutRedux/WithoutRedux";

const Aboutus = lazy(() => import("../Routings/Aboutus"));
const ExampleUseMemo = lazy(() => import("../Hooks/ExampleUseMemo"));

export const Menu = () => {
  const linkData = [
    {href: "/home", content: "Home"},
    {href: "/about", content: "About"},
    {href: "/hooks", content: "Hooks"},
    {href: "/withoutRedux", content: "withoutRedux"}
  ];
  const routeData = [
    {element: <Home />, path: "/home"},
    {element: <Aboutus />, path: "/about"},
    {element: <ExampleUseMemo />, path: "/hooks"},
    {element: <Navigate to="/home" />, path: "*"},
    {element: <WithoutRedux />, path: "/withoutRedux"}
  ];
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <div id="menu">
            {linkData?.map((obj) => {
              const {href, content} = obj;
              return <Link to={href}>{content}</Link>;
            })}
          </div>
          <Routes>
            {routeData.map((obj) => {
              return <Route element={obj.element} path={obj.path} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
