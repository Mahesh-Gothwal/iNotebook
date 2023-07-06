import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {

    const[credentials, setCredentials] = useState({email:"", password:""})
    let history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            // Save the auth token & Redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");
          }
          else{
            alert("Invalid");
          }
    }
    
const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value});
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input onChange={onChange} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={onChange} type="password" className="form-control" id="password" name='password' value={credentials.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login
