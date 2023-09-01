import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/normalize.scss';
import { Context } from 'context/MainContext';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Context>
    <Root />
  </Context>,
);
