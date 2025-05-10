import React, { JSX, lazy } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import AdminLayout from '../layouts/AdminLayout';
import NotFound from '../pages/NotFound';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

// Lazy loading
const About = lazy(() => import('../pages/About'));
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const Login = lazy(() => import('../pages/Login'));
const Resume = lazy(() => import('../pages/Resume/index'));
const Project = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

export interface AppRoute {
    path: string;
    element?: React.ReactNode;
    layout?: React.ReactNode;
    children?: AppRoute[];
    requiresAuth?: boolean;
    title?: string;
}

export const routesConfig: AppRoute[] = [
  {
    path: '/',
    element: <Navigate to="/about" replace />,
  },
  {
    path: '/',
    layout: <DefaultLayout />,
    children: [
      { path: 'about', element: <About />, title: 'Viet Duc | Portfolio | About' },
    ],
  },
  {
    path: '/admin',
    layout: <AdminLayout />,
    requiresAuth: true,
    children: [
      { path: '', element: <AdminDashboard />, title: 'Admin Dashboard' },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    title: 'Login',
  },
  {
    path: '/resume',
    element: <Resume />,
    title: 'Viet Duc | Portfolio | Resume'
  },
  {
    path: '/project',
    element: <Project />,
    title: 'Viet Duc | Portfolio | Projects'
  },
  {
    path: '/contact',
    element: <Contact />,
    title: 'Viet Duc | Portfolio | Contact'
  },
  {
    path: '*',
    element: <NotFound />,
    title: '404 - Page Not Found',
  },
]; 