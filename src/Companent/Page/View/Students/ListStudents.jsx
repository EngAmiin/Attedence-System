import React from 'react'
import { Link } from 'react-router-dom'

import {MdOutlineUpdate} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'

function ListStudents() {
  return (
    <div>
      <div className="container  mt-5">
        <div className="card bg-white shadow-md p-4 rounded  m-2">
        <h1 className="p-2 font-bold">Manage List Teachers</h1>
        <div className="header flex justify-between    p-2">
            <h1 className=' p-2 font-bold border rounded-md bg-green-900 text-white'>CA202</h1>
            <Link to='/dashboard_Admin/AddStudents' className='bg-sky-500 p-2 text-white rounded-md'>Add New Students</Link>
        </div>
        <div className="row  ">
            <div className="">
               <table className='p-2 border w-full '>

                <thead  className='sidebarbg border'>
                    <tr className='sidebarbg'>
                        <td className='p-2'>#</td>
                        <td>Student_Name</td>
                        <td>Student_Phone</td>
                        <td>Student_Address</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='p-2'>1</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>06178787</td>
                        <td>Suuq-Xolha</td>
                       <td className='flex space-x-1'>  
                        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/>  </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>2</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>06178787</td>
                        <td>Madino</td>
                        <td className='flex space-x-1'>  
                        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
                       </td>
                    </tr>


                    <tr>
                        <td className='p-2'>3</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>06178787</td>
                        <td>Howl-Wadaag</td>
                        <td className='flex space-x-1'>  
                        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>3</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>06178787</td>
                        <td>Karaan</td>
                        <td className='flex space-x-1'>  
                        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>4</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>06178787</td>
                        <td>Yaqshiid</td>
                        <td className='flex space-x-1'>  
                        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>5</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>06178787</td>
                        <td>Shibis</td>
                        <td className='flex space-x-1'>  
                        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
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

export default ListStudents