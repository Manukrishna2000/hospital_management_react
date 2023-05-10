import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

export default function ViewEmp_admin() {
  const [dept, setDept] = useState([]);
  const navigator=useNavigate()
  const[token,settoken]=useState()

//   const handleSubmit = (event)=>{
//     event.preventDefault()
//     console.log(event.tar);
//     console.log('submitted....');
//     axios.post(`http://localhost:4001/view_employees/${id}`,dept).then(({data})=>{
//         console.log(data);
//         console.log(id);
//         toast.success('Department deleted successfully!', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",})
            
//     })
// }

const handleDelete = async (id) => {
  try {
    axios.post(`http://localhost:4001/delete_employee/${id}`)
    setDept(dept.filter((d) => d._id !== id));
    toast.success('Employee deleted successfully!', {
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
    axios.get('http://localhost:4001/view_employe',{headers:{
      'Authorization': `Bearer ${localStorage.getItem('token')}` ,
      
    }
  })
      .then(({ data }) => {
        console.log(data);
        if(data.status==false){
          settoken(true)
          navigator('/')
          
        }
        else{
          setDept(data);

        }

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    
    <div style={{
      position: 'relative',
      left: '20%',
      width: '90%'
  }}>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Employee Name</th>
            <th scope='col'>Employee Number</th>
            <th scope='col'>Image</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {dept.map((dept) => (
            <tr key={dept._id}>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='ms-3'>
                    {dept.Name}
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{dept.E_number}</p>
              </td>
              <td>
                                <img src={dept.image} alt="" height={100} width={100}/>
                </td>
              <td>
                <MDBBadge color='success' pill>
                </MDBBadge>
              </td>
              <td></td>
              <td>
              <Link to={`/home/edit_employee/${dept._id}`}>
                  <Button variant='primary'>Edit</Button>
                </Link>
                <Button variant="primary" type="submit" onClick={() => handleDelete(dept._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
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
