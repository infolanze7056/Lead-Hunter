import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DashNav from '../Dashboard/DashNav'
import AdminPenal from './AdminPenal'
import Free from '../Free'

function Admin() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/register')
    }
  });
  
  return (
    <div>
        <DashNav role="Admin" />
        <Free />
        <AdminPenal />
    </div>
  )
}

export default Admin