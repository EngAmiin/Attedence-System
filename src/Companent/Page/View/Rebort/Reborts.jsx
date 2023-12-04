import { Button } from 'bootstrap'
import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai' 
import {AiFillPrinter} from 'react-icons/ai' 
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Reborts() {
  const  [open,setOpen] =useState(false)
  return (
    <div className="container">
      <div className='card bg-slate-50 h-full rounded shadow'>
        <div className='grid border bg-slate-100  p-4 grid-col-3'>
          <h1 className='text-2xl '>Repots</h1>
          <p className='text-lg'>Report Information</p>
        </div>
        <div className='form mt-5 p-4'>
          <form action="">
         <div className="card grid grid-cols-3 gap-3">
          <div className="form-control grid grid-cols-1">
            <label htmlFor="">All</label>
            <select name="" id="" className='p-2 border text-md '>
              <option value="">--choose</option>
              <option>All</option>
              <option>Custom</option>
            </select>
          </div>

          <div className="form-control grid grid-cols-1">
            <label htmlFor="">date</label>
            <input type="date"  className='p-2 border text-md '/>
          </div>

          <div className="form-control grid grid-cols-1">
            <label htmlFor="">Time</label>
            <input type="time"  className='p-2 border text-md '/>
          </div>


         </div>
         <div className=" mt-4" onClick={()=> setOpen(!open)}>
         
              <div className='m-3'>
              {/* <Link className='bg-sky-300 p-2  w-24 flex space-x-4 rounded-md '> <AiOutlineSearch/> Searching </Link> */}
              <Link className='bg-sky-300 p-2  w-24 flex space-x-4 rounded-md'> <AiOutlineSearch  fontSize={25}/>Serach</Link>

              </div>
            

          </div>
       



         <div className={`"table-reponsive mt-5 grid grid-cols-1 gap-3" 
          ${open ? "flex":"hidden"}
         `}>
         <table className='p-2 border w-full '>
                <thead  className='sidebarbg border bg-slate-300  text-black'>
                    <tr className='border p-4'>
                        <td className='p-2'>#</td>
                        <td>Student_Name</td>
                        <td>Class</td>
                        <td>Absent</td>
                        <td>present</td>
                        <td>Precentage</td>
                        {/* <td>Action</td> */}
                    </tr>
                </thead>

                <tbody>
                    <tr className='border p-2'>
                        <td className='p-2'>1</td>
                        <td>Abdulahi Ali Khalif</td>
                        <td>CA202</td>
                        <td>12-days</td>
                        <td>30-Days</td>
                        <td>70%</td>
                    </tr>

                    <tr className='border p-2'>
                        <td className='p-2'>2</td>
                        <td>Sacdiyo Maxamed cali</td>
                        <td>CA204</td>
                        <td>14-days</td>
                        <td>40-Days</td>
                        <td>60%</td>
                    </tr>

                    <tr className='border p-2'>
                        <td className='p-2'>3</td>
                        <td>Yuusuf Ali Abdi</td>
                        <td>CA203</td>
                        <td>9-days</td>
                        <td>30-Days</td>
                        <td>85%</td>
                    </tr>
                    
                    <tr className='border p-2'>
                        <td className='p-2'>4</td>
                        <td>C/racman Ali Axmed</td>
                        <td>CA204</td>
                        <td>10-days</td>
                        <td>90-Days</td>
                        <td>75%</td>
                    </tr>
                    <tr>
                        <td className='p-2'>5</td>
                        <td>Samiro Abdi Yuusuf</td>
                        <td>CA202</td>
                        <td>10-days</td>
                        <td>20-Days</td>
                        <td>95%</td>
                    </tr>

                </tbody>

               </table>
    
         <div className=" mt-4" >
       
            <button className='bg-sky-300 p-2  flex space-x-4 rounded-md '> <AiFillPrinter  fontSize={25}/> Print</button>
          
         </div>
         </div>

{/* 
            <button className='bg-green-700 p-2 rounded-md  flex  mt-3 text-white'> <AiOutlinePlus fontSize={33} className='text-white mt-3'/>Add New</button> <br></br>



            <button className='bg-green-700 p-2 w-40 rounded-md ml-6 mt-3 text-white'> <AiFillPrinter/>Print</button>

             */}
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reborts