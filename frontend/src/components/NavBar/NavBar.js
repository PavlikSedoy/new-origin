import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import SocialIcon from '../SocialIcon/SocialIcon'
import Hamburger from '../Hamburger/Hamburger'
import styles from './NavBar.module.scss'
import Logo from '../../images/logo.svg'

export class NavBar extends Component {
  state = {
    headNumber: '',
    numberIsLoaded: false,
    social: {},
    socialIsLoaded: false,
    firstButton: '',
    buttonIsLoaded: false
  }

  componentDidMount() {
    // Load Phone Number
    axios.get(`/wp-json/wp/v2/phone-numbers/13`)
      .then(res => this.setState({
        headNumber: res.data.title.rendered,
        numberIsLoaded: true
      }))
      .catch(err => console.log(err))
    
    // Load social icons
    axios.get(`/wp-json/wp/v2/social-icon/`)
      .then(res => this.setState({
        social: res.data,
        socialIsLoaded: true
      }))
      .catch(err => console.log(err))

    // Load button
    axios.get(`/wp-json/wp/v2/buttons/24`)
      .then(res => this.setState({
        firstButton: res.data.acf.vue_title,
        buttonIsLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { headNumber, numberIsLoaded, social, socialIsLoaded, firstButton, buttonIsLoaded } = this.state

    // console.log(social)

    if (numberIsLoaded && socialIsLoaded && buttonIsLoaded) {
      return (
        <div className={styles.NavBar}>
          <Container>
            <div className={styles.NavBar__container}>
              <div className={styles.NavBar__leftSide}>
                {/* Logo */}
                <Link to="/" className={styles.NavBar__logo_link}>
                  <img src={Logo} alt="Origin Web Agency" className={styles.NavBar__logo} />
                </Link>
                <div className={styles.NavBar__phoneAndSocial}>
                  {/* Phone number */}
                  <div className={styles.NavBar__phone}>
                    <a href={"tel:" + headNumber} className={styles.NavBar__phoneLink}>{headNumber}</a>
                  </div>
                  {/* Social icons */}
                  <div className={styles.NavBar__social}>
                    { social.map(social => <SocialIcon key={social.id} icon={social} />) }
                  </div>
                </div>
              </div>
              <div className={styles.NavBar__rightSide}>
                {/* Consultation */}
                <div className={styles.NavBar__consultation}>
                  <button className={styles.NavBar__consultation_btn}>{firstButton}</button>
                </div>
                {/* Hamburger */}
                <div className={styles.NavBar__hamburger}>
                  <Hamburger />
                </div>
              </div>
            </div>
          </Container>
        </div>
      )
    }

    return null
  }
}

export default NavBar
