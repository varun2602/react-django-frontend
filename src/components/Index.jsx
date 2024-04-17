import React, { useEffect } from 'react'
import { useState } from 'react'

const Index = () => {

useEffect(function(){
 if(localStorage.getItem("Tren_access_token") === null){
    window.location.href = '/login'
 }
}, [])
  return (
    
    <div>
      <h1>Index</h1>
    </div>
  )
}

export default Index
