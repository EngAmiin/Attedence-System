import React, {useState} from 'react'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import {TbReport} from 'react-icons/tb'
import logo from '../../../../images/logo.png'

function  Charts() {

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
   <div className="grid grid-cols-3 gap-2">
    <div>

    </div>
   <div className="flex space-x-1 col-span-2 ">
    <img src={logo} className='w-10 h-10' alt="" />
    <h1  className='text-2xl  text-indigo-800 mt-1'>Jamhuriya Attedency System</h1>
    </div>

    
   </div>
   <br />
      <br />

      <ReactApexChart options={state.options} series={state.series} type="pie" width={520} />
   </div>
  )
}

export default  Charts