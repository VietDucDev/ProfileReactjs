import { useRoutes, Navigate, Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { routesConfig, AppRoute } from './config';
import { isAuthenticated } from '../utils/auth';
import ScrollToTop from '../components/crollToTop';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const mapRoutes = (routes: AppRoute[]): any[] =>
  routes.map(({ path, element, layout, children, requiresAuth, title }) => {
    const wrapper = layout ? (
      layout
    ) : children ? (
      <Outlet />
    ) : (
      element
    );

    const page = children
      ? mapRoutes(children)
      : {
          index: path === '',
          path,
          element: requiresAuth ? (
            <ProtectedRoute>{element}</ProtectedRoute>
          ) : (
            element
          ),
        };

    // Gán document.title theo route
    if (title && !Array.isArray(page)) {
      const original = page.element;
      page.element = (
        <>
          <TitleSetter title={title} />
          {original}
        </>
      );
    }

    return children
      ? {
          path,
          element: wrapper,
          children: page,
        }
      : page;
  });

const TitleSetter = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

const AppRoutes: React.FC = () => {
  const element = useRoutes(mapRoutes(routesConfig));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      {element}
    </Suspense>
  );
};

export default AppRoutes;
