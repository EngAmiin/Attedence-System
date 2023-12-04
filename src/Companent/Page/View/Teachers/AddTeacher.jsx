import React from 'react'

function AddTeacher() {
  return (

    
    <div className="container">
      <div className="card bg-white  p-4 rounded  m-2">
      <h1 className="p-2">Add Teacher</h1>
      <div className="row p-2">
          <div className="card bg-white border p-4">
       
      <form action="">

      <div className="grid grid-cols-3 gap-4">

      <div className="form-control grid grid-cols-1">
        <label htmlFor="">Teacher_Name</label>
            <input type="text"  className='text-2xl p-2 border rounded-md focus:outline-none '/>
        </div>


        <div className="form-control grid grid-cols-1">
            <label htmlFor="">Teacher_phone</label>
            <input type="text"  className='text-2xl p-2 border rounded-md focus:outline-none'/>
        </div>

        <div className="form-control grid grid-cols-1">
            <label htmlFor="">Teacher_Salary</label>
            <input type="number"  className='text-2xl p-2 border rounded-md focus:outline-none'/>
        </div>

        <div className="form-control grid grid-cols-1">
            <label htmlFor="">Teacher_Address</label>
            <input type="text"  className='text-2xl p-2  border rounded-md focus:outline-none'/>
        </div>

        <div className="form-control grid grid-cols-1">
            <label htmlFor="">Teacher_Experience</label>
            <input type="number"  className='text-2xl p-2  border rounded-md focus:outline-none'/>
        </div>

        <div className="form-control grid grid-cols-1">
            <label htmlFor="">Teacher_Gender</label>
            <select  className='text-2xl p-2 border rounded-md focus-outline-none'>
            <option value="...">--Chose gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
                </select>
        </div>
      </div>

      <div className="text-end p-2">
        <button className='bg-sky-300 rounded-md text-2xl p-2'>Insert</button>
      </div>
      </form>
          </div>
      </div>
    </div>
    </div>
  )
}

export default AddTeacher