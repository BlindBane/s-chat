import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  let backBtn
  if (props.backToMessenger) {
    backBtn = (
      <h6>
        <Link to='/messenger'>
          Back
        </Link>
      </h6>
    )
  } else if (props.backToLanding) {
    backBtn = (
      <h6>
        <Link to='/'>
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
      <Link to='/user/signin'>SignIn</Link> / SignUp
      {backBtn}
    </div>
  )
}

Header.defaultProps = {
  showMessageBox: false
}

export default Header
