import React, { useEffect } from 'react'
import axios from 'react-axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigator=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:4001/logout')

    })
  return (
<></>
  )
}
