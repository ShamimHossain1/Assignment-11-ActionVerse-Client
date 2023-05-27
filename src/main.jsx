import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/404 Page/Error';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/LogIn/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/AuthProver/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
