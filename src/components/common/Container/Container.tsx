import React from 'react';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
import styles from './Container.module.scss';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <div className={classNames(styles.Container, className)}>{children}</div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
