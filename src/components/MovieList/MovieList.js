import React from 'react'
import './MoveList.scss'
import play from './assets/play.gif'
import RelatedMovies from './../RelatedMovies/RealatedMovies'
import PropTypes from 'prop-types'

class MovieList extends React.Component {

  renderMovieItem = (movies, index) => {
    console.log(movies)
    const style = index % 2 === 0 ? 'is-purple' : 'is-orange'
    return (
        <div className='column is-3' key={`movie-${index}`}>
          <div className='card movie-item'>
            <div className={`card-header ${style}`}>
              <div className='thumb'>
                <img src={play} alt='play' />
              </div>
            </div>
            <div className='card-content'>
              
              <div className='movie-meta'>
                <h3><b>{movies.title}</b></h3>
                <span><p>Director:<br />{movies.director}</p></span>
                <span><p>Realese:<br />{movies.release_date}</p></span>
              </div>
            </div>
          </div>
        </div>
    )
  }
  
  render () {
    console.log(this.props.movies)
    const movies  = this.props.movies
    const name = this.props.name.split(' ')[1]
    return (
      <div className="columns">
        <div className="column is-8">
          <div className="columns">
            <div className="column is-10">
              <h1 className="is-red"><b>{name} Movie's</b></h1>
            </div>
            <div className="column is-2">
              <a href="#" className="link-more level-right">See more</a>
            </div>
          </div>
          <div className="columns">
            { movies.map((movie, index) => {
              // console.log(movies.length)
              if(index >= 0 && index <= 3){
                return (
                  this.renderMovieItem(movie, index)
                )
              }
            })}
          </div>
        </div>
        <div className="column is-4">
          { movies.map((movie, index) => {
              // console.log(movies.length)
            if (index === movies.length - 1) {
              return (
                <RelatedMovies movies={movie} />
              )  
            }
              // this.renderMovieItem(movie, index)
          })}
        </div>
      </div>
    )
  }
}

MovieList.PropTypes = {
  movies : PropTypes.object
}

export default MovieList
