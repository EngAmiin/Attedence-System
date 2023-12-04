import React from 'react'
import { Link } from 'react-router-dom'

import {MdOutlineUpdate} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import Swal from 'sweetalert2'

function ListTeachers() {


  const Handleclick=()=>{
    Swal.fire(
      'Succesfully!',
      'Updated!',
      'success'
    )
  }


  const Handleclicked=()=>{
    Swal.fire(
      'Succesfully!',
      'Deleted!',
      'success'
    )
  }


  return (
    <div>
      <div className="container  mt-5">
        <div className="card bg-white shadow-md p-4 rounded  m-2">
        <h1 className="font">Manage List Lecture</h1>
        <div className="header flex justify-between    p-2">
            <h1 className=' p-2 font'>Lectures</h1>
            <div className="contex">
            <Link to='/dashboard_Admin/AddTeacher'>
<button type="button" class="button">
  <span class="button__text ">Add Lecture</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button></Link>
            </div>
            
        </div>
        <div className="row  ">
            <div className="">
               <table className='p-2 border w-full'>
                <thead  className='sidebarbg border bg-black text-white'>
                    <tr>
                        <td className='p-2 '>#</td>
                        <td>Lecture_Name</td>
                        <td>Lecture_Phone</td>
                        <td>Lecture_Address</td>
                        <td>Lecture_Salary</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='p-2'>1</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>0617878789</td>
                        <td>Karasbaley</td>
                        <td>$300</td>
                       <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={Handleclick} fontSize={20}/>  </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={Handleclicked} fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>2</td>
                        <td>Yaxye Ali Abdi</td>
                        <td>0610909897</td>
                        <td>Yaqshiid</td>
                        <td>$900</td>
                        <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={Handleclick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={Handleclicked} fontSize={20}/> </button>
                       </td>
                    </tr>


                    <tr>
                        <td className='p-2'>3</td>
                        <td>Scdiyo Ali Khalif</td>
                        <td>0619019806</td>
                        <td>Shangaani</td>
                        <td>$400</td>
                        <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={Handleclick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={Handleclicked} fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>4</td>
                        <td>Salmo Axmed Yusuf</td>
                        <td>0617204010</td>
                        <td>Wadajir</td>
                        <td>$200</td>
                        <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={Handleclick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={Handleclicked} fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>5</td>
                        <td>Iqro Aabdi Ali</td>
                        <td>0613490999</td>
                        <td>Shangani</td>
                        <td>$700</td>
                        <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={Handleclick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={Handleclicked} fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>6</td>
                        <td>Hassan Ali Abdi</td>
                        <td>0613980909</td>
                        <td>Karaan</td>
                        <td>$500</td>
                        <td className='flex space-x-1'>  
                        <Link  className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={Handleclick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={Handleclicked} fontSize={20}/> </button>
                        
                       </td>
                    </tr>
                </tbody>

               </table>
            </div>
        </div>
        </div>
      </div>

    </div>

  )
}

export default ListTeachers