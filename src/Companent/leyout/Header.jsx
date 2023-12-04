import React from 'react'
// import logo from '../../images/logo.png'
import {GrUserManager}  from 'react-icons/gr'
import { TbSquareRoundedMinus } from 'react-icons/tb'
import {FiMenu} from 'react-icons/fi'
import logo from '../../images/logo.png'
function Header() {
  return (
   <div className=" bg-sky-100 border  container">
    <div className="row">
    <div className=' flex justify-between p-1'  > 

    
   
    <div className='flex '> <FiMenu className='mt-2'/> <span className='text-1xl text-White font-bold'></span></div>

    <div className="flex space-x-1 col-span-2 ">
    <img src={logo} className='w-10 h-10' alt="" />
    <h1  className='text-2xl  text-indigo-900 mt-1'>Jamhuriya Attedency System</h1>
    </div>
   

    <div className="profile flex text-sm space-x-1 border rounded-lg p-1  ">
      <h1 className='mt-2 text-black'>Eng-Amiin</h1>
    <GrUserManager   fontSize={34} className=' mr-2'/>
    </div>

    
    </div>
    </div>
   </div>
  )
}

export default Header