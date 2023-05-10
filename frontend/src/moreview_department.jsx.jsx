import React, { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import {  Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Userview_dept() {
  const [value, setValue] = useState([]);
const {id}=useParams();

useEffect(()=>{
  axios.get(`http://localhost:4001/viewmore_department/${id}`)
   .then(({ data }) => {
       console.log(data,'data');
       setValue([...value,data])
       console.log(id);
   })
   .catch(error => {
       console.log(error);
   });
},[])

  return (
    <>
    {value.map((item)=>{
    return(
      <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src={item.image}
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">{item.Dept_Name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Year : {item.Year} <span className="mx-2"></span>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4"><div>Description</div>
                  {item.Description}
                </MDBCardText>
                <div className="mb-4 pb-2">
                 
    
                  
                </div>
               
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    {/* <MDBCardText className="mb-1 h5">Department</MDBCardText> */}
                    
                    {/* <Link to={`/home/view_dept/${item._id}`}><MDBCardText className="small text-muted mb-0">{item.Dept_Name}</MDBCardText></Link> */}
                    
                  </div>
                  <div>
                    {/* <MDBCardText className="mb-1 h5">Report to</MDBCardText> */}
                    
                    {/* <MDBCardText className="small text-muted mb-0">{item.Dept_Head_Name}</MDBCardText> */}
                    
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
  })}
    </>
  );
}
