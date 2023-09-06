import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainContext } from 'context/MainContext';
import { Container } from 'components/common/Container';
import { Footer } from 'components/Footer';
import { Slide, ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import styles from './App.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const { darkTheme } = React.useContext(MainContext);

  return (
    <div
      className={styles.App}
      id="app"
      data-theme={darkTheme ? 'dark' : 'light'}
    >
      <Header className={styles.App__Header} />

      <Container>
        <Outlet />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkTheme ? 'dark' : 'light'}
          transition={Slide}
        />
      </Container>

      <Footer className={styles.App__Footer} />
    </div>
  );
}
