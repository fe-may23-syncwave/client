import { useContext, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NavBarRoute } from 'types/NavBarRoute';
import {
  RegistrationPage,
  AccountActivationPage,
  LoginPage,
  UsersPage,
} from 'pages/auth';
import { RequireAuth } from 'components/RequireAuth';
import { AuthContext } from 'context';
import { HomePage } from 'pages/HomePage';
import { App } from 'App';
import { CatalogPage } from 'pages/CatalogPage';
import { ProductPage } from 'pages/ProductPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { CartPage } from 'pages/CartPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const Root = () => {
  const { checkAuth } = useContext(AuthContext);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={NavBarRoute.Home} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path={NavBarRoute.Register} element={<RegistrationPage />} />
          <Route
            path="activate/:activationToken"
            element={<AccountActivationPage />}
          />
          <Route path={NavBarRoute.Login} element={<LoginPage />} />

          <Route path="/" element={<RequireAuth />}>
            <Route path={NavBarRoute.Users} element={<UsersPage />} />
          </Route>

          <Route path={NavBarRoute.Phones}>
            <Route
              index
              element={<CatalogPage title="Mobile phones" type="phones" />}
            />
            <Route path=":productId" element={<ProductPage />} />
          </Route>

          <Route path={NavBarRoute.Tablets}>
            <Route
              index
              element={<CatalogPage title="Tablets" type="tablets" />}
            />
            <Route path=":productId" element={<ProductPage />} />
          </Route>

          <Route path={NavBarRoute.Accessories}>
            <Route
              index
              element={<CatalogPage title="Accessories" type="accessories" />}
            />

            <Route path=":productId" element={<ProductPage />} />
          </Route>

          <Route path={NavBarRoute.Favorites} element={<FavoritesPage />} />
          <Route path={NavBarRoute.Cart} element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
