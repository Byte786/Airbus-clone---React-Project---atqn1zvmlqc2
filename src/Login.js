import React from 'react'
import react from './Login.css'
const Login = () => {
  return (
    <div className="login-wrapper">
             <h1>Please Log In</h1>
             <form>
               <label>
                 <p>Emaili</p>
                 <input type="text" />
               </label>
               <label>
                 <p>Password</p>
                 <input type="password" />
               </label>
               <div>
                 <button type="submit">Login</button>
               </div>
             </form>
           </div>
            
  )
}

export default Login