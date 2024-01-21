import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App