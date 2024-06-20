import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import RestrictedRoute from '../../RestrictedRoute.jsx';
import SharedLayout from '../../shared/components/SharedLayout/SharedLayout .jsx';
// import PrivateRoute from '../../PrivateRoute.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage.jsx'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage.jsx'));
const TrackerPage = lazy(
  () => import('../../pages/TrackerPage/TrackerPage.jsx')
);
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <SignUpPage />
              // <RestrictedRoute
              //   redirectTo="/tracker"
              //   component={<SignUpPage />}
              // />
            }
          />
          <Route
            path="/signin"
            element={
              <SignInPage />
              // <RestrictedRoute
              //   redirectTo="/tracker"
              //   component={<SignInPage />}
              // />
            }
          />
          <Route
            path="/tracker"
            element={
              <TrackerPage />
              // <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;