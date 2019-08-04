import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container/Container'
import BriefBtn from '../BriefBtn/BriefBtn'
import styles from './FirstBrief.module.scss'

function FirstBrief(props) {
  return (
    <section className={styles.FirstBrief}>
      <Container>
        <h3 className={styles.FirstBrief__title}>{ props.title }</h3>
        <div className={styles.FirstBrief__bgImgWr}>
          <img
            className={styles.FirstBrief__img}
            src="https://picsum.photos/id/590/600/430"
            alt="Описание картинки"
          />
        </div>
      </Container>
      <div className={styles.FirstBrief__btn}>
        <BriefBtn />
      </div>
    </section>
  )
}

FirstBrief.propTypes = {
  title: PropTypes.string.isRequired
}

export default FirstBrief