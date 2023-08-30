import { Outlet } from 'react-router-dom';
import { Container } from 'components/common/Container';
import { Footer } from 'components/Footer';
import { Header } from './components/Header';
import { Context } from './context/context';
import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.App}>
      <Context>
        <>
          <Header className={styles.App__Header} />
          <Container>
            <Outlet />
          </Container>

          <Footer className={styles.App__Footer} />
        </>
      </Context>
    </div>
  );
}
