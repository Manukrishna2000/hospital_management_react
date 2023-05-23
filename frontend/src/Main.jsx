import React, { useState } from 'react';
import axios from 'axios';
import Home from './home';
import { useNavigate} from 'react-router-dom'
import ViewEmp from './view_employees';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function LoginForm() {
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
      console.log(data.data.token);
      localStorage.setItem('token',data.data.token)
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
 
 <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Admin 
          
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            autoComplete="Username"
            autoFocus
            id="username"
        name='username'
        type="username"
        value={username}
        onChange={(event) => setEmail(event.target.value)}
        
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            autoComplete="current-password"
            id="password"
            type="password"
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* <Link to="/email">forgot password</Link> */}
          {invalid &&
<h6><font style={{color:'red',align:'center'}}>invalid username or password</font></h6>
}
        </Box>
      </Box>
    </Container>
    

 
    </div>
    
  );
}
