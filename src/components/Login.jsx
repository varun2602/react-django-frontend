import React from 'react'
import '../styles/Login.css'
import { useState } from 'react'
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const handleUsername = function(event){
       setUsername(event.target.value)
    }
    const handlePassword = function(event){
       setPassword(event.target.value)
    }
    const loginFunction = function(){
      const formData  = {
        "username":username,
        "password":password
      }
      axios.post("http://127.0.0.1:8000/api/login/", formData, { headers: {
        "Content-Type": "application/json", // Example of setting content type header
        // Add other headers as needed
    }}).then(response => {
        // Handle successful response
        
        if(response.status == 200){
            localStorage.setItem("Tren_refresh_token",response.data["refresh"])
            localStorage.setItem("Tren_access_token",response.data["access"])
            window.location.href = "/"
        }
    })
    .catch(error => {
        // Handle error
        console.error('There was an error!', error);
    });      
    }
  return (
    < div className = "loginPage vh-100">
    <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" value={username} onChange={handleUsername} className="form-control" placeholder="Username" id = "username"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" value={password} onChange={handlePassword} className="form-control" placeholder="password" id='password'/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="button" onClick={loginFunction} value="Login" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Login
