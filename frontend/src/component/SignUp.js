import React from "react";
import AuthForm from "./AuthForm";

const SignUp = () => {
  const getData = (data) => {
    console.log("Auth", data);
  };
  return (
    <div>
      <AuthForm onSubmit={getData} />
    </div>
  );
};

export default SignUp;
