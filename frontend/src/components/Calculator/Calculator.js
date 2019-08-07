import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import Container from '../Container/Container'
import Dots from '../Dots/Dots'
import CalculatorStage from '../CalculatorStage/CalculatorStage'
import style from './Calculator.module.scss'

export default class Calculator extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    stages: [],
    stagesIsLoaded: false
  }

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/calculator_stages?order=asc`)
      .then(res => this.pushStages(res.data))
      .catch(err => console.log(err))
  }

  // Push calculator stages in state
  pushStages = stages => {
    this.setState({
      stages: stages.map(stages => stages.title.rendered),
      stagesIsLoaded: true
    })
  }

  // Get calculator
  getCalculator = stages => {
    let stageId = 0

    if (this.state.stagesIsLoaded) {
      stageId = 1

      return (
        <div className={style.Calculator__calcWr} id="calculatorWr">
              <CalculatorStage
                // stage={stage}
                stageId={1}
              />
        </div>
      )
    }

    return 'Loading...'
  }

  render() {

    const { stages } = this.state

    return (
      <section className={style.Calculator}>
        <Container>
          <div className={style.Calculator__sectionInfo}>
            <h2 className={style.Calculator__title}>Калькулятор стоимости</h2>

            <Dots>
              <p className={style.Calculator__description}>Воспользуйтесь нашим калькулятором, чтобы понять как мы составляем цену.</p>
            </Dots>
            <Dots>
              <p className={style.Calculator__description}>Просчитав нужную Вам услугу, Вы поймете сколько стоит каждый этап работы.</p>
            </Dots>
          </div>

          { this.getCalculator(stages) }
        </Container>
      </section>
    )
  }
}
