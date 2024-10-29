import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (<div className='min-h-screen flex inset-0 flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
       <Outlet />
        </main>
        <Footer />
      </div>
    </div>) : 
    (<div>Loading....</div>)

}
export default App
