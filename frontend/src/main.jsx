import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router=createBrowserRouter([
  {
    element:<App/>,
    children:[{
     path:"/dashboard",
     element:<Dashboard/>}
  ]
  },
  {
    path:"/",
    element:<Home/>
  },
  {
  path:"/auth/sign-in",
  element:<Signin/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
