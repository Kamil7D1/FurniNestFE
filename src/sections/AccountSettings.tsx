import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../components/Button";
import { CircleAlert } from "lucide-react";
import { Link } from "react-router";
import * as Yup from "yup";

const AccountSettingsSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)",
    )
    .required("Password is required"),

  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const AccountSettings: React.FC = () => {
  return (
    <section>
      <h2>Account Settings</h2>
      <h3>Account Data</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirm: "",
        }}
        validationSchema={AccountSettingsSchema}
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Form className="flex w-full flex-col items-center justify-center gap-5">
          <div className="flex w-full flex-col">
            <label htmlFor="firstName">First Name</label>
            <Field
              className="rounded-[2px] border border-gray-400 p-[10px]"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="firstName"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="lastName">Last Name</label>
            <Field
              className="rounded-[2px] border border-gray-400 p-[10px]"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="lastName"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="email">Email</label>
            <Field
              className="rounded-[2px] border border-gray-400 p-[10px]"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="email"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="password">Password</label>
            <Field
              className="rounded-[2px] border border-gray-400 p-[10px]"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="password"
            />
          </div>
          <Button text="SAVE CHANGES" path="user" />
        </Form>
      </Formik>
      <p>
        <CircleAlert
          size={24}
          strokeWidth={2}
          className="inline-block text-(--color-dark-gray)"
        />{" "}
        You have been using the same password for a long time. For your safety,
        we suggest you change it to a new one.
      </p>
      <div>
        <h3>Deleting Your Account</h3>
        <p>
          If you click this button, you will delete your account in our store.
          Make sure you really want to do this - we will not be able to restore
          your account.
        </p>
        <Button text="Delete Account" path="user" />
      </div>
    </section>
  );
};
