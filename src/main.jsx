import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './Static-element/Error';
import Login from './Static-element/Login';
import Register from './Static-element/Register';
import Authprovider from './Provider/Authprovider';
import Root from './Root';
import Home from './MainComponent/Home';
import AddFood from './MainComponent/AddFood';
import AvailableFood from './MainComponent/AvailableFood';
import ManageFood from './MainComponent/ManageFood';
import FoodRequest from './MainComponent/FoodRequest';
import Privateroute from './Static-element/Privateroute';
import FoodSingle from './MainComponent/FoodSingle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true, // Mark this as the default child route
        element: <Navigate to="/home" replace />, // Redirect to /home
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      
      {
        path: '/addFood',
        element: <Privateroute><AddFood></AddFood></Privateroute>,
      },
      {
        path:'/availableFood',
        element: <AvailableFood></AvailableFood>,
      },
      {
        path:'/foods/:yourEmail',
        element:<Privateroute><ManageFood></ManageFood></Privateroute>,
      },
      {
        path: '/request/:reqemail',
        element: <Privateroute><FoodRequest></FoodRequest></Privateroute>,
      },
      {
        path: '/food/:id',
        element:<Privateroute> <FoodSingle></FoodSingle> </Privateroute>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
     <Authprovider>
       <RouterProvider router={router} />
     </Authprovider>
     </QueryClientProvider>
  </StrictMode>
)
