import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invaild email adderess")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <div>
      <h1>SignUp</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
