
import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import Event from './pages/Web/Event'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Web/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUser from './pages/Admin/AdminUser'
import ContactPage from './pages/Web/ContactPage'
import Leftbar from './components/Admin/Leftbar'
import PaymentDetails from './pages/Web/PaymentDetails'
import PaymentConfirmation from './pages/Web/PaymentConfirmation'



const App = () => {
  const [showNav, setShowNav] = useState(false);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/event' element={<Event />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/Leftbar" element={<Leftbar/>}/> 
                        <Route path="/PaymentDetails" element={<PaymentDetails/>}/> 
                        <Route path="/PaymentConfirmation" element={<PaymentConfirmation/>}/> 
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>

                  
                    <Route element={<AdminLayout showNav={showNav} setShowNav={setShowNav} />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUser />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App