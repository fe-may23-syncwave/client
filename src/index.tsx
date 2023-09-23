import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/normalize.scss';
import { Context, AuthProvider, CartProvider } from 'context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
    <AuthProvider>
      <CartProvider>
        <Context>
          <Root />
        </Context>
      </CartProvider>
    </AuthProvider>
  </GoogleOAuthProvider>,
);
