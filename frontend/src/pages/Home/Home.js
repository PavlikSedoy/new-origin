import React, { Component } from 'react'
import HeadScreen from '../../components/HeadScreen/HeadScreen'
import Portfolio from '../../components/Portfolio/Portfolio'
import FirstBrief from '../../components/FirstBrief/FirstBrief'
import Services from '../../components/Services/Services'
import axios from 'axios'
// import * as ScrollMagic from 'scrollmagic'
import { TimelineMax } from 'gsap'
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import './Home.module.scss'

export class Home extends Component {
  state = {
    titles: {},
    titlesIsLoaded: false,
    descriptions: {},
    descriptionsIsLoaded: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    // Get Tittles
    axios.get(`/wp-json/wp/v2/home_titles?order=asc`)
      .then(res => this.setState({
        titles: res.data.map(title => title),
        titlesIsLoaded: true
      }))
      .catch(err => console.log(err))

    // Get descriptions
    axios.get(`/wp-json/wp/v2/title-descriptions?order=asc`)
      .then(res => this.setState({
        descriptions: res.data.map(desc => desc),
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

  // Get current title
  getCurrentTitle = id => {
    const currentTitle = this.state.titles.filter(desc => desc.id === id)
    return currentTitle[0].title.rendered
  }

  // Get current description
  getCurrentDesc = id => {
    const currentDesc = this.state.descriptions.filter(title => title.id === id)
    return currentDesc[0].acf.title_description_text
  }

  render() {
    const { titlesIsLoaded, descriptionsIsLoaded } = this.state

    if (titlesIsLoaded && descriptionsIsLoaded) {
      return (
        <>
          <HeadScreen
            title={this.getCurrentTitle(6)}
            descAgency={this.getCurrentDesc(35)}
            descAbout={this.getCurrentDesc(36)}
          />
          <Portfolio
            title={this.getCurrentTitle(7)}
            firstDesc={this.getCurrentDesc(37)}
            secondDesc={this.getCurrentDesc(38)}
          />
          <FirstBrief title={this.getCurrentTitle(61)} />
          <Services title={this.getCurrentTitle(8)} />
        </>
      )
    }

    return <h1>Loading...</h1>
  }
}

export default Home