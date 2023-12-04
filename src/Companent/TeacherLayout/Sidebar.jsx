import React from 'react'
import  {Link} from 'react-router-dom'
import profile from '../../images/profile.png'
import {AiOutlineAntDesign, AiOutlineDashboard} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
// import {BsFillPersonPlusFill}  from 'react-icons/bs'
// import {GiTeacher} from 'react-icons/gi'
import {TbReport} from 'react-icons/tb'
// import {SiGoogleclassroom} from 'react-icons/si'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {SiGoogleclassroom} from 'react-icons/si'
import {GrUserManager} from 'react-icons/gr'




function SideBar() {
  return (
    <div >
         {/* headerSedebar */}
         <div className="flex items-center  ">
            {/* <AiOutlineAntDesign className='text-4xl text-black mt-3 ml-3'/> */}
            <p className='text-sky-300 text-2xl ml-3 mt-3 '></p>
        </div>
        <div className="menu p-4">
          <GrUserManager className='border rounded-md' fontSize={150} />
          <p className='text-white text-center pr-4 text-30 '>Lecture</p>
            <p className='text-white-300'>Mohamed Husein Ghedi</p>
        </div>


        <nav className='mt-30 p-4'>
            <ul>
                <Link to='/dashboard_Teacher' className='flex  p-2 space-x-1'> <AiOutlineDashboard fontSize={24}/> <p className=''>Dashboard </p></Link>

                <Link to='report' className='flex  p-2 space-x-1'> <BsFillPersonPlusFill  fontSize={24}/> <p className=''>Student</p></Link>
                <Link to='classAttedence' className='flex  p-2 space-x-1'> <SiGoogleclassroom fontSize={24}/> <p className=''>Classes </p></Link>
                <Link to='report' className='flex  p-2 space-x-1'> <TbReport fontSize={24}/> <p className=''>Report </p></Link>
                <Link to='/' className='flex  p-2 space-x-1'> <BiLogOutCircle fontSize={24}/> <p className=''>Log-Out </p></Link>
             


            </ul>
        </nav>
    </div>
  )
}

export default SideBar