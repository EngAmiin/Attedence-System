import React from 'react'
import { SiGoogleclassroom } from 'react-icons/si'
import { Link } from 'react-router-dom'

function ClaseseAttedence() {
  return (
    <div>
        <div className="containetr">
            <div className="row grid grid-cols-4">
               
            <Link className='mt-4 p-2' to='/dashboard_Teacher/CA202'>
               <div className="class bg-red-600 border rounded-md p-4">
                <div className="flex justify-between">
                    <h1 className='text-3xl text-white '>CA202</h1>

                    <SiGoogleclassroom fontSize={64} className='text-white'/>


                </div>
                <h1 className="text-2xl text-white">
                    Supject: Node js
                </h1>

                    
                    </div>
               
               </Link>


               <Link className='mt-4 p-2' to='/dashboard_Teacher/CA203'>
               <div className="class bg-green-600 border rounded-md p-4">
                <div className="flex justify-between">
                    <h1 className='text-3xl text-white '>CA203</h1>

                    <SiGoogleclassroom fontSize={64} className='text-white'/>


                </div>
                <h1 className="text-2xl text-white">
                    Supject: React js
                </h1>

                    
                    </div>
               
               </Link>               

            </div>
        </div>
    </div>
  )
}

export default ClaseseAttedence