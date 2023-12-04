import React, { useState } from 'react'
import Chart from "react-apexcharts";

function  Chart() {

  const [state, setstate]= useState({

    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },

  })

  return (
    <div>
      
    </div>
  )
}

export default  Chart


