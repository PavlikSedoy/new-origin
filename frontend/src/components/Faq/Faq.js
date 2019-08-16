import React, { Component } from 'react'
import axios from 'axios'
import Container from '../Container/Container'
import PropTypes from 'prop-types'
import styles from './Faq.module.scss'

export default class Faq extends Component {

  state = {
    faq: [],
    faqIsLoaded: false
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  componentDidMount() {
    // Get FAQ items from server
    axios(`/wp-json/wp/v2/faq`)
      .then(res => this.pushFaqItem(res.data))
      .catch(err => console.log(err))
  }

  // Push fetched data to state
  pushFaqItem = faqItems => {
    let faq = []
    let faqItemsCount = 1

    faqItems.map(faqItem => {
      // If it first item - isActive = true
      faqItem.isActive = faqItemsCount === 1 ? true : false
      faq.push(faqItem)
      faqItemsCount++

      return null
    })

    this.setState({
      faq: faq,
      faqIsLoaded: true
    })
  }

  // Click on question
  handleClick = (key) => {
    let faq = this.state.faq
    const activeQuestionIndex = faq.findIndex(item => item.isActive === true)
    // const activeQuestionId = activeQuestion[0].id
    const clickedQuestion = key

    faq[activeQuestionIndex].isActive = false
    faq[clickedQuestion].isActive = true

    this.setState({
      faq: faq
    })
  }

  // Return questions list
  getQuestionsList = () => {
    const standartQuestionClass = styles.Faq__questionItem
    const activeQuestionClass = standartQuestionClass + ' ' + styles.Faq__activeQuestionItem

    if (this.state.faqIsLoaded) {
      return (
        this.state.faq.map((faqItem, key) => (
            <div
              key={key}
              id={key}
              className={faqItem.isActive ? activeQuestionClass : standartQuestionClass}
              onClick={() => this.handleClick(key)}
            >
              <div className={styles.Faq__questionIcon}>
                <span></span>
              </div>
              <div className={styles.Faq__questionText}>{faqItem.title.rendered}</div>
            </div>
          )
        )
      )
    } 
    
    return 'Loading...'
  }

  // Return answers list
  getAnswersList = () => {
    const standartAnswerClass = styles.Faq__answerItem
    const activeAnswerClass = standartAnswerClass + ' ' + styles.Faq__activeAnswerItem

    if (this.state.faqIsLoaded) {
      return (
        this.state.faq.map((faqItem, key) => (
          <div
            key={key}
            className={faqItem.isActive ? activeAnswerClass : standartAnswerClass}
          >
            <h4>{faqItem.title.rendered}</h4>
            <div dangerouslySetInnerHTML={{ __html: faqItem.content.rendered }}></div>
          </div>
        ))
      )
    }
  }

  render() {

    const { title } = this.props

    return (
      <section className={styles.Faq}>
        <div className={styles.Faq__rightBg}></div>
        <Container>
          <div className={styles.Faq__titleWr}>
            <h2 className={styles.Faq__title}>{title}</h2>
          </div>
          <div className={styles.Faq__contentWr}>
            <div className={styles.Faq__answers}>
              { this.getAnswersList() }
            </div>
            <div className={styles.Faq__questions}>
              { this.getQuestionsList() }
            </div>
          </div>
        </Container>
      </section>
    )
  }
}
