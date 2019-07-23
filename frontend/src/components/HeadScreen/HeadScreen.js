import React from 'react'
import Container from '../Container/Container'
import HeadNav from '../HeadNav/HeadNav'
import Dots from '../Dots/Dots'
import PropTypes from 'prop-types'
import styles from './HeadScreen.module.scss'

const HeadScreen = (props) => {
  const { title, descAgency, descAbout } = props

  return (
    <section className={styles.HeadScreen} id="homeScreen">
      <Container>
        <div className={styles.HeadScreen__content}>
          <div className={styles.HeadScreen__titleWr}>
            <h1 className={styles.HeadScreen__title}>{ title }</h1>
          </div>

          <div className={styles.HeadScreen__desc}>
            <Dots>
              <h5 className={styles.HeadScreen__agencyName}>{descAgency}</h5>
              <div className={styles.HeadScreen__headDesc}>{descAbout}</div>
            </Dots>
          </div>
        </div>
      </Container>
      <HeadNav />
    </section>
  )
}

HeadScreen.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeadScreen
