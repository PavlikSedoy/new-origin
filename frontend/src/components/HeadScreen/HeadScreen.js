import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from "react-visibility-sensor"
import { TimelineMax } from 'gsap'
import Container from '../Container/Container'
import HeadNav from '../HeadNav/HeadNav'
import Dots from '../Dots/Dots'
import styles from './HeadScreen.module.scss'

const visiblePortfolio = isVisible => {
  var tlBottomMenu = new TimelineMax({})

  if (!isVisible) tlBottomMenu.staggerTo(".HeadNav_HeadNav__item__1DohS", .5, {height:0, opacity:0}, 0.2)
  else tlBottomMenu.staggerTo(".HeadNav_HeadNav__item__1DohS", .5, {height:100, opacity:1}, 0.2)
}

const HeadScreen = (props) => {
  const { title, descAgency, descAbout } = props

  return (
    <VisibilitySensor
        // minTopValue={100}
        // partialVisibility='top'
        onChange={visiblePortfolio}
        // partialVisibility={true}
    >
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
    </VisibilitySensor>
  )
}

HeadScreen.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeadScreen
