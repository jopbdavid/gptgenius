import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <SignUp />;
    </div>
  );
};

export default SignInPage;
