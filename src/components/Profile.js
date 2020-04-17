import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as requests from '../containers/requests'
import { Form } from 'react-bootstrap';
import { CONTAINER, MYFORM, BUTTON } from '../styledcomponent/styles'
import NavBar from './NavBar'

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Profile = (props) => {
  return (
    <CONTAINER>
      <h1>Register here</h1>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}

        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);

          bcrypt.hash(values.password, saltRounds, function (err, hash) {
            requests.postUsers({ email: values.email, password: hash })
              .then(response => response.json())
              .then(data => {
                if (data.status === 500) {
                  alert("Someone's using that Email")
                } else {
                  localStorage.setItem("userid", data.id)
                  return props.history.push("/MainContainer");
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
              <MYFORM onSubmit={handleSubmit} className="mx-auto">
                <Form.Group controlId="formEmail">
                  <Form.Label>Update User Name :</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  {touched.email && errors.email ? (
                    <div className="error-message">{errors.email}</div>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formPaSSWORD">
                  <Form.Label>Update Password :</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  {touched.password && errors.password ? (
                    <div className="error-message">{errors.password}</div>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formConfirmPaSSWORD">
                  <Form.Label>Confirm Your Password :</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm your password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirmPassword && touched.confirmPassword && "error"}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="error-message">{errors.confirmPassword}</div>
                  ) : null}
                </Form.Group>
                {/*Submit button that is disabled after button is clicked/form is in the process of submitting*/}
                <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
          </BUTTON>
                <Link to='/login'><BUTTON variant="primary" type="submit" >
                  Back to Login
          </BUTTON></Link>
              </MYFORM>
            </Fragment>
          )
        }
        }
      </Formik>
    </CONTAINER>
  );
}

export default Profile