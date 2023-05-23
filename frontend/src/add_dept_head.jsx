import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import FileBase64 from 'react-file-base64';
export default function Dhead() {
  const Navigator=useNavigate();
  
 
    const[dept,setdept]=useState({});
    const[token,settoken]=useState(false)
    const [value,setvalue]=useState([]);
  

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
  



    useEffect(() => {
      axios.get('http://localhost:4001/view_department',{headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}` ,
      
    }
  })
      .then(({ data }) => {
        console.log(data);
        setvalue(data)
        if(data.status==false){
        
          Navigator('/')
          
        }

      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    
    function handleChange(event) {
      setdept({ ...dept, [event.target.name]: event.target.value });
    }
    const add=async (event)=>{
        event.preventDefault();
        axios.post('http://localhost:4001/add_dept_head',dept).then(({data})=>{
        console.log(data);
        toast.success('Employee Added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
      })
    }
    add()
    return (
      <div style={{ display: 'block', 
    width: '700px',
    padding: '30px',
    position: 'absolute',
    right: '20%'
    
  }}>
      <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30,
                   }}>
      <h4 style={{textAlign:'center'}}>Add Department Heads</h4>
      <Form onSubmit={add}>
      <Form.Group>
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" 
                        placeholder="Name"
                        name='Name'
                        value={setdept.Name} 
                        onChange={handleChange}/>
        </Form.Group><br></br>
        <FileBase64
        multiple={ false }
        onDone={(res)=>{
          console.log(res.base64);
          // console.log(res.base64);
          setdept({ ...dept, image: res.base64});
        } } />
        <Form.Group><br></br>
          <Form.Label>Employee Number</Form.Label>
          <Form.Control type="number" 
                        placeholder="Employee number"
                        name='E_number'
                        value={setdept.E_number} 
                        onChange={handleChange} />
        </Form.Group>
        <Form.Group><br></br>
        <Form.Label>Age</Form.Label>
          <Form.Control type="number" 
                        placeholder="Age"
                        name='Age'
                        value={setdept.Age}
                        onChange={handleChange}  />
        </Form.Group><br></br>
       
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={setdept.Dept_Name}
              label="Department"
              name='Dept_Name'
              onChange={handleChange}
            >
        {value.map((item)=>{
          {console.log(item);}
          return(
            
              <MenuItem value={item.Dept_Name} name='Dept_name'>{item.Dept_Name}</MenuItem>
              )
            })}
            </Select>
          </FormControl>
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
      </Form>
    </div>
    </div>
  );
}