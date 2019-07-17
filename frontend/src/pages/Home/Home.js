import React, { Component } from 'react'
import HeadScreen from '../../components/HeadScreen/HeadScreen'
import axios from 'axios'
import styles from './Home.module.scss'

export class Home extends Component {
  state = {
    titles: {},
    titlesIsLoaded: false,
    descriptions: {},
    descriptionsIsLoaded: false
  }

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/home_titles?order=asc`)
      .then(res => this.setState({
        titles: res.data.map(title => title.title.rendered),
        titlesIsLoaded: true
      }))
      .catch(err => console.log(err))

    axios.get(`/wp-json/wp/v2/title-descriptions?order=asc`)
      .then(res => this.setState({
        descriptions: res.data.map(desc => desc.acf.title_description_text),
        descriptionsIsLoaded: true
      }))
      .catch(err => console.log(err))
  }

  // descAgency = this.state.descriptions.map(desc => desc.id)

  render() {
    const { titles, titlesIsLoaded, descriptions, descriptionsIsLoaded } = this.state
    const descAgency = descriptions[0]
    const descAbout = descriptions[1]

    if (titlesIsLoaded && descriptionsIsLoaded) {
      return (
        <HeadScreen title={titles[0]} descAgency={descAgency} descAbout={descAbout} />
      )
    }

    return <h1>Loading...</h1>
  }
}

export default Home