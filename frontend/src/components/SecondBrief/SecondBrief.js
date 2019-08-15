import React from 'react'
import Container from '../Container/Container'
import BriefBtn from '../BriefBtn/BriefBtn'
import PropTypes from 'prop-types'
import styles from './SecondBrief.module.scss'

function SecondBrief(props) {
  return (
    <div className={styles.SecondBrief}>
      <Container>
        <div className={styles.SecondBrief__text}>
          {props.title}
        </div>
      </Container>
      <div className={styles.SecondBrief__btn}>
        <BriefBtn />
      </div>
    </div>
  )
}

SecondBrief.propTypes = {
  title: PropTypes.string.isRequired
}

export default SecondBrief

