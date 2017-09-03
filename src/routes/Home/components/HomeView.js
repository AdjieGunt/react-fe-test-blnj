import React from 'react'

import './HomeView.scss'
import Profile from './../../../components/Profile/Profile'
import MovieList from './../../../components/MovieList/MovieList'
import RelatedMovies from './../../../components/RelatedMovies/RealatedMovies'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles : {},
      movies : []
    }
  }

  getFilms (films) {
    let Movies = {}
    films.map((film) => {
      fetch(film)
      .then((res) => res.json()
      .then((resJson) => {
        Movies.push(resJson)
      })
      )
    })
    return Movies
  }

  componentWillMount () {

    fetch('https://swapi.co/api/people/1/')
    .then((response) => response.json()
    .then((responseJson) => {
      console.log(responseJson)
      let Movies = this.getFilms(responseJson.films)
      console.log(responseJson.films)
      let newState = responseJson
      this.setState({
        profiles : responseJson,
        movies : Movies
      })
      
    }))
    .catch((error)=> {
      console.log(error)
    })
  }


  shouldComponentUpdate () {
    return true
  }

   render() { 
    return (<div className='main-area'>
      <Profile profiles={this.state.profiles} />
      <div className='columns movies-area'>
        <div className='column is-8'>
          <MovieList movies={this.state.movies} />
        </div>
        <div className='column is-4'>
          <RelatedMovies />
        </div>
      </div>
    </div>
    )
  }
}

export default HomeView
