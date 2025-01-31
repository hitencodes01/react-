import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import LogIn from './components/LogIn'
import Profile from './components/Profile'


function App() {
  return(
    <>
    <UserContextProvider>
    <h2>miniContext</h2>
    <LogIn/>
    <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
