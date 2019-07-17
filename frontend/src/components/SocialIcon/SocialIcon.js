import React from 'react'
import PropTypes from 'prop-types'
import styles from './SocialIcon.module.scss'

const SocialIcon = props => {
  return (
    <div className={styles.SocialIcon}>
      <a href={props.icon.acf.social_url} className={styles.SocialIcon__link} target="_blank" rel="noopener noreferrer">
        <div dangerouslySetInnerHTML={{  __html: props.icon.acf.icon_code }} className={styles.SocialIcon__img}></div>
      </a>
    </div>
  )
}

SocialIcon.propTypes = {
  icon: PropTypes.object.isRequired
}

export default SocialIcon
