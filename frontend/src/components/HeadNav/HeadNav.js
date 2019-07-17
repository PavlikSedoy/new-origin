import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './HeadNav.module.scss'

export default class HeadNav extends Component {
  state = {
    navItems: {},
    isLoaded: false
  }

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/head-nav-items/`)
      .then(res => this.setState({
        navItems: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { navItems, isLoaded } = this.state

    if(isLoaded) {
      return (
        <div className={styles.HeadNav}>
          <nav className={styles.HeadNav__wr}>
            { navItems.map(navItem => (
              <Link key={navItem.id} to={navItem.acf.head_nav_link} className={styles.HeadNav__item}>
                { navItem.acf.head_nav_name_title }
              </Link>
            )) }
          </nav>
        </div>
      )
    }

    return null
  }
}

