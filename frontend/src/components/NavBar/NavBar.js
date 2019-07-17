import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container/Container'

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

        <Container>
          Hello from navbar
        </Container>
      </div>
    )
  }
}

export default NavBar
