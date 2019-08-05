import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './SlideNumbers.module.scss'

export default class SlideNumbers extends Component {
  static propTypes = {
    prop: PropTypes
  }

  currentSlideStyle = style.SlideNumbers__item + ' ' + style.SlideNumbers__itemActive;

  render() {
    return (
      <div className={style.SlideNumbers}>
        <span id='currentSlide' className={this.currentSlideStyle}>01</span>
        <span className={style.SlideNumbers__item}>/</span>
        <span id='slideCount' className={style.SlideNumbers__item}>03</span>
      </div>
    )
  }
}
