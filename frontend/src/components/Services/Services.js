import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Container from '../Container/Container'
import Dots from '../Dots/Dots'
import SlideNumbers from '../SlideNumbers/SlideNumbers'
import SlideArrows from '../SlideArrows/SlideArrows'
import style from './Services.module.scss'

export default class Services extends Component {

  state = {
    slides: [],
    currentSlide: 1,
    slidesIsLoaded: false
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/services_slides?_embed&order=asc`)
      .then(res => this.getSlides(res))
      .catch(err => console.log(err))
  }

  // Push slides in state
  getSlides = (res) => {
    const slides = res.data

    this.setState({
      slides: slides,
      slidesIsLoaded: true
    })
  }

  // Total slides number
  getSlidesCount = slidesArray => slidesArray.length 

  // Return slide
  slide = (slide, key) => {

    const slideNumber = key + 1
    const currentSlide = this.state.currentSlide
    const slideClass = currentSlide === slideNumber ? style.Slider__slide + ' ' + style.Slider__slideActive : style.Slider__slide

    if (this.state.slidesIsLoaded) return (
      <div
        className={slideClass}
        key={key}
        id={'servicesSlide' + slideNumber}
      >
        <div className={style.Slider__imgWr}>
          <img
            src={ slide._embedded['wp:featuredmedia']['0'].source_url }
            alt={ slide._embedded['wp:featuredmedia']['0'].alt_text }
          />
        </div>
        <div className={style.Slider__contentAndControls}>
          <div className={style.Slider__contentWr}>
            <div className={style.Slider__content}>
              <h3 className={style.Slider__slideTitle}>{ slide.title.rendered }</h3>
              <Dots><p className={style.Slider__slideDesc}>{ slide.acf.services_slider_first_desc }</p></Dots>
              <Dots><p className={style.Slider__slideDesc}>{ slide.acf.services_slider_second_desc }</p></Dots>
              <Link
                to={'/' + slide.acf.services_slider_link + '/'}
                className={style.Slider__link}
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    )

    return 'Loading...'
  }

  // Return slider controls
  getSliderControls = ( isLoaded, slides, currentSlide ) => {
    if (isLoaded) return (
      <SlideNumbers
        totalSlides={ this.getSlidesCount(slides)}
        currentSlide={ currentSlide }
      />
    )

    return 'Loading...'
  }

  // Arrow click from children
  callbackArrowClick = currentSlideNumber => {
    this.setState({
      currentSlide: currentSlideNumber
    })
  }

  render() {

    const { slides, currentSlide, slidesIsLoaded } = this.state
    const { title } = this.props

    return (
      <section className={style.Services}>
        <Container>
          <h2 className={style.Services__title}>{ title }</h2>
        </Container>
        <div className={style.Services__slider}>
          <div className={style.Slider}>
            <div className={style.Slider__container}>

              { slides.map((slide, key) => this.slide(slide, key) ) }

              <div className={style.Slider__controlsWr}>
                    <div className={style.Slider__slideNumbers}>
                      { this.getSliderControls(slidesIsLoaded, slides, currentSlide) }
                    </div>
                    <div className={style.Slider__arrows}>
                      <SlideArrows
                        currentSlide={currentSlide}
                        totalSlides={ this.getSlidesCount(slides) }
                        callbackArrowClick={this.callbackArrowClick}
                      />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
