import React from 'react'
import Profile from '../../../../images/profile.png'

const UserProfie = () => {
  return (
    <div className=''>
      <div className="container-profile">
        <div className="container-content">
          <div className="content-left">
            <div className="profile-img">
              <img src={Profile} alt="" />
            </div>
            <div className="profile-info">
              <h1>Iqruush Abdi</h1>
              <p>@Admin : Active</p>
            </div>
          </div>


          
      

           <div className="content-right">
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input  className='rounded-md'  type="text" placeholder='@username'/>
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input  className='rounded-md'   type="email" placeholder='@email'/>
            </div>

            <div className="form-group">
              <label htmlFor="">Password</label>
              <input className='rounded-md' type="password" placeholder='@password'/>
            </div>

            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input className='rounded-md' type="password" placeholder='@Confirm Password'/>
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input className='rounded-md'  type="number" placeholder='@phone'/>
            </div>

            <div className="button">
              <button className='btn-changes'>Save Changes</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfie
