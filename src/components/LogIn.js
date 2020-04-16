import React from 'react';
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as requests from '../containers/requests'

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const LogIn = (props) => {
  return (
    < Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {

        setSubmitting(false);

        bcrypt.hash(values.password, saltRounds, function (err, hash) {
          requests.fetchUser(values.email)
            .then(response => {
              if (response.status >= 500) {
                alert("Couldn't find your account")
              } else if (response.status === 200) {
                return response.json()
              }
            })
            .then(data => {
              if (bcrypt.compareSync(values.password, data.password)) {
                localStorage.getItem(data.id)
                props.history.push("/MainContainer");
              } else {
                alert("Email or Password is wrong")
                props.history.push("/");
              }
            })
        })

      }}

      validationSchema={
        Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
        })
      }
    >

      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <button type="submit" disabled={isSubmitting}>
              Login
        </button>

            <Link to="/signup">
              <button disabled={isSubmitting}>
                Sign Up
        </button>
            </Link>
          </form>
        );
      }}
    </Formik >
  )
}

export default LogIn
