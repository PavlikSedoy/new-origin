import React, { Component } from 'react'
import HeadScreen from '../../components/HeadScreen/HeadScreen'
import Portfolio from '../../components/Portfolio/Portfolio'
import axios from 'axios'
// import * as ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import styles from './Home.module.scss'

export class Home extends Component {
  state = {
    titles: {},
    titlesIsLoaded: false,
    descriptions: {},
    descriptionsIsLoaded: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

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

  // Function on scroll page
  handleScroll() {
    var tlNavBar = new TimelineMax({})

    // NavBar animation on scroll
    if(window.pageYOffset > 100) {
      tlNavBar.to(".NavBar_NavBar__leftSide__3Q2mz", .5, {height:60})
      tlNavBar.to(".NavBar_NavBar__rightSide__3kkar", .5, {height:60}, '=-.5')
      tlNavBar.to(".NavBar_NavBar__Cqnef", .5, {borderBottom: '1px solid rgba(0,0,0,0.05)'}, '=-1')
    } else {
      tlNavBar.to(".NavBar_NavBar__leftSide__3Q2mz", .5, {height:115})
      tlNavBar.to(".NavBar_NavBar__rightSide__3kkar", .5, {height:115}, '=-.5')
      tlNavBar.to(".NavBar_NavBar__Cqnef", .5, {borderBottom: 'none'}, '=-1')
    }
  }

  render() {
    const { titles, titlesIsLoaded, descriptions, descriptionsIsLoaded } = this.state
    const descAgency = descriptions[0]
    const descAbout = descriptions[1]

    if (titlesIsLoaded && descriptionsIsLoaded) {
      return (
        <>
          <HeadScreen title={titles[0]} descAgency={descAgency} descAbout={descAbout} />
          <Portfolio />
        </>
      )
    }

    return <h1>Loading...</h1>
  }
}

export default Home