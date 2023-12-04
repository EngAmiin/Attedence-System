import React from 'react'
import  {Link} from 'react-router-dom'
import {MdOutlineUpdate} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import Swal from 'sweetalert2'



function Users() {

  const HandleClick=()=>{
    Swal.fire(
      'Succesfully!',
      'Updated!',
      'success'
    )
  }

  const HandleClicked=()=>{
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
        <h1 className="font"></h1>
        <div className="header flex justify-between    p-2">
            <h1 className=' p-2 text-2xl'>Users</h1>
            <div className="contex">
            {/* <Link to='/AddTeacher' className='bg-green-700 text-white p-2 rounded-md'>Add New Users</Link> */}
            </div>
        </div>
        <div className="row  ">
            <div className="">
               <table className='p-2 border w-full '>
                <thead  className='sidebarbg border bg-black text-white'>
                    <tr>
                        <td className='p-2'>#</td>
                        <td>User_Name</td>
                        <td>User_Phone</td>
                        <td>User_Email</td>
                        <td>User_Address</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='p-2'>1</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>0617878789</td>
                        <td> Khalif@gmail.com</td>
                        <td>Karasbaley</td>
                   
                       <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={HandleClick} fontSize={20}/>  </Link>
                        <button className='bg-rose-700  p-1 rounded-md'> <MdDelete onClick={HandleClicked} fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>2</td>
                        <td>Yaxye Ali Abdi</td>
                        <td>0610909897</td>
                        <td>Abdi@gmail.com</td>
                        <td>Yaqshiid</td>
                        
                        <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={HandleClick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={HandleClicked} fontSize={20}/> </button>
                        
                       </td>
                    </tr>


                    <tr>
                        <td className='p-2'>1</td>
                        <td>Sadak Abdullahi Rage</td>
                        <td>0616777399</td>
                        <td>Sadak@gmail.com</td>
                        <td>Hodan</td>
                     
                        <td className='flex space-x-1'>  
                        <Link  className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={HandleClick}  fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={HandleClicked} fontSize={20}/> </button>
                       </td>
                    </tr>

                    <tr>
                        <td className='p-2'>4</td>
                        <td>Salmo Axmed Yusuf</td>
                        <td>0617204010</td>
                        <td>Yusuf@gmail.com</td>
                        <td>Wadajir</td>
                        <td className='flex space-x-1'>  
                        <Link className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate onClick={HandleClick} fontSize={20}/> </Link>
                        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete onClick={HandleClicked} fontSize={20}/> </button>
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

export default Users