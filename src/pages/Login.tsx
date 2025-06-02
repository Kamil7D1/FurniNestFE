import React from "react";
import { Button } from "../components/Button";
import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router";

export const Login: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-(--color-peach-cream) px-10">
      <h2 className="mb-15">Customer Login</h2>
      <div className="flex">
        <div className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
          <h3 className="hidden lg:block">Registered Customer</h3>
          <p className="my-5">
            If you have an account, sign in with your email address.
          </p>
          <LoginForm />
        </div>
        <div className="mx-15 hidden h-full w-[1px] bg-(--color-dark-gray) lg:block"></div>
        <div className="hidden w-1/2 flex-col gap-5 lg:flex">
          <h3>New Customers</h3>
          <p>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          <Link to={"/registration"}>
            <Button text="CREATE AN ACCOUNT" type="button" />
          </Link>
        </div>
      </div>
    </div>
  );
};
