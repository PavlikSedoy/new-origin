import React from 'react'
import Container from '../Container/Container'
import BriefBtn from '../BriefBtn/BriefBtn'
// import PropTypes from 'prop-types'
import styles from './SecondBrief.module.scss'

function SecondBrief(props) {
  return (
    <div className={styles.SecondBrief}>
      <Container>
        <div className={styles.SecondBrief__text}>
          Давайте приступим к созданию идеального сайта для Ваших целей
        </div>
      </Container>
      <div className={styles.SecondBrief__btn}>
        <BriefBtn />
      </div>
    </div>
  )
}

// SecondBrief.propTypes = {

// }

export default SecondBrief

