import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'

import { Sidebar } from 'lucide-react'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const AdminLayout = ({ showNav, setShowNav }) => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
     
        <Topbar />
        <div className='h-[92vh] w-full'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout