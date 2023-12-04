import React from 'react'

import Header from './Header'
import { Outlet } from 'react-router'
import SideBar from './Sidebar'

function LeyoutTeacher() {
  return (
    <div className='flex over-fllow-hidden flex-row'>

        <div className="   w-48     bg-sky-950 text-white">
            <SideBar/>
        </div>

        <div className="flex-1     ">
        <div className=" bg-blue-500 fixed  text-white text-2xl font-bold h-14  w-full ">
            <Header/>
        </div>
      

        <div className="min-1 over-flow-auto  contex  ">
          
          <Outlet/>
          {/* <h1>teacher dashboard</h1> */}
           
        </div>

        </div>


    </div>
  )
}

export default LeyoutTeacher