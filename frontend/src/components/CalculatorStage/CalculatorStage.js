import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './CalculatorStage.module.scss'

export default class CalculatorStage extends Component {
  static propTypes = {
    stage: PropTypes.string.isRequired,
    stageId: PropTypes.number.isRequired
  }

  render() {

    const { stage, stageId } = this.props
    const stageCount = stageId < 10 ? '0'.concat(stageId) : stageId

    return (
      <div className={style.CalculatorStage}>
        <div className={style.CalculatorStage__countStagesSide}>
          <div className={style.CalculatorStage__stageNumber}>{ stageCount }</div>
        </div>
        <div className={style.CalculatorStage__contentSide}>
          <div className={style.CalculatorStage__stageTitle}>{ stage }</div>
          <div className={style.CalculatorStage__answerWr}>
            <div className={style.CalculatorStage__answer}>Сайты под ключ</div>
            <div className={style.CalculatorStage__answer}>Графический дизайн</div>
            <div className={style.CalculatorStage__answer}>Продвижение</div>
          </div>
        </div>
      </div>
    )
  }
}
