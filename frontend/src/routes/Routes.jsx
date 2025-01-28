import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../components';
import Home from '../modules/home/Home';
import { PublicRoute } from './auth';
import { SignIn } from '../modules/user';
// import { Login, Profile, Register } from '../modules/user';
// import { ProtectedRoute, PublicRoute } from './auth';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='project' replace />} />
      <Route path='project/*' element={<Home />} />
      <Route
        path='signup'
        element={
          <PublicRoute>
            <div>Register Component!!</div>
          </PublicRoute>
        }
      />
      <Route
        path='signin'
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
