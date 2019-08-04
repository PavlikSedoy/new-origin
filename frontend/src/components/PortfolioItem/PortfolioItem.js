import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PortfolioItem.module.scss'

export default class PortfolioItem extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const { project }  = this.props
    console.log(project)

    return (
      <article className={styles.PortfolioItem}>
        <Link to='/'>
          <div className={styles.PortfolioItem__imgWr}>
            <img
              className={styles.PortfolioItem__img}
              src={ project._embedded['wp:featuredmedia']['0'].source_url }
              alt={ project._embedded['wp:featuredmedia']['0'].alt_text }
            />
            <div className={styles.PortfolioItem__imgBgDarken}></div>
            <div className={styles.PortfolioItem__imgLogo}>
              <img src={ project.acf.project_logo } alt="Project Logo" />
            </div>
          </div>
          <h4 className={styles.PortfolioItem__projectName}>{ project.title.rendered }</h4>
          <p className={styles.PortfolioItem__shordProjectDesc}>{ project.acf.project_short_description }</p>
        </Link>
      </article>
    )
  }
}
