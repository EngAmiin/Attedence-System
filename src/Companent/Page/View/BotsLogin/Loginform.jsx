import React from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router'
// import Modal from 'react-bootstrap/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css'


function Loginform() {

  const [value , setValues]=useState({
    username: '',
    password: '',
    type: ''
   });

   const navgate=useNavigate();

   const Inputgroup =(event)=>{
    setValues(prev => ({...prev,[event.target.name]:  [event.target.value]}))
   }

    const handlelogin =(e)=>{
      e.preventDefault();
      if(value.username == 'Eng-Amiin@gmail.com' && value.password =='123' ){
       // alert ('waa saxaday');
         navgate('/dashboard_Admin');

      }else if(value.username=='' && value.password==''){
        alert ('Please enter the All Fileds');
      }
      else if(value.username == '' && value.password =='1234'){
        alert('please enter User_Name')
      }
      else if(value.username == 'qalif' && value.password =='1234' ){

        //    alert('user');
        navgate('/dashboard_Teacher');
      }else{
        alert('Incorrect password');
      }

    }


  return (
    
  
    <div className='bg-dark d-flex align-items-center justify-content-center w-100 '>
        <div className='Login border rounded  '>
            <h2 className='mb-3'>Attedency System</h2>
            <h2 className='mb-3 ml-10'>Login-Form</h2>
            <form onSubmit={handlelogin} className='needs-validation'> 
            <div className="form-Group was-validated mb-2">
                <label htmlFor="Email" className='form-label'>Email-Address</label>
                <input type="Email" className='form-control'   onChange={Inputgroup} required  name='username'/>

            <div className="invalid-feedback">
                Please Enter Your Email-Address
            </div>

            </div>

            <div className="form-Group  was-validated mb-2">
                <label htmlFor="Password" className='form-label'>Password</label>
                <input type="Password" className='form-control'   onChange={Inputgroup} required  name='password'/>

            <div className="invalid-feedback">
                Please Enter Your Password
            </div>

            </div>

            <div className="Form-Grup form-check mb-2">
                <input type="checkbox" className='form-check-input' />
                <label htmlFor="check" form-check-label>Remember-Me</label>
            </div>
            <button type='submit' className='btn  btn-success mt-2 w-100' >SIGN-IN</button>
            </form>
        </div>
    </div> 
  )
}

export default Loginform