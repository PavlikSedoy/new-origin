import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Container from '../Container/Container'
import Dots from '../Dots/Dots'
import SlideNumbers from '../SlideNumbers/SlideNumbers'
import SlideArrows from '../SlideArrows/SlideArrows'
import style from './Services.module.scss'

export default class Services extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <section className={style.Services}>
        <Container>
          <h2 className={style.Services__title}>Услуги</h2>
        </Container>
        <div className={style.Services__slider}>
          <div className={style.Slider}>
            <div className={style.Slider__container}>
              <div className={style.Slider__slide + ' ' + style.Slider__slideActive}>
                <div className={style.Slider__imgWr}>
                  <img src="https://picsum.photos/id/1/720/600" alt="Alt for slider"/>
                </div>
                <div className={style.Slider__contentAndControls}>
                  <div className={style.Slider__contentWr}>
                    <div className={style.Slider__content}>
                      <h3 className={style.Slider__slideTitle}>Сайты под ключ</h3>
                      <Dots><p className={style.Slider__slideDesc}>Разработка сайта с нуля под любые задачи.</p></Dots>
                      <Dots><p className={style.Slider__slideDesc}>Продуманая структура, уникальный дизайн и функционал любой сложности </p></Dots>
                      <Link
                        to='/'
                        className={style.Slider__link}
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.Slider__controlsWr}>
                    <div className={style.Slider__slideNumbers}>
                      <SlideNumbers />
                    </div>
                    <div className={style.Slider__arrows}>
                      <SlideArrows />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
