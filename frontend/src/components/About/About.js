import React from 'react'
// import PropTypes from 'prop-types'
import Container from '../Container/Container'
import Dots from '../Dots/Dots'
import styles from './About.module.scss'

function About(props) {
  const { title, firstDesc, secondDesc } = props

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
    </section>
  )
}

// About.propTypes = {

// }

export default About

