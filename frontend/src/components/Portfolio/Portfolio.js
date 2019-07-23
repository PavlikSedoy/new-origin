import React, { Component } from 'react'
import VisibilitySensor from "react-visibility-sensor";
import { TweenMax, TimelineMax } from 'gsap'
import PropTypes from 'prop-types'
import style from './Portfolio.module.scss'

class Portfolio extends Component {
  render() {
    let visiblePortfolio = (isVisible) => {
      var tlBottomMenu = new TimelineMax({})

      if (isVisible) {
        tlBottomMenu.staggerTo(".HeadNav_HeadNav__item__1DohS", .5, {height:0, opacity:0}, 0.2)
      } else {
        tlBottomMenu.staggerTo(".HeadNav_HeadNav__item__1DohS", .5, {height:100, opacity:1}, 0.2)
      }
    }

    return (
      <VisibilitySensor minTopValue={100} partialVisibility='top'>
        {({isVisible}) =>
          <>
            {visiblePortfolio(isVisible)}

            <section className={style.Portfolio}>
              ddd
            </section>
          </>
        }
      </VisibilitySensor>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;