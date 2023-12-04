import React from 'react'
import  {Link} from 'react-router-dom'
import {AiOutlineDashboard} from 'react-icons/ai'
import {BsFillPersonPlusFill}  from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import {TbReport} from 'react-icons/tb'
import {SiGoogleclassroom} from 'react-icons/si'
// import {GrUserManager} from 'react-icons/gr'
import {BsBarChart} from 'react-icons/bs'
import {GrUserManager} from 'react-icons/gr'
import {BiLogOutCircle} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import logo from '../../images/logo.png'


function SideBar() {
  return (

    <div className='h-screen text-white back' >
       <div className="flex space-x-1 col-span-2 p-2 ">
    <img src={logo} className='w-10 h-10' alt="" />
    <h1  className='text-2xl  text-white-800 mt-1'>Lecture</h1>
    </div>
    <hr />
    {/* headerSedebar */}
    <div className="flex items-center gap-2 px-1 p-5  py-3 ">
       {/* <AiOutlineAntDesign className='text-4xl text-black mt-3 ml-3'/> */}
       <p className='text-sky-300 text-2xl ml-3  '></p>
   </div>
   <div className="menu p-4">

  
     <CgProfile className='ml-10' fontSize={100}/>
     <p className='text  '>Mohamed Hussein Ghedi</p>
       <p className='text-red ml-14'>C120800</p>
   </div>
   <div/>
    <div/>
        <div className="logo">
            {/* <a href="#" className='text-indigo-500 text-3xl text-white p-2 font-bold'>User_Profile</a> */}
        </div>

        <nav className='mt-30 p-4'>
            <ul>
                <Link to='/dashboard_Admin' className='flex  p-2 space-x-1'> <AiOutlineDashboard fontSize={24}/> <p className=''>Dashboard </p></Link>
                <Link to='listUsers' className='flex  p-2 space-x-1'> <BsFillPersonPlusFill fontSize={24}/> <p className=''>Users </p></Link>
                <Link to='Class' className='flex  p-2 space-x-1'> <SiGoogleclassroom fontSize={24}/> <p className=''>Classes </p></Link>
                <Link to='attendence' className='flex  p-2 space-x-1'> <SiGoogleclassroom fontSize={24}/> <p className=''>Attendence </p></Link>
                <Link to='listteacher' className='flex  p-2 space-x-1'> <GiTeacher fontSize={24}/> <p className=''>Lectures</p></Link>
                {/* <Link to='Class' className='flex  p-2 space-x-1'> <SiGoogleclassroom fontSize={24}/> <p className=''>User_Profile  </p></Link> */}
                <Link to='Chart' className='flex  p-2 space-x-1'> <BsBarChart fontSize={24}/> <p className=''>Chart </p></Link>
                <Link to='User_profile' className='flex  p-2 space-x-1 '> <CgProfile color='bg-white' fontSize={24} /> <p className=''>UserProfile </p></Link>
                <Link to='Reborts' className='flex  p-2 space-x-1'> <TbReport fontSize={24}/> <p className=''>Report </p></Link>
                <Link to='/' className='flex  p-2 space-x-1'> <BiLogOutCircle fontSize={24}/> <p className=''>Log-Out </p></Link>
            </ul>
        </nav>
    </div>
  )
  }

export default SideBar