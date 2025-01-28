import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../components';
import Home from '../modules/home/Home';
import { ProtectedRoute, PublicRoute } from './auth';
import { SignIn, SignUp } from '../modules/user';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='project' replace />} />
      <Route
        path='project/*'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='signup'
        element={
          <PublicRoute>
            <SignUp />
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
