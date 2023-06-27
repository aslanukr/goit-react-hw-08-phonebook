import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserThunk, logOutThunk } from 'redux/auth/authThunk';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { selectFetchingCurrentUser } from 'redux/selectors';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Homepage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);
  useEffect(() => {
    dispatch(currentUserThunk())
      .unwrap()
      .catch(() => dispatch(logOutThunk()));
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Suspense fallback={<Loader />}>
        {' '}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}
