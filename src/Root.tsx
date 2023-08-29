import { Suspense, lazy } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

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
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="phones">
              <Route index element={<CatalogPage />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>

            <Route path="tablets">
              <Route index element={<CatalogPage />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>

            <Route path="accessories">
              <Route index element={<CatalogPage />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>

            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};
