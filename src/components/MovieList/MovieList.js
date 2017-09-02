import React from 'react'
import './MoveList.scss'
import play from './assets/play.gif'

class MovieList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies : [
        {
          'title': 'The Empire Strikes Back',
          'episode_id': 5,
          'opening_crawl': 'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
          'director': 'Irvin Kershner',
          'producer': 'Gary Kurtz, Rick McCallum',
          'release_date': '1980-05-17',
        },
        {
          'title': 'Return of the Jedi',
          'episode_id': 6,
          'opening_crawl': 'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
          'director': 'Richard Marquand',
          'producer': 'Howard G. Kazanjian, George Lucas, Rick McCallum',
          'release_date': '1983-05-25',
        },
        {
          'title': 'Return of the Jedi',
          'episode_id': 6,
          'opening_crawl': 'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
          'director': 'Richard Marquand',
          'producer': 'Howard G. Kazanjian, George Lucas, Rick McCallum',
          'release_date': '1983-05-25',
        },
        {
          'title': 'Return of the Jedi',
          'episode_id': 6,
          'opening_crawl': 'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
          'director': 'Richard Marquand',
          'producer': 'Howard G. Kazanjian, George Lucas, Rick McCallum',
          'release_date': '1983-05-25',
        }
      ]
    }
  }

  render () {
    return (
      <div className='movie-list'>
        <div className='columns is-mobile'>
          <div className='column is-half'>
            <h1 className='subtitle is-red'><b>Skywalker Movie's</b></h1>
          </div>
          <div className='column is-half'>
            <h3 className='link-more level-right'>See more</h3>
          </div>
        </div>
        <Movies movies={this.state.movies} />
      </div>
    )
  }
}

class Movies extends React.Component {
  render () {
    console.log('hi from movies comp')
    let Movie = this.props.movies
    const movielist = Movie.map((m, i) => <MovieListItem m={m} key={i} bg={ i%2==0 ? 'is-purple' : 'is-orange' } />)
    console.log(movielist)
    return (
      <div className='columns is-mobile'> { movielist } </div>
    )
  }
}

class MovieListItem extends React.Component {

  trimTitle = (title) => {
    if (title.length >= 17) {
      return title.substring(0, 17) + ' ...'
    } else {
      return title
    }
  }

  render () {
    return (
      <div className='is-6'>
        <div className='card movie-item'>
          <div className={`card-header ${this.props.bg}`}>
            <div className='thumb'>
              <img src={play} alt='play' />
            </div>
          </div>
          <div className='card-content'>
            
            <div className='movie-meta'>
              <h3><b>{this.trimTitle(this.props.m.title)}</b></h3>
              <span><p>Director:<br />{this.props.m.director}</p></span>
              <span><p>Realese:<br />{this.props.m.release_date}</p></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieList
