import React from "react";
import {useSelector} from "react-redux";
import {TemplateRegistration} from "./TemplateRegistration";

export const Registration = () => {
  const state = useSelector((state) => state);
  const handleReg = () => {
    const name = state.registration.name;
    const pwd = state.registration.pwd;
    const email = state.registration.email;
    console.log({
      name,
      pwd,
      email
    });
  };
  return (
    <div>
      <TemplateRegistration />
      <button onClick={handleReg}>Registration</button>
    </div>
  );
};
