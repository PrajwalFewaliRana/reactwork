import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComponent from './components/LayoutComponent';
import ErrorPage from './Pages/ErrorPage';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import UserDetailsPage from './Pages/UserDetailsPage';

const router = createBrowserRouter([
    {
      path: "/",
      element:<LayoutComponent />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/home",
            element: <HomePage />,
          },
        {
          path: "/about-us",
          element: <AboutPage />,
        },
        {
          path: "/contact/:contactId",
          element: <UserDetailsPage />,
        },
      
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

