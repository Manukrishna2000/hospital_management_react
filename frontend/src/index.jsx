import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from 'react-bootstrap/Form';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveDrawer from './home';
import Dept from './department';
import View_Dept from './view_department';
import Edit_Dept from './edit_dept';
import Dhead from './add_dept_head';
import Emp from './add_employees';
import ViewEmp from './view_employees';
import Empview from './employees_view';
import LoginForm from './Main';
import ViewHead from './view_department_heads';
import View_Dept_Head from './viewmore_dept_head';
import ViewDept_user from './user_department';
import Userview_dept from './moreview_department.jsx';
import Empview_link from './user_dept_link';
import View_Dept_Head_link from './link_dept_head';
import Emp_edit from './edit_employees';
import ViewEmp_admin from './admin_view_employees ';
import Admin_ViewHead from './admin_view_department_heads';
import Edit_Dept_heads from './edit_dept_heads';
import Logout from './logout';
import Forgot from './forgot';
import Email from './email';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/main' element={<LoginForm/>}/>
          <Route path='/email' element={<Email/>}/>
          <Route path='view_emp' element={<ViewEmp/>}/>
          <Route path='emp_view/:id' element={<Empview/>}/>
          <Route path='viewmore_dept_head/:id' element={<View_Dept_Head/>}/>
          <Route path='view_heads' element={<ViewHead/>}/>
          <Route path='user_dept' element={<ViewDept_user/>}/>
          <Route path='Userview_dept/:id' element={<Userview_dept/>}/>
          <Route path='Userview_dept_link/:id' element={<Empview_link/>}/>
          <Route path='View_Dept_Head_link/:id' element={<View_Dept_Head_link/>}/>

        </Route>
        <Route path='/home' element={<ResponsiveDrawer />}>
          <Route path='Department' element={<Dept/>}/>
          <Route path='edit_dept/:id' element={<Edit_Dept/>}/>
          <Route path='add_employees' element={<Emp/>}/>
          <Route path='view_emp' element={<ViewEmp/>}/>
          {/* <Route path='emp_view/:id' element={<Empview/>}/> */}
          <Route path='view_dept' element={<View_Dept/>}/>
          <Route path='view_dept/:id' element={<Empview/>}/>
          <Route path='emp_dept_heads' element={<Dhead/>}/>
          <Route path='edit_employee/:id' element={<Emp_edit/>}/>
          <Route path='admin_view_employee' element={<ViewEmp_admin/>}/>
          <Route path='admin_vew_heads' element={<Admin_ViewHead/>}/>
          <Route path='edit_dept_head/:id' element={<Edit_Dept_heads/>}/>
          <Route path='forgot' element={<Forgot/>}/>
          <Route path='logout' element={<Logout/>}/>

          </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
