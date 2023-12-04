import React from 'react'
import {BsFillPersonPlusFill}  from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import {SiGoogleclassroom} from 'react-icons/si'
import {TbReport} from 'react-icons/tb'


function Dashboard() {
  return (
  <div>
    <div className="container">
      <div className="row grid grid-cols-4 p-4  gap-4">
        <div className="card bg-yellow-300  h-30 rounded-md">
         <div  className='sidebarbg p-1 rounded'>
           <div className="flex justify-between">
            <h1><BsFillPersonPlusFill fontSize={50}/></h1>
            <p>1,540</p>
           </div>
           <h1 className='mt-4 '>Total students</h1>

           
         </div>
        </div>



        <div className="card bg-green-300  h-30 rounded-md">
         <div className="sidebarbg p-1 rounded">
           <div className=" flex justify-between">
            <h1><GiTeacher fontSize={50}/></h1>
            <p>100</p>
           </div>
           <h1 className='mt-4 '>Total Lectures</h1>

           
         </div>
        </div>


        <div className="card bg-rose-300  h-30 rounded-md">
         <div className="sidebarbg p-1 rounded">
           <div className="flex justify-between">
            <h1><SiGoogleclassroom fontSize={50}/></h1>
            <p>150</p>
           </div>
           <h1 className='mt-4 '>Total Classes</h1>

           
         </div>
        </div>


        <div className="card bg-slate-300  h-30 rounded-md">
         <div className="sidebarbg p-1 rounded">
           <div className="flex justify-between">
            <h1><TbReport fontSize={50}/></h1>
            <p>200</p>
           </div>
           <h1 className='mt-4 '>Total Reports</h1>

           
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard