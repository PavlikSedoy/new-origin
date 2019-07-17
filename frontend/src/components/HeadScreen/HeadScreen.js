import React from 'react'
import HeadNav from '../HeadNav/HeadNav'
import styles from './HeadScreen.module.scss'

const HeadScreen = (props) => {
  return (
    <div className={styles.HeadScreen}>
      <HeadNav />
    </div>
  )
}

export default HeadScreen
