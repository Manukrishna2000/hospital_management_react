import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import {  Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './loading';

export default function ViewDept_user() {
  const [dept, setDept] = useState([]);
  const[load,setload]=useState(false)
  
  const handleDelete = async (id) => {
    try {
      axios.post(`http://localhost:4001/delete_department/${id}`)
      setDept(dept.filter((d) => d._id !== id));
      toast.success('Department deleted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }  
  };

  useEffect(() => {
    setload(true)
    axios.get('http://localhost:4001/userview_department')
      .then(({ data }) => {
        console.log(data);
        
        setDept(data);
        
          setload(false)
      
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
 

    <div style={{
    position: 'relative',
    left:'10%',
    width: '80%',
    top:'2rem',
}}>
     {load ? <LoadingSpinner/> : 
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col'>Department Name</th>
            <th scope='col'>Year</th>
            <th scope='col'>Description</th>
            
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {dept.map((dept) => (
            <tr key={dept._id}>
              <td>
                                <img src={dept.image} alt="" height={100} width={100}/>

              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='ms-3'>
                    {dept.Dept_Name}
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{dept.Year}</p>
              </td>
              <td>{dept.Description}</td>
              <Link to={`/Userview_dept/${dept._id}`}>
                  <Button variant='primary'>view</Button>
                </Link>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
        }
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
        </div>
  );
}
