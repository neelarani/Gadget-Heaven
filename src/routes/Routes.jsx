import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import GadgetCards from '../components/GadgetCards/GadgetCards';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`../category.json`),
        children: [
          {
            path: '/category/:category',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch(`../gadgetData.json`),
          },
          // {
          //   path: '/details',
          //   element: <GadgetDetail></GadgetDetail>,
          // },
        ],
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
