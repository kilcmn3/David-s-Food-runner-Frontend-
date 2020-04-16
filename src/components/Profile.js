import React, { Fragment, Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as requests from '../containers/requests'
import NavBar from './NavBar';

const bcrypt = require('bcryptjs');
const saltRounds = 10;


export default class Profile extends Component {
  render() {
    return (

      <Formik
        initialValues={{
          email: "", password: "", confirmPassword: ""
        }}

        onSubmit={(values, { setSubmitting }) => {

          setSubmitting(false);

          bcrypt.hash(values.password, saltRounds, function (err, hash) {
            requests.patchUsers({ email: values.email, password: hash }, localStorage.getItem("userid"))
              .then(response => {
                if (response.status >= 500) {
                  alert("Somone is using the email. Please use different one")
                } else (
                  alert("profile update!")
                )
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
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required')
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
            <Fragment>
              <NavBar />

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
                <label htmlFor="email">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter your password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.confirmPassword && touched.confirmPassword && "error"}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Submit
        </button>
              </form>
            </Fragment>
          );
        }}
      </Formik >
    )
  }
}

