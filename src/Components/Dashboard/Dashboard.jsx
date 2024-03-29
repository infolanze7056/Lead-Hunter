import React from 'react';
import DashNav from './DashNav';
import Leads from './Leads/Leads';
import Free from '../Free';

function Dashboard() {
  
  return (
    <div>
        <DashNav />
        <Free />
        <Leads />
    </div>
  )
}

export default Dashboard