import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';


export default function Forgot() {
    const[dept,setdept]=useState();
    function handleChange(event) {
        
        setdept({ ...dept, [event.target.name]: event.target.value });
        
      }
  
    const add=async (event)=>{
        event.preventDefault();
        console.log(dept);
        axios.post('http://localhost:4001/forgot',dept)
       
        toast.success('Password Changed successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    
}
  return (
    <div style={{ display: 'block', 
    width: '700px',
    padding: '30px',
    position: 'absolute',
    left: '20%'}}>
        <Form onSubmit={add}>
        <Form.Group>
    <Form.Label>New password</Form.Label>
    <Form.Control type="text" 
                  placeholder="Password"
                  name='password'
                  value={setdept.password} 
                  onChange={handleChange} />
  </Form.Group><br></br>
  <Button variant="primary" type="submit">Update
                    </Button>
                    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </Form>
  </div>
  
  )
}
