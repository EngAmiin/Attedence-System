import React, { useState } from 'react'
import Swal from 'sweetalert2'

function CA202Attendence() {
   

  const Handleclick=()=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Save!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Your file has been Saved.',
          'success'
        )
      }
    })
    
  }

  return (
    <div className='flex flex-col gap-4  m-1'>
        <div className='card'>
        <div className="bg-white shadow p-4 rounded-lg">Student attendence</div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="card">
          <div className="header flex space-x-24">
            <h1 className="text-black m-0">Class: CA202</h1>
            <h3 className="text-black">Course :Web Application</h3>
            <div>

            </div>
            <div></div>
            <div></div>
            <div className="date ml-10">
              <label className='text-black'>date  : </label>
              <input type="date" name="" id="" className='form-control border border-2xl p-1' />
            </div>
          </div>
          <h1 className='p-2'>Total student <span className="bg-sky-300 rounded-lg p-2">20</span></h1>

     
          <table class=" bg-slate-100 p-4 w-full">
  <thead className='bg-gray-50 border-b-2 border-gray-200'>
    <tr>
    <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left left-0'>ID</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Name</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Check-All</th>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""className=' font-bold w-9 h-5 rounded-lg bg-slate-300 check' /></td>
   
    </tr>
  </thead>
  <tbody>
  
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>1</td>
      <td className='p-3 whitespace-nowrap'>Sadaq Mohamed ali</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Abdulhi Ali khalif</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>3</td>
      <td className='p-3 whitespace-nowrap'>Daud mohamed ahmet</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>4</td>
      <td className='p-3 whitespace-nowrap'>Abdrahmaan mahamed ali</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>5</td>
      <td className='p-3 whitespace-nowrap'>Kafi Yaxye ahmet</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>6</td>
      <td className='p-3 whitespace-nowrap'>Abdirisaaq Xaaji Warsame</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>7</td>
      <td className='p-3 whitespace-nowrap'>Mohamed Nuur Ahmet</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>9</td>
      <td className='p-3 whitespace-nowrap'>Omar jibriil abdulqadir</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>10</td>
      <td className='p-3 whitespace-nowrap'>Yahye Mohamed hassan</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>11</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>12</td>
      <td className='p-3 whitespace-nowrap'>sharmake Axmed shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>13</td>
      <td className='p-3 whitespace-nowrap'>Sacdiyo Axmed Cali</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>14</td>
      <td className='p-3 whitespace-nowrap'>Shamso xuseen sabuni</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>15</td>
      <td className='p-3 whitespace-nowrap'>Sacdiyo cumar xasan</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>16</td>
      <td className='p-3 whitespace-nowrap'>Ramlo Xuseen Geedi</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>17</td>
      <td className='p-3 whitespace-nowrap'>Maryan Geedi Cali</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>18</td>
      <td className='p-3 whitespace-nowrap'>Mohamed Cumar Xasan</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>19</td>
      <td className='p-3 whitespace-nowrap'>Qadro Maxamuud Jimcaale</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>20</td>
      <td className='p-3 whitespace-nowrap'>Deeqo Cumar Xasan</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
  </tbody>
</table>
 
<div className="text-center  ">
           <div className="space-x-2">
           <button onClick={Handleclick} className='bg-green-600 text-white border rounded-md text-Black p-2'>Save</button>
           <button className='bg-red-700 text-white border rounded-md p-2'>Cancel</button>
           </div>
           
          </div>
          </div>
          </div>

          


        
        </div>
  )
}


export default CA202Attendence