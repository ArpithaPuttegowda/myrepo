import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import {Aboutus} from "../Routings/Aboutus";
import {Home} from "../Routings/Home";

export const Menu = () => {
  const linkData = [
    {href: "/home", content: "Home"},
    {href: "/about", content: "About"},
    {href: "/hooks", content: "Hooks"},
    {href: "/redux", content: "Redux"}
  ];
  return (
    <div>
      <BrowserRouter>
        <div id="menu">
          {linkData?.map((obj) => {
            const {href, content} = obj;
            return <Link to={href}>{content}</Link>;
          })}
        </div>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Aboutus />} path="/about" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
