import React from "react";
import {useDispatch} from "react-redux";
import {setEmail, setName, setPWD} from "./RegistrationSlice";

export const TemplateRegistration = () => {
  const dispatch = useDispatch();
  const handleName = (eve) => {
    dispatch(setName(eve.target.value));
  };
  const handlePWD = (eve) => {
    dispatch(setPWD(eve.target.value));
  };
  const handleEmail = (eve) => {
    dispatch(setEmail(eve.target.value));
  };
  return (
    <div>
      <p>
        <b>Name:</b>
        <input id="name" onChange={handleName} />
      </p>
      <p>
        <b>Password</b>
        <input id="pwd" onChange={handlePWD} />
      </p>
      <p>
        <b>Email</b>
        <input id="email" onChange={handleEmail} />
      </p>
    </div>
  );
};
