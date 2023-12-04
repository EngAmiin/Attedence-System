import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'
import logo from '../../../../images/logo.png'
import {BiLogInCircle} from 'react-icons/bi' 
import Swal from 'sweetalert2'




function Login() {


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
      if(value.username == 'Eng-Amiin' && value.password =='123' ){
       // alert ('waa saxaday');
         navgate('/dashboard_Admin');

      }else if(value.username=='' && value.password==''){
        alert ('Please enter the All Fileds');
      }
      else if(value.username == '' && value.password =='1234'){
        alert('please enter U ser_Name')
      }
      else if(value.username == 'qalif' && value.password =='1234' ){

        //    alert('user');
        navgate('/dashboard_Teacher');
      }else{
       alert('Incorret Password')
      }
    }
  return (
    <div className='container w-[70px] md:w-full'>
       <div class="content">

       <div className="header flex">
        <img src={logo} className='w-12 h-12 font-bold' alt="" />
        <h1 className='login ml-1 mt-2 text-xl mb-5 font-bold'>Jamhuriya Attedency System</h1> <br/>
        </div>
        <h1 className="mb-3 text-center text-xl font-bold mr-5">Login</h1>

      {/* <div class="text">Jamhuriya Attedency System</div> */}
      <form onSubmit={handlelogin} action="#">
          <div class="field">
              <span class="bx bxs-user"></span>
              <input  type="username" placeholder="Username" required  name='username' onChange={Inputgroup}/>
          </div>
        <div class="field">
            <span class="bx bxs-lock-alt"></span>
            <input className='text-xl text-bold'  type="password" placeholder="Password" required  name='password' onChange={Inputgroup}/>
        </div>

        <div className="flex">
         <button  class='btn'>Sign In</button>
        </div>
      
        <div class="foot">
            {/* <a className="text-xl text-indigo-800">Already have an account?</a><br></br> */}
            <p className="text-black text-indigo-800 text-xl text-center font-bold">all Ready Have An Account?</p>
            <p className="text-rose-900 text-center text-2x font-bold"> Sign In</p>
            {/* <a class="in" href="#">Sign In</a> */}
        </div>

      </form>
  </div>
    </div>






    // <div className='login shadow-2 bg-[#F9F9F9]'>
    //     <div className="container ">
    //         <div className="row grid grid-cols-3">
    //             <div>

    //             </div>

    //             <div className="bg-white shadow-2xl  rounded-lg border p-4 mt-40">
    //                 <div className="header flex">
    //                 <img src={logo} className='w-12 h-12' alt="" />
    //                     <h1 className='login ml-1 mt-2 text-2xl'>Just Attedency System</h1> <br />
                        
    //                 </div>
                    
    //                 <div className="header flex ml-20">
    //                 <img src={logo} className='w-12 h-12' alt="" />
    //                     <h1 className='login ml-1 mt-2 text-2xl text-indigo-700'>Lecture</h1> <br />
                        
    //                 </div>
                    
    //                  <form onSubmit={handlelogin} className='mt-1 p-4'>
    //                     <div className="form-control">
    //                         <label htmlFor="" className='text-lg mr-60 p-0'> Username</label>
    //                         <input type="text"  className='border rounded-md w-full p-2 text-sm h-10 focus:outline-none'
    //                         name='username'
    //                          onChange={Inputgroup}/>
    //                     </div>
    //                     <div className="form-control">
    //                         <label htmlFor="" className='text-lg mr-60 p-0'> password</label>
    //                         <input type="password"   className='border rounded-md w-full p-2 text-sm h-10 focus:outline-none'
    //                         name='password'
    //                         onChange={Inputgroup}/>
  
    //                     </div>

    //                     <div className="text-center mt-4 p-2 ">
    //                       {/* <BiLogInCircle fontSize={24}/> */}
    //                         <button className='Login mb-2'>Login   </button>
    //                         <Link className='text-red-700 mt-2'>ForGet Password</Link>

    //                     </div>

    //                  </form>
    //             </div>
    //             <div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
  
}

export default Login