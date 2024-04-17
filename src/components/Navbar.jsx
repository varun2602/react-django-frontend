import React, { useState } from 'react'
import { useEffect } from 'react'
import "../styles/Navbar.css"
import '../scripts/Navbar'
import axios from 'axios'

const Navbar = (props) => {
  let [isAuth, setIsAuth] = useState(false)
    const logoutFunction = function(){
        console.log(localStorage.getItem("Tren_refresh_token"))
        const formData = {"refresh":localStorage.getItem("Tren_refresh_token")}
        axios.post("http://127.0.0.1:8000/api/logout/", formData, {
            headers:{"Content-Type":"application/json"}
        }).then(function() {
            
                localStorage.removeItem("Tren_refresh_token")
                localStorage.removeItem("Tren_access_token")
                window.location.href = "/"
 
        }).catch(error => console.log(error))

    }
  
    useEffect(function(){
       const access_token = localStorage.getItem("Tren_access_token")
       if(access_token === null){
        setIsAuth(false)
        props.myClick(isAuth)
 
       }
       else{
        setIsAuth(true)
        props.myClick(isAuth)
    
       }
    }, [])
  return (
    
    <>
    <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <a className="nav-link" href="###"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="####"><i className="far fa-address-book"></i>Address Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-clone"></i>Components</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Calendar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar"></i>Charts</a>
                </li>
                <li className="nav-item">
                   { isAuth ? <a className="nav-link" href="##" onClick={logoutFunction}><i className="far fa-copy"></i>Logout</a>:<a className="nav-link" href="/login"><i className="far fa-copy"></i>Sign in</a> }
                </li>
                <li className="nav-item">
                   { isAuth ? null :<a className="nav-link" href="/register"><i className="far fa-copy"></i>Register</a> }
                </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar
