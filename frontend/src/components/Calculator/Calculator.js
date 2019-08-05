import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Calculator.module.scss'

export default class Calculator extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <section className={style.Calculator}>
        ddd
      </section>
    )
  }
}
