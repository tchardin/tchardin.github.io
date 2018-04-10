import React from 'react'
import './Navbar.css'
// TODO: Mobile with burger menu -- take from proem.

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a className="navbar-item">
          <img className="navbar-logo" src="https://s3-us-west-2.amazonaws.com/mypf/images/tc_icon.png" />
        </a>
      </div>
      <div className="navbar-right">
        <a className="navbar-item is-first"
          href="https://s3-us-west-2.amazonaws.com/mypf/tchardin_cv.pdf" target="_blank">
          CV
        </a>
        <a className="navbar-item is-middle"
          href="https://github.com/tchardin" target="_blank">
          Github
        </a>
        <a className="navbar-item is-last"
          href="mailto:tdotchardin@gmail.com">
          Email
        </a>
      </div>
    </div>
  )
}

export default Navbar
