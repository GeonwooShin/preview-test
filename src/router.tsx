import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import RootPage from '@pages/RootPage';

type routeElement = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children: { path: string; element: ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(
  routes.map((route) => {
    const childs = route.children?.map((childRoute) => {
      return {
        path: childRoute.path,
        element: childRoute.element,
      };
    });
    return {
      ...route,
      children: childs,
    };
  }),
);

export default router;
