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
import AddAToy from './Components/Pages/AddAToy/AddAToy';
import AllToys from './Components/Pages/AllToys/AllToys';
import ToyDetails from './Components/Pages/AllToys/ToyDetails';
import MyToys from './Components/Pages/MyToys/MyToys';
import UpdateData from './Components/Pages/MyToys/UpdateData';
import Search from './Components/Pages/Search/Search';
import SearchQ from './Components/Pages/Search/SearchQ/SearchQ';
import Blog from './Components/Pages/Blogs/Blogs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


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
        },
        {
          path:"/AddAToy",
          element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path:"/AllToys",
          element:<AllToys></AllToys>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/toys/:id",
          element:<ToyDetails></ToyDetails>,
          loader : ({params}) => fetch(`https://server-site-shamimhossain1.vercel.app/allToys/${params.id}`)
        },
        {
          path:"/myToys",
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        
        },
        {
          path:"/updateToys/:id",
          element:<UpdateData></UpdateData>,
          loader: ({params}) => fetch(`https://server-site-shamimhossain1.vercel.app/allToys/${params.id}`)
        
        },
        
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: 'search',
    element: <Search></Search>,
    children:[
        {
            path:':data',
            element: <SearchQ></SearchQ>,
            loader: ({params}) => fetch(`https://server-site-shamimhossain1.vercel.app/search?query=${params.data}`)
        }
    ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
