import React, { useState } from 'react';
import axios from 'axios';
import Home from './home';
import { Link, useNavigate, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import LoginForm from './Main';
export default function App() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginsuccess, setloginsuccess] = useState(false);
  const[invalid,setinvalid]=useState(false);
  const navigator = useNavigate()
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4001/login', { username, password }).then(({data})=>{
    console.log(data); 
    if(data.success) {
      console.log(data.status);
      navigator('/home')
    }
    else{
      setinvalid(true)
      console.log(data.message);
    }

      
    })
    
  };
  return (
    
    <div>
  
   <Navbar bg="dark" className='navbar' variant="dark">
        <Container>
          <Navbar.Brand href="/">Hospital Management</Navbar.Brand>
          <Nav className="me-auto">
           
           <Nav.Link>   <Link className='nav' to={'/main'}>Login</Link>
</Nav.Link>

           
            <Nav.Link>   <Link className='nav' to={'/view_emp'}>Employee</Link>
</Nav.Link>
         
            <Nav.Link>   <Link className='nav' to={'/view_heads'}>Departments Heads</Link>
</Nav.Link>
<Nav.Link>
<Link className='nav' to={'/user_dept'}>Departments </Link>
</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>

    <div className='image'>
    </div>
    </div>
      
  );
}
