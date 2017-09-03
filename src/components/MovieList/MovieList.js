import React from 'react'
import './MoveList.scss'
import play from './assets/play.gif'

class MovieList extends React.Component {

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
        <Movies moviesArr={this.props.movies} />
      </div>
    )
  }
}

class Movies extends React.Component {
  render () {
    console.log(this.props.moviesArr)
    let Movie = this.props.moviesArr
    let movielist = Movie.map((m, i) => <MovieListItem m={m} key={i} bg={ i%2==0 ? 'is-purple' : 'is-orange' } />)
    console.log(Movie)
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
