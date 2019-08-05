import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './SlideArrows.module.scss'

export default class SlideArrows extends Component {
  static propTypes = {
    currentSlide: PropTypes.number,
    totalSlides: PropTypes.number,
    callbackArrowClick: PropTypes.func
  }

  handleClick = event => {
    const el = event.target
    let currentSlideNumber = this.props.currentSlide

    if (el.id === 'prevSlide') {
      if (currentSlideNumber === 1) currentSlideNumber = 1
      else currentSlideNumber = currentSlideNumber - 1
    }
    else if (el.id === 'nextSlide') {
      if (currentSlideNumber === this.props.totalSlides) currentSlideNumber = this.props.totalSlides
      else currentSlideNumber = currentSlideNumber + 1
    }

    this.props.callbackArrowClick(currentSlideNumber)
  }

  render() {
    return (
      <div className={style.SlideArrows}>
        <div className={style.SlideArrows__itemWr}>
          <div
            className={style.SlideArrows__item}
            id="prevSlide"
            onClick={this.handleClick}
          ></div>
        </div>

        <div className={style.SlideArrows__itemWr}>
          <div
            className={style.SlideArrows__item}
            id="nextSlide"
            onClick={this.handleClick}
          ></div>
        </div>
      </div>
    )
  }
}
