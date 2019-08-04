import React, { Component } from 'react'
import axios from 'axios'
import Container from '../Container/Container'
import Dots from '../Dots/Dots'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PropTypes from 'prop-types'
import style from './Portfolio.module.scss'

class Portfolio extends Component {

  state = {
    firstRowProjects: {},
    secondRowProjects: {},
    projectsIsLoaded: false
  }

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/projects?_embed`)
      .then(res => this.getProjectToHome(res.data))
      .catch(err => console.log(err))
  }

  // Get projects from backend in two param
  getProjectToHome = projects => {
    const homePageProject = projects.filter(project => project.acf.project_show_in_home)
    const projectInColl = 3
    const firstRowProjects = homePageProject.filter((e,i) => !(i%2)).slice(0, projectInColl)
    const secondRowProjects = homePageProject.filter((e,i) => (i%2)).slice(0, projectInColl)

    this.setState({
      firstRowProjects: firstRowProjects,
      secondRowProjects: secondRowProjects,
      projectsIsLoaded: true
    })
  }

  // Show projects
  showProjects = ( isLoaded, firstRowProjects, secondRowProjects ) => {
    if(isLoaded) {
      return (
        <div className={style.Portfolio__portfolioWr}>
          <div className={style.Portfolio__portfolioRow}>
            { firstRowProjects.map( project => (
              <PortfolioItem key={project.id} project={project} />
            )) }
          </div>
          <div className={style.Portfolio__portfolioRow}>
            { secondRowProjects.map( project => (
              <PortfolioItem key={project.id} project={project} />
            )) }
          </div>
        </div>
      )
    }

    return 'Loading...'
  }

  render() {
    const { title, firstDesc, secondDesc } = this.props
    const { projectsIsLoaded, firstRowProjects, secondRowProjects } = this.state

    return (
      <section className={style.Portfolio}>
        <Container>
          <div className={style.Portfolio__wrapper}>
            <div className={style.Portfolio__infoCol}>
              <h2 className={style.Portfolio__title}>{ title }</h2>

              <div className={style.Portfolio__screenDesc}>
                <Dots>
                  <p className={style.Portfolio__descP}>{ firstDesc }</p>
                </Dots>
                <Dots>
                  <p className={style.Portfolio__descP}>{ secondDesc }</p>
                </Dots>
              </div>
            </div>
            {/* Portfolio section rows */}
            { this.showProjects(projectsIsLoaded, firstRowProjects, secondRowProjects) }
          </div>
        </Container>
      </section>
    );
  }
}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  firstDesc: PropTypes.string.isRequired,
  secondDesc: PropTypes.string.isRequired
};

export default Portfolio;