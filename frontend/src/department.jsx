import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import FileBase64 from 'react-file-base64';

export default function Dept() {
  const Navigator=useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem('token'));

    axios.get('http://localhost:4001/view_department',{headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}` ,
      
    }
  })
      .then(({ data }) => {
        console.log(data);
        if(data.status==false){
        
          Navigator('/')
          
        }

      })
      .catch(error => {
        console.log(error);
      });
  }, []);


    
    const[dept,setdept]=useState({});
    
    function handleChange(event) {
      setdept({ ...dept, [event.target.name]: event.target.value });
    }
    const add=async (event)=>{
        event.preventDefault();
        axios.post('http://localhost:4001/add_department',dept).then(({data})=>{
        console.log(data);
        toast.success('Department Added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigator('/view_dept')
        })
    }
    add()

      const [image, setImage] = useState('');
    
      function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      
    }


    
  return (
      
    <div style={{ display: 'block', 
    width: '700px',
    padding: '30px',
    position: 'absolute',
    right: '20%'
    
  }}>
      <h4 style={{textAlign:'center'}}>Add Department</h4>
      <Form onSubmit={add}>
      <Form.Group>
                     
          <Form.Label>Enter Department Name</Form.Label>
          <Form.Control type="text" 
                        placeholder="Department Name"
                        name='Dept_Name'
                        value={setdept.Dept_Name} 
                        onChange={handleChange}/>
        </Form.Group><br></br>
        <Form.Group>
          <Form.Label>Department profile image:</Form.Label>
          {/* <Form.Control type="file" 
          onChange={handleFileUpload}
                        placeholder="Profile Image" /> */}
                        <FileBase64
        multiple={ false }
        onDone={(res)=>{
          console.log(res);
          // console.log(res.base64);
          setdept({ ...dept, image: res.base64});
        } } />
                        
        </Form.Group><br></br>
        <Form.Group>
          <Form.Label>Year Founded</Form.Label>
          <Form.Control type="number" 
                        placeholder="Year founded"
                        name='Year'
                        value={setdept.Year} 
                        onChange={handleChange} />
        </Form.Group>
        <Form.Group><br></br>
        <Form.Label>Description</Form.Label>
          <Form.Control type="text" 
                        placeholder="Description"
                        name='Description'
                        value={setdept.Description}
                        onChange={handleChange}  />
        </Form.Group><br></br>
        <Button variant="primary" type="submit">Add
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
        {image && <img src={image} alt="Uploaded Image" />}
      </Form>
    </div>
        
  );
}