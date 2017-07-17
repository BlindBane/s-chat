import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='/messenger'> Start Messaging Now!</Link>
    </div>
  )
}

export default Landing
