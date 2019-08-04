import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BriefBtn.module.scss'

export default function BriefBtn() {
  return (
    <Link
      to='/'
      className={styles.BriefBtn}
    >
      Заполнить бриф
    </Link>
  )
}
