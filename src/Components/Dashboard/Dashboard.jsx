import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DashNav from './DashNav';
import Leads from './Leads/Leads';
import Free from '../Free';

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/register')
    }
  });

  return (
    <div>
        <DashNav />
        <Free />
        <Leads />
    </div>
  )
}

export default Dashboard