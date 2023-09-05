import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';
import { usePageError } from 'hooks/usePageError';
import { authService } from 'services/authService';
import { validateEmail, validatePassword } from 'utils/validation';
import { NavBarRoute } from 'types/NavBarRoute';
import { MainContext } from 'context';
import styles from './Auth.module.scss';

const {
  Form: form,
  'Form--dark': dark,
  'Form__title--dark': titleLight,
  'Form__label--dark': labelLight,
} = styles;

export const RegistrationPage: React.FC = () => {
  const [error, setError] = usePageError('');
  const [registered, setRegistered] = useState(false);
  const { darkTheme } = useContext(MainContext);

  if (registered) {
    return (
      <section className="">
        <h1 className={styles.Title}>Check your email</h1>
        <p className={styles.Title}>
          We have sent you an email with the activation link
        </p>
      </section>
    );
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount
        onSubmit={({ email, password }, formikHelpers) => {
          formikHelpers.setSubmitting(true);

          authService
            .register({ email, password })
            .then(() => {
              setRegistered(true);
            })
            .catch((err) => {
              if (err.message) {
                setError(err.message);
              }

              if (!err.response?.data) {
                return;
              }

              const { errors, message } = err.response.data;

              formikHelpers.setFieldError('email', errors?.email);
              formikHelpers.setFieldError('password', errors?.password);

              if (message) {
                setError(message);
              }
            })
            .finally(() => {
              formikHelpers.setSubmitting(false);
            });
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form
            className={cn('box', form, {
              [dark]: darkTheme,
            })}
          >
            <h1
              className={cn('title', {
                [titleLight]: darkTheme,
              })}
            >
              Sign up
            </h1>
            <div className="field">
              <label
                htmlFor="email"
                className={cn('label', {
                  [labelLight]: darkTheme,
                })}
              >
                Email
              </label>

              <div className="control has-icons-left has-icons-right">
                <Field
                  validate={validateEmail}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  className={cn('input', {
                    'is-danger': touched.email && errors.email,
                  })}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>

                {touched.email && errors.email && (
                  <span className="icon is-small is-right has-text-danger">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>

              {touched.email && errors.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>
            <div className="field">
              <label
                htmlFor="password"
                className={cn('label', {
                  [labelLight]: darkTheme,
                })}
              >
                Password
              </label>

              <div className="control has-icons-left has-icons-right">
                <Field
                  validate={validatePassword}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="*******"
                  className={cn('input', {
                    'is-danger': touched.password && errors.password,
                  })}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>

                {touched.password && errors.password && (
                  <span className="icon is-small is-right has-text-danger">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>

              {touched.password && errors.password ? (
                <p className="help is-danger">{errors.password}</p>
              ) : (
                <p className="help">At least 6 characters</p>
              )}
            </div>
            <div className="field">
              <button
                type="submit"
                className={cn('button is-success has-text-weight-bold', {
                  'is-loading': isSubmitting,
                })}
                disabled={isSubmitting || !!errors.email || !!errors.password}
              >
                Sign up
              </button>
            </div>
            Already have an account?
            <Link
              to={NavBarRoute.Login}
              style={{
                marginLeft: '10px',
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: '#ee971a',
              }}
            >
              Log in
            </Link>
          </Form>
        )}
      </Formik>

      {error && <p className="notification is-danger is-light">{error}</p>}
    </>
  );
};