import React from 'react'

import {FaUserGraduate} from 'react-icons/fa'
import {ImRadioChecked} from 'react-icons/im'
import {ImRadioUnchecked} from 'react-icons/im'

function CA202() {
  return (
 <div className='flex flex-col gap-4'>
        
        <div className="bg-white p-4 rounded-lg">Student attendence</div>

        <div className="bg-white p-4 rounded-lg">

          <div className="header flex space-x-24">
            <h1 className="text-black m-0">Class: CA202</h1>
            <h3 className="text-black">Course :Web Application ussin React</h3>
            <div>

            </div>
            <div></div>
            <div></div>
            <div className="date ml-10">
              <label className='text-black'>date  : </label>
              <input type="date" name="" id="" className='form-control border border-2xl p-1' />
            </div>
          </div>
          <h1 className='p-2'>Total student <span className="bg-sky-300 rounded-lg p-2">54</span></h1>

     
          <table class=" bg-slate-100 p-4 w-full">
  <thead className='bg-gray-50 border-b-2 border-gray-200'>
    <tr>
    <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left left-0'>ID</th>
      <th className='p-3 text-sm font-semibold tracking-wide text-left left-0'>Name</th>
   
    </tr>
  </thead>
  <tbody>
  
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>1</td>
      <td className='p-3 whitespace-nowrap'>Sadaq Mohamed ali</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Abdulhi khalif</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>3</td>
      <td className='p-3 whitespace-nowrap'>Daud mohamed ahmet</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>4</td>
      <td className='p-3 whitespace-nowrap'>Abdrahmaan mahamed ali</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>5</td>
      <td className='p-3 whitespace-nowrap'>Kafi Dudu ahmet</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>6</td>
      <td className='p-3 whitespace-nowrap'>Abdirisaaq warsame</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>1</td>
      <td className='p-3 whitespace-nowrap'>Mohamed nuur ahmet</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Omar jibriil abdulqadir</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>

    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>1</td>
      <td className='p-3 whitespace-nowrap'>Yahye Mohamed hassan</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
    <tr className='bg-gray-50 p-2'>
      <td className='p-3 whitespace-nowrap'>2</td>
      <td className='p-3 whitespace-nowrap'>Mascuud abdirahmaan shikhdoon</td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
      <td className='p-3 whitespace-nowrap'><input type="checkbox" name="" id=""  className=' font-bold w-9 h-5 rounded-lg bg-slate-300' /></td>
    </tr>
  </tbody>
</table>
          </div>



        
        </div>
  )
}

export default CA202