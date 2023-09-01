import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainContext } from 'context/MainContext';
import { Container } from 'components/common/Container';
import { Footer } from 'components/Footer';
import { Header } from './components/Header';
import styles from './App.module.scss';

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
      </Container>

      <Footer className={styles.App__Footer} />
    </div>
  );
}
