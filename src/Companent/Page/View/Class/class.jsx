import React from 'react'
import { MdDelete, MdOutlineUpdate } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Class() {
  return (
    <div className='mr-2 ml-2 mt-2 pt-2  card'>
        <div className="container">        
            <div className="row grid md:grid-cols-3 grid-cols-3">
                <div className="left p-4 ">
                {/* <div className="card bg-white border p-4"> */}
                    
               <div className="bg-white h-full p-4 border rounded">
               <h1 className="sidebarbg text-2xl">Class Regesterion</h1>
                <form action="" className='mt-2'>
                    <div className="form-control">
                        <label htmlFor="">Class name</label>
                        <input type="text"  className='border rounded-md h-10 focus:outline-none  text-2xl w-full'/>
                        <div className='text-end mt-3'> 
                            <button className=" bg-sky-300 p-1 rounded-md">Insert</button>
                        </div>
                    </div>
                </form>

               </div>
                </div>
                {/* TABLE */}

                
               

                <div className="card shadow rounded bg-white mt-2 col-span-2 p-2">
                    <div className="header flex justify-between p-2">
                        <div className="">
                            <h1 className='text-2xl'>List Class</h1>

                        </div>
                        <div className="">
                            <input type="text" placeholder='Search'  className='border rounded-md focus:outline-none h-8 p-2  text-1xl '/>
                        </div>
                    </div>
                <table className='p-2 border w-full'>
                    
<thead className='sidebarbg'>
    <tr>
        <td className='p-2'>#</td>
        <td>class_Name</td>
        <td>class_date</td>
      
        <td>Action</td>


    </tr>
</thead>

<tbody>
  

    <tr>
        <td className='p-2'>1</td>
        <td>CA202</td>
        <td>12/2/2022</td>
        
        <td className='flex space-x-1'>  
        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
       </td>
    </tr>

    <tr>
        <td className='p-2'>2</td>
        <td>CA203</td>
        <td>12/2/2022</td>
        
        <td className='flex space-x-1'>  
        <Link to='/editStudents ' className='bg-sky-300 p-1 rounded-md'> <MdOutlineUpdate fontSize={20}/> </Link>
        <button className='bg-rose-700  p-1 rounded-md'>  <MdDelete fontSize={20}/> </button>
       </td>
    </tr>


    <tr>
        <td className='p-2'>3</td>
        <td>CA204</td>
        <td>12/2/2022</td>
        
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
  )
}

export default Class