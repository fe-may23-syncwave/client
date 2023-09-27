import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';
import { Typography } from 'components/common/Typography';
import { AuthContext, MainContext } from 'context';
import { usePageError } from 'hooks/usePageError';
import { validateEmail, validatePassword } from 'utils/validation';
import { useNavigateOnLogin } from 'utils/useNavigateOnLogin';
import { NavBarRoute } from 'types/NavBarRoute';
import GoogleButton from './googleButton/GoogleButton';
import styles from './Auth.module.scss';

const {
  Form: form,
  'Form--dark': dark,
  'Form__title--dark': titleLight,
  'Form__label--dark': labelLight,
  'Form__input--dark': inputLight,
} = styles;

export const LoginPage: React.FC = () => {
  const navigateOnLogin = useNavigateOnLogin();
  const { darkTheme } = useContext(MainContext);

  const [error, setError] = usePageError('');
  const { login } = useContext(AuthContext);

  return (
    <>
      <Typography
        type="h1"
        className={cn('title', {
          [titleLight]: darkTheme,
        })}
      >
        Log in
      </Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount
        onSubmit={({ email, password }) => {
          return (
            login({ email, password })
              .then(() => {
                navigateOnLogin();
              })
              // eslint-disable-next-line @typescript-eslint/no-shadow
              .catch((error) => {
                setError(error.response?.data?.message);
              })
          );
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form
            className={cn('box', form, {
              [dark]: darkTheme,
            })}
          >
            <div className="field">
              <label
                htmlFor="email"
                className={cn('label', {
                  [labelLight]: darkTheme,
                })}
              >
                <Typography type="label">Email</Typography>
              </label>

              <div className="control has-icons-left has-icons-right">
                <Field
                  validate={validateEmail}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  className={cn('input', inputLight, {
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
                <Typography type="label">Password</Typography>
              </label>

              <div className="control has-icons-left has-icons-right">
                <Field
                  validate={validatePassword}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="*******"
                  className={cn('input', inputLight, {
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
            <div className="field is-flex is-justify-content-space-between">
              <button
                type="submit"
                className={cn('button is-success has-text-weight-bold', {
                  'is-loading': isSubmitting,
                })}
                disabled={isSubmitting || !!errors.email || !!errors.password}
              >
                Log in
              </button>
              <GoogleButton
                setError={setError}
                navigateOnLogin={navigateOnLogin}
              />
            </div>
            <Typography type="text" tagName="span">
              Do not have an account yet?
            </Typography>
            <Link
              to={NavBarRoute.Register}
              style={{
                marginLeft: '10px',
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: '#905bff',
              }}
            >
              <Typography type="text" tagName="span">
                Sign up
              </Typography>
            </Link>
          </Form>
        )}
      </Formik>

      {error && <p className="notification is-danger is-light">{error}</p>}
    </>
  );
};
