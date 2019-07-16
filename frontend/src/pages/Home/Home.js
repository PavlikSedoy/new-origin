import React, { Component } from 'react'
import axios from 'axios'
// import Styles from '../../App.module.scss'

export class Home extends Component {
  state = {
    titles: {},
    titlesIsLoaded: false,
  }

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/home_titles?order=asc`)
      .then(res => this.setState({
        titles: res.data.map(title => title.title.rendered),
        titlesIsLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {
    const { titles, titlesIsLoaded } = this.state
    console.log(titles)

    if (titlesIsLoaded) {
      return (
        // <div className="transition-container">
        //   <span className={Styles.test}>hello from home</span>
        // </div>
        <>
          {/* <h1>{titles[0].title.rendered}</h1> */}
        </>
      )
    }

    return <h1>Loading...</h1>
  }
}

export default Home