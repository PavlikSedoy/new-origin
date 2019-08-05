import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './SlideNumbers.module.scss'

export default class SlideNumbers extends Component {
  static propTypes = {
    totalSlides: PropTypes.number.isRequired,
    currentSlide: PropTypes.number.isRequired
  }

  // Active class for slide
  currentSlideStyle = style.SlideNumbers__item + ' ' + style.SlideNumbers__itemActive

  render() {

    // Add 0 before slide number if slide count < 10
    const totalSlides = this.props.totalSlides < 10 ? '0'.concat(this.props.totalSlides) : this.props.totalSlides
    
    // Add 0 before slide number if slide count < 10
    const currentSlide = this.props.currentSlide < 10 ? '0'.concat(this.props.currentSlide) : this.props.currentSlide

    return (
      <div className={style.SlideNumbers}>
        <span id='currentSlide' className={this.currentSlideStyle}>{ currentSlide }</span>
        <span className={style.SlideNumbers__item}>/</span>
        <span id='slideCount' className={style.SlideNumbers__item}>{ totalSlides }</span>
      </div>
    )
  }
}
