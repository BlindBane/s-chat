import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div>
      <Link to='/'>
        <h3>/chat</h3>
      </Link>
    </div>
  )
}

export default Header
