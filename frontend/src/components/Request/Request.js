import React, { Component } from 'react'
import Container from '../Container/Container'
// import PropTypes from 'prop-types'
import styles from './Request.module.scss'

class Request extends Component {
  render() {
    return (
      <section className={styles.Request}>
        <div className={styles.Request__bgWr}></div>
        <Container>
          <div className={styles.Request__contentWr}>
            <div className={styles.Request__titleWr}>
              <h2 className={styles.Request__title}>Давайте сделаем что-то крутое вместе</h2>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

// Request.propTypes = {

// };

export default Request