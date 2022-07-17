import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import CentredContainer from './CentredContainer'

export default function Profile() {
  const [error, setError] = useState()
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate("/login", { replace: true })
      // navigate.push('login')
    } catch {
      setError('Failed to log out.')
      // navigate("/login", { replace: true })
    }
  }

  return (
    <CentredContainer>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          <Link to={"/update-profile"} className='btn btn-primary w-100 mt-3'>Update Profile</Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to={"/dashboard"}>Dashboard</Link>

        <Button variant='Link' onClick={handleLogout}>Log Out</Button>
      </div>
    </CentredContainer>
  )
}
