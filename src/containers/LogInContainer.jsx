import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import * as requests from '../containers/requests';
import { CONTAINER } from '../styledcomponent/styles';
import { LogIn } from '../exportComponents';

const LogInContainer = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _bcrypt = require('bcryptjs');
  const _validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('No password provided.'),
  });

  const handleChange = (event) => {
    if (event.target.name === 'password') {
      return setPassword(event.target.value);
    }
    if (event.target.name === 'email') {
      return setEmail(event.target.value);
    }
  };

  return (
    <CONTAINER>
      <Formik
        enableReinitialize={true}
        initialValues={{ email: email, password: password }}
        validationSchema={_validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);

          requests
            .fetchUser(values.email)
            .then((response) => response.json())
            .then((data) => {
              if (data.id > -1) {
                _bcrypt.compare(
                  values.password,
                  data.password,
                  function (err, result) {
                    if (result) {
                      const id = localStorage.removeItem('userid');
                      localStorage.clear();
                      localStorage.setItem('userid', data.id);
                      props.updateToken(id);
                      return props.history.push('/home');
                    } else {
                      alert('Email or Password is wrong');
                      setPassword('');
                    }
                  }
                );
              } else {
                alert('Email or Password is wrong');
                setPassword('');
              }
            });
        }}>
        {({ errors, touched, handleBlur, handleSubmit, isSubmitting }) => (
          <LogIn
            email={email}
            password={password}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </CONTAINER>
  );
};

// reference for useing withRouter: https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
export default withRouter(LogInContainer);
