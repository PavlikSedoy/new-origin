import React, { Component } from 'react'
import HeadScreen from '../../components/HeadScreen/HeadScreen'
import axios from 'axios'
import styles from './Home.module.scss'

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

    if (titlesIsLoaded) {
      return (
        // <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
        //   <h1>{titles[0]}</h1>
        // </div>
        <HeadScreen title={titles[0]} />
      )
    }

    return <h1>Loading...</h1>
  }
}

export default Home