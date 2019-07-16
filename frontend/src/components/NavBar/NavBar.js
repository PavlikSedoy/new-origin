import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavBar.module.scss'

export class NavBar extends Component {
  render() {
    return (
      <div className={styles.NavBar}>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/websites">Web Sites</Link>
          <Link to="/error">Error</Link>
        </nav> */}

        Hello from navbar
      </div>
    )
  }
}

export default NavBar
