import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FileBase64 from 'react-file-base64'

export default function Edit_Dept() {
    const Navigator=useNavigate();
    
    const [dept, setDept] = useState({});
    const [value, setValue] = useState([]);
    const {id}=useParams();
    console.log(id);

// useEffect=(()=>{
//     axios.get(`http://localhost:4001/edit_department/${id}`)
//     .then(({ data }) => {
//         console.log(data);
//         setValue(data)
//     })
//     .catch(error => {
//         console.log(error);
//     });
// })
    
useEffect(()=>{
    axios.get(`http://localhost:4001/edit_department/${id}`)
     .then(({ data }) => {
         console.log(data,'data');
         setValue([...value,data])
     })
     .catch(error => {
         console.log(error);
     });
},[])

    function handleChange(event) {
      setDept({ ...dept, [event.target.name]: event.target.value });
    }

    // const add = async (event) => {
    //     event.preventDefault();
    //     axios.get('http://localhost:4001/edit_department/:id', dept)
    //         .then(({ data }) => {
    //             console.log(data);
    //         });
    // };

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event.tar);
        console.log('submitted....');
        axios.post(`http://localhost:4001/edit_post_depart/${id}`,dept).then(({data})=>{
            console.log(data);
            console.log(id);
            toast.success('Department Updated successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",})
                
        })
        
    }

    return (
        <div style={{ display: 'block', 
    width: '700px',
    padding: '30px',
    position: 'absolute',
    right: '20%'
        }}>
            <h4 style={{ textAlign: 'center' }}>Edit Department</h4>
            {value.map((item) => (
                <Form onSubmit={handleSubmit} >
                    <Form.Group>
                        <Form.Label>Enter Department Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={item.Dept_Name}
                            name='Dept_Name'
                            value={setDept.Dept_Name}
                            onChange={handleChange} />
                            {}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><FileBase64
        multiple={ false }
        onDone={(res)=>{
          console.log(res.base64);
          // console.log(res.base64);
          setDept({ ...dept, image: res.base64});
        } } /></Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={item.Year}
                            name='Description'
                            value={setDept.Year}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Year Founded</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={item.Description}
                            name='Description'
                            value={setDept.Description}
                            onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Edit
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
            ))}
        </div>
    );
}
