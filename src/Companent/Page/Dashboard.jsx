import React, {useState} from 'react'
import {BsFillPersonPlusFill}  from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import {SiGoogleclassroom} from 'react-icons/si'
import {TbReport} from 'react-icons/tb'
import {FaUserNurse} from 'react-icons/fa'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';


function Dashboard() {

  const [state, setstate]= useState({

    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['CA202', 'CA203', 'CA204', 'CA205', 'CA206'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'center',
          }
        }
      }]
    },

  })










  return (









  <div>
    <div className="container">
      <div className="row grid grid-cols-4 p-4  gap-4">
        <div className="card bg-sky-700  h-30 rounded-md">
         <div className='sidebarb p-1'>
           <div className="flex justify-between">
            <h1><BsFillPersonPlusFill fontSize={50}/></h1>
            <p>1,540</p>
           </div>
           <h1 className='mt-4 text-white'>Total_students</h1>

           
         </div>
        </div>

        <div className="card bg-green-300  h-30 rounded-md">
         <div className='sidebars p-1'>
           <div className="flex justify-between">
            <h1><GiTeacher fontSize={50}/></h1>
            <p>100</p>
           </div>
           <h1 className='mt-4 '>Total_Lectutes</h1>

           
         </div>
        </div>


        <div className="card bg-rose-300  h-30 rounded-md">
         <div className="sidebre p-1">
           <div className="flex justify-between">
            <h1><SiGoogleclassroom fontSize={50}/></h1>
            <p>150</p>
           </div>
           <h1 className='mt-4 '>Total_Classes</h1>

         </div>
        </div>

        <div className="card  bg-sky-700  h-30 rounded-md">
         <div className='sidebarb p-1'>
           <div className="flex justify-between">
            <h1><FaUserNurse fontSize={50}/></h1>
            <p>1,540</p>
           </div>
           <h1 className='mt-4 '>Total_Users</h1>

           
         </div>
        </div>

        <div className="card bg-slate-300  h-30 rounded-md">
         <div className="sidepr p-1">
           <div className="flex justify-between">
            <h1><TbReport fontSize={50}/></h1>
            <p>200</p>
           </div>
           <h1 className='mt-4 '>Total_Reports</h1>

           
         </div>
        </div>
      </div>
    </div>
    
    <div>
   

   <br />
      <br />

      <ReactApexChart options={state.options} series={state.series} type="pie" width={420} />
  </div>
  </div>
  )
}

export default Dashboard