import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const router=createBrowserRouter([
  {
    element:<App/>,
    children:[{
      path:"/",
      element:<Home/>
    },{
     path:"/dashboaed",
     element:<Dashboard/>}
  ]
  },{
  path:"/auth/sign-in",
  element:<Signin/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
