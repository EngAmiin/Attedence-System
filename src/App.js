import React from 'react'
import './index.css'
import Leyout from './Companent/leyout/Leyout'

import {Router ,Routes,Route} from 'react-router-dom'
import Dashboard from './Companent/Page/Dashboard'
import ListStudents from './Companent/Page/View/Students/ListStudents'
import AddStudents from './Companent/Page/View/Students/AddStudents'
// import EditStudents from './Companent/Page/View/Students/EditStudents'
import ListTeachers from './Companent/Page/View/Teachers/ListTeachers'

import AddTeacher from './Companent/Page/View/Teachers/AddTeacher'
import Class from './Companent/Page/View/Class/class'
import Login from './Companent/Page/View/Login/login'
import LeyoutTeacher from './Companent/TeacherLayout/Layout'
import ClaseseAttedence from './Companent/TeacherLayout/Pages/ClaseseAttedence'
import Dashbord from './Companent/TeacherLayout/Pages/Dashbord'
// import CA202 from './Companent/TeacherLayout/Pages/Class/CA202'
// import CA203 from './Companent/TeacherLayout/Pages/Class/CA203'
import Attedence from './Companent/Page/View/attendence/Attendence'
import CA202Attendence from './Companent/Page/View/attendence/Classes/CA202'
import Users from './Companent/Page/View/Users/Users'
import Reborts from './Companent/Page/View/Rebort/Reborts'
import Chart from './Companent/Page/View/Chart/Charts'
import Loginform from './Companent/Page/View/BotsLogin/Loginform'
import User_profile from './Companent/Page/View/Users/User_profile'
import Charts from './Companent/Page/View/Chart/Charts'
function App() {
  return (
    <div>

      <Routes>
      {/* <Route path='/'  element={<Loginform/>}> */}
        <Route path='/'  element={<Login/>}>


        </Route>
      </Routes>
      
      <Routes>
        <Route path='/dashboard_Admin' element={<Leyout/>}>
          <Route index  element={<Dashboard/>}/>


    {/* All students */}
          
           <Route path='liststudents'  element={<ListStudents/>}/>
           <Route path='/dashboard_Admin/AddStudents'  element={<AddStudents/>}/>
           {/* <Route path='editStudents'  element={<EditStudents/>}/> */}
           <Route path='listteacher'  element={<ListTeachers/>}/>
           <Route path='listUsers'  element={<Users/>}/>
           <Route path='Chart'  element={<Charts/>}/>
           <Route path='Reborts'  element={<Reborts/>}/>
           <Route path='User_profile'  element={<User_profile/>}/>




   {/* All Teachers     */}
           <Route path='/dashboard_Admin/AddTeacher'  element={<AddTeacher/>}/>
           <Route path='class'  element={<Class/>}/>


      {/* attendence      */}
      <Route path='attendence'  element={<Attedence/>}/>

      <Route path='/dashboard_Admin/CA202'  element={<CA202Attendence/>}/>
      <Route path='/dashboard_Admin/CA202'  element={<CA202Attendence/>}/>


    






        </Route>
      </Routes>


      <Routes>
        <Route path='/dashboard_Teacher'  element={<LeyoutTeacher/>}>
          <Route index element={<Dashbord/>}/>
          <Route path='classAttedence' element={<ClaseseAttedence/>}/>
          {/* <Route path='/dashboard_Teacher/CA202' element={<CA202/>}/> */}
          {/* <Route path='/dashboard_Teacher/CA203' element={<CA203/>}/> */}
        </Route>
    
      </Routes>

      
    
    </div>
  )
}

export default App