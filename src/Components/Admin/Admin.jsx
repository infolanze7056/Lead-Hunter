import React from 'react'
import DashNav from '../Dashboard/DashNav'
import AdminPenal from './AdminPenal'
import Free from '../Free'

function Admin() {
  return (
    <div>
        <DashNav />
        <Free />
        <AdminPenal />
    </div>
  )
}

export default Admin