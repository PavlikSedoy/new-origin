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
    titles: {
      id: '',
      title: ''
    },
    titlesIsLoaded: false,
    descriptions: {},
    descriptionsIsLoaded: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    axios.get(`/wp-json/wp/v2/home_titles?order=asc`)
      .then(res => this.setState({
        titles: res.data.map(title => title),
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

  // Get current title
  getCurrentTitle = id => {
    let currentTitle = this.state.titles.filter(title => title.id === id)
    // currentTitle = currentTitle.title.rendered
    return currentTitle[0].title.rendered

    console.log(currentTitle[0].title.rendered)
  }

  render() {
    const { titles, titlesIsLoaded, descriptions, descriptionsIsLoaded } = this.state
    const descAgency = descriptions[0]
    const descAbout = descriptions[1]

    // console.log(titles)

    // const homeTitle = titles.find(x => x.id === 6).foo

    // console.log(titles.map(title => title.id))

    // console.log(homeTitle)

    if (titlesIsLoaded && descriptionsIsLoaded) {
      return (
        <>
        {/* {this.getTitleTest(6)} */}
          <HeadScreen title={this.getCurrentTitle(6)} descAgency={descAgency} descAbout={descAbout} />
          <Portfolio />
        </>
      )
    }

    return <h1>Loading...</h1>
  }
}

export default Home