import React from 'react'
import logo from '../../images/logo.png'
import {BsFillPersonPlusFill}  from 'react-icons/bs'
import { TbSquareRoundedMinus } from 'react-icons/tb'
function Header() {
  return (
   <div className="container">
    <div className="row">
    <div className=' flex justify-between  p-1'  > 

    
   
    <div className='flex'> <img src={logo} alt=""className='h-10 w-10 ' srcset="" />  <span className=' text-1xl text-sky-300 text-white font-bold mt-1'> Jamhuriya Attendency System </span></div>
   

    <div className="profile flex text-sm space-x-1 border rounded-lg p-1  ">
      <h1 className='mt-2'>Mesud abdirahmaan</h1>
    <BsFillPersonPlusFill fontSize={34} className='mr-2'/>
    </div>


    </div>
    </div>
   </div>
  )
}

export default Header