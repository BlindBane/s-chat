import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  let backBtn
  if (props.showMessageBox) {
    backBtn = (
      <h6>
        <Link to='/messenger'>
          Back
        </Link>
      </h6>
    )
  } else {
    backBtn = ''
  }
  return (
    <div>
      <Link to='/'>
        <h3>/chat</h3>
      </Link>
      {backBtn}
    </div>
  )
}

Header.defaultProps = {
  showMessageBox: false
}

export default Header
