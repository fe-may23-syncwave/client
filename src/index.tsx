import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/normalize.scss';
import { Context, AuthProvider } from 'context';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <Context>
      <Root />
    </Context>
  </AuthProvider>,
);
