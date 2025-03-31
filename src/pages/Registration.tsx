import React from "react";
import { Button } from "../components/Button";
import { RegistrationForm } from "../components/RegistrationForm";
import { Link } from "react-router";

export const Registration: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-(--color-peach-cream) px-10">
      <h2 className="mb-15">Create New Customer Account</h2>
      <div className="flex">
        <div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
          <h3 className="hidden lg:block">Register Form</h3>
          <p className="my-5">
            If you don't have an account, create a new one.
          </p>
          <RegistrationForm />
        </div>
        <div className="mx-15 hidden h-full w-[1px] bg-(--color-dark-gray) lg:block"></div>
        <div className="hidden w-1/2 flex-col gap-5 lg:flex">
          <h3>Already Have an Account?</h3>
          <p>
            Sign in to access your account, track your orders and enjoy a faster
            checkout experience.
          </p>
          <Link to={"/login"}>
            <Button text="SIGN IN" />
          </Link>
        </div>
      </div>
    </div>
  );
};
