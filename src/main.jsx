import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Layout from './pages/layout.jsx';

function Error() {
  return <div>Error! Page not found.</div>;
}

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Layout /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}>
      <App />

    </RouterProvider>
  </React.StrictMode>,
);
