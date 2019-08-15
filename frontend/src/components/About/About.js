import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container/Container'
import Dots from '../Dots/Dots'
import SecondBrief from '../SecondBrief/SecondBrief'
import styles from './About.module.scss'

function About(props) {
  const { title, firstDesc, secondDesc, briefTitle } = props

  return (
    <section className={styles.About}>
      {/* Image background */}
      <div className={styles.About__imageBg}></div>
      <Container>
        <div className={styles.About__contentWr}>
          <h2 className={styles.About__title}>{title}</h2>

          <div className={styles.About__textWr}>
            <Dots>
              {firstDesc}
            </Dots>
            <Dots>
              <div dangerouslySetInnerHTML={{ __html: secondDesc }}></div>
            </Dots>
          </div>
        </div>
      </Container>
      <div className={styles.About__brief}>
        <SecondBrief title={briefTitle}/>
      </div>
    </section>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  firstDesc: PropTypes.string.isRequired,
  secondDesc: PropTypes.string.isRequired,
  briefTitle: PropTypes.string.isRequired,
}

export default About

