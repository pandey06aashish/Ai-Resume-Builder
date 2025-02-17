import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './components/Header';
import { Toaster } from 'sonner';

const App = () => {
  const {user,isLoaded,isSignedIn}=useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to={"/auth/sign-in"}/>
  }
  return (
    <>
      <Header/>
      <Outlet/> 
      <Toaster/>
    </>
  )
}

export default App