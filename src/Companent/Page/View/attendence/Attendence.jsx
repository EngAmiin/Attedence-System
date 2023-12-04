import React from 'react'
import { SiGoogleclassroom } from 'react-icons/si'
import { Link } from 'react-router-dom'
import {GrReactjs} from 'react-icons/gr'
import {GrNode} from 'react-icons/gr'
import {SiJavascript} from 'react-icons/si'

function Attedence() {
  return (
    <div>
        <div className="containetr">
            <div className="row grid grid-cols-3">
               
            <Link className='mt-4 p-2' to='/dashboard_Admin/CA202'>
                <div className="card"> 
               <div className=" bg-white border rounded-md p-4">
                <div className="flex justify-between">
                    <h1 className='text-3xl text-black '>CA202</h1>

                    <GrReactjs fontSize={64} className='text-black'/>


                </div>
                <h1 className="text-xl text-black">
                 Lecture Name: Axmed Abdi
                </h1>
                <h1 className="text-md text-black">
                 Course: React
                </h1>
                

                    
                    </div>
                    </div>
               </Link>


               <Link className='mt-4 p-2' to='/dashboard_Admin/CA202'>
                <div className="card"> 
               <div className=" bg-white border rounded-md p-4">
                <div className="flex justify-between">
                    <h1 className='text-3xl text-black '>CA203</h1>

                    <SiJavascript fontSize={64} className='text-black'/>


                </div>
                <h1 className="text-xl text-black">
                 Lecture Name: A/shakur Ali
                </h1>
                <h1 className="text-md text-black">
                 Course: JavaScript
                </h1>
                

                    
                    </div>
                    </div>
               </Link>


               <Link className='mt-4 p-2' to='/dashboard_Teacher/CA203'>
                <div className="card">
               <div className="bg-white   border rounded-md p-4">
                <div className="flex justify-between">
                    <h1 className='text-3xl text-black '>CA204</h1>

                    <GrNode fontSize={64} className='text-black'/>


                </div>
                <h1 className="text-xl text-black">
                 Lecture Name: Mohamed Ali 
                </h1>
                <h1 className="text-md text-black">
                 Course: Node.js
                </h1>



                
                    
                    </div>
                    </div>
               </Link>
               
                              

            </div>
        </div>
    </div>
  )
}

export default Attedence