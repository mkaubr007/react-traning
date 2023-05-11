import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.css";
import axios from "axios";
import Endpoints from "../../api/Endpoints";

const LoginPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClassName: "",
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios
      .post(Endpoints.LOGIN_URL, values)
      .then(
        (response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setRequestResponse({
            textMessage: "login successful, thank you",
            alertClassName: "alert alert-success",
          });
        },
        (error) => {
          console.log(error);
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClassName: "alert alert-danger",
          });

          navigate("/");
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email must be valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="text-center my-5">
            <Link to="/">
              <h1 className="btn btn-primary">Grocery</h1>
            </Link>
          </div>
          <div className={styles.wrapper}>
            <div class={requestResponse.alertClassName} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              New User? <Link to="/register">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
