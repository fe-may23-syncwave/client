import { Suspense, lazy } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NavBarRoute } from 'types/NavBarRoute';

const App = lazy(() => {
  return import('./App').then((module) => ({
    default: module.App,
  }));
});

const HomePage = lazy(() => {
  return import('./pages/HomePage').then((module) => ({
    default: module.HomePage,
  }));
});

const NotFoundPage = lazy(() => {
  return import('./pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  }));
});

const CatalogPage = lazy(() => {
  return import('./pages/CatalogPage').then((module) => ({
    default: module.CatalogPage,
  }));
});

const ProductPage = lazy(() => {
  return import('./pages/ProductPage').then((module) => ({
    default: module.ProductPage,
  }));
});

const FavoritesPage = lazy(() => {
  return import('./pages/FavoritesPage').then((module) => ({
    default: module.FavoritesPage,
  }));
});

const CartPage = lazy(() => {
  return import('./pages/CartPage').then((module) => ({
    default: module.CartPage,
  }));
});

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export const Root = () => {
  return (
    <Suspense fallback={<div style={styles}>Loading...</div>}>
      <Router>
        <Routes>
          <Route path={NavBarRoute.Home} element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path={NavBarRoute.Phones}>
              <Route index element={<CatalogPage title="Mobile phones" />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>

            <Route path={NavBarRoute.Tablets}>
              <Route index element={<CatalogPage title="Tablets" />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>

            <Route path={NavBarRoute.Accessories}>
              <Route index element={<CatalogPage title="Accessories" />} />

              <Route path=":productId" element={<ProductPage />} />
            </Route>

            <Route path={NavBarRoute.Favorites} element={<FavoritesPage />} />
            <Route path={NavBarRoute.Cart} element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};
