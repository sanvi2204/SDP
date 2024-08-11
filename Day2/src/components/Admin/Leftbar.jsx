import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Cog, Mail, Users, Power } from 'lucide-react'
import { Button } from '../ui/button'
const Leftbar = () => {

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        },
        {
            title: 'Gallery',
            link: '/event',
            icon: Users
          },
          {
            title: 'Contact Us',
            link: '/contact',
            icon: Users
          }
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-blackpt-10 'style = {{backgroundColor:'teal'}}>
           
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link}  className='p-5 hover:bg-primary/10 font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full width:25% gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button className='p-5  bg-red-600 hover:bg-red-500/10 font-bold  w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>

        </div>
    )
}

export default Leftbar