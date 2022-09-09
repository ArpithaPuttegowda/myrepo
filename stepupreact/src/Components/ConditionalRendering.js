import React, {useState} from "react";

export const ConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showContent, setShowContent] = useState(true);
  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>Toggle</button>
      {isLogin ? <Registration /> : <Login />}
      <h1>{showContent && <span>STEP UP</span>}</h1>
      <button onClick={() => setShowContent(!showContent)}>Click me</button>
    </div>
  );
};

const Login = () => {
  return <h1>I'm Login page</h1>;
};

const Registration = () => {
  return <h1>I'm Registration Page</h1>;
};
