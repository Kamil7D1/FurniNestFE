import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../components/Button";
import { Link } from "react-router";
import * as Yup from "yup";
import { useCustomer } from "../hooks/useCustomer";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)",
    )
    .required("Password is required"),
});

export const LoginForm = () => {
  const { login } = useCustomer();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        login(values);
      }}
    >
      <Form className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-full flex-col">
          <label htmlFor="email">Email</label>
          <Field
            className="rounded-[2px] border border-(--color-dark-gray) p-[10px]"
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage className="text-red-600" component="div" name="email" />
        </div>

        <div className="flex w-full flex-col">
          <label htmlFor="password">Password</label>
          <Field
            className="rounded-[2px] border border-(--color-dark-gray) p-[10px]"
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
        <Button text="SIGN IN" type="submit" />
        <p className="lg:hidden">
          Don't have an account?{" "}
          <Link className="underline" to="/registration">
            Sign up
          </Link>
        </p>
      </Form>
    </Formik>
  );
};
