import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Landing = () => {
  return (
    <div>
      <Header />
      <Link to='/messenger'> Start Messaging Now!</Link>
    </div>
  )
}

export default Landing
