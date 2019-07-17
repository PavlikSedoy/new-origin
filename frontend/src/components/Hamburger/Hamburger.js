import React, { Component } from 'react'
import styles from './Hamburger.module.scss'

export default class Hamburger extends Component {
  state = {
    isOpen: false
  }

  render() {
    let hamburgerClass = this.state.isOpen ? ( styles.Hamburger + ' ' + styles.Hamburger__active ) : styles.Hamburger;

    let handleHamburgerClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    return (
      <div className={hamburgerClass} onClick={handleHamburgerClick}>
        <div className={styles.Hamburger__line + ' ' + styles.Hamburger__topLine}>
          <span className={styles.Hamburger__leftDote}></span>
          <span className={styles.Hamburger__centerDote}></span>
          <span className={styles.Hamburger__rightDote}></span>
        </div>
        <div className={styles.Hamburger__line + ' ' + styles.Hamburger__centerLine}>
          <span className={styles.Hamburger__leftDote}></span>
          <span className={styles.Hamburger__centerDote}></span>
          <span className={styles.Hamburger__rightDote}></span>
        </div>
        <div className={styles.Hamburger__line + ' ' + styles.Hamburger__bottomLine}>
          <span className={styles.Hamburger__leftDote}></span>
          <span className={styles.Hamburger__centerDote}></span>
          <span className={styles.Hamburger__rightDote}></span>
        </div>
      </div>
    )
  }
}
