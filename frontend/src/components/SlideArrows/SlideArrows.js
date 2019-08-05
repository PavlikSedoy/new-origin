import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './SlideArrows.module.scss'

export default class SlideArrows extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={style.SlideArrows}>
        <div className={style.SlideArrows__itemWr}>
          <div className={style.SlideArrows__item} id="prevSlide"></div>
        </div>

        <div className={style.SlideArrows__itemWr}>
          <div className={style.SlideArrows__item} id="nextSlide"></div>
        </div>
      </div>
    )
  }
}
