import React from 'react'

import './HomeView.scss'
import Profile from './../../../components/Profile/Profile'
import MovieList from './../../../components/MovieList/MovieList'
import RelatedMovies from './../../../components/RelatedMovies/RealatedMovies'
import Loader from './../../../components/Loader/Loader'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles : {},
      loading : true
    }
  }

  getFilms (films) {
    // const urls = films.map(url => fetch(url))

    // return Promise.all(urls).then(result => result)

    let movies = Promise.all(films.map(url =>
      fetch(url)
      .then(resp => resp.json())
    ))
    .then(texts => {
      console.log(texts)
      return texts
    })
    return movies
  }

  componentWillMount () {
    fetch('https://swapi.co/api/people/1/')
    .then((response) =>  {
      const profiles = response.json()
      // console.log(profiles)
      return profiles
    })
    .catch((error) => {
      // console.log(error)
      return []
    })
    .then((profiles) => {
      this.getFilms(profiles.films).then(res => {
        console.log(res)
        profiles.films = res
        this.setState({
          profiles : profiles,
          loading : false
        })
      })
    })
  }


  shouldComponentUpdate () {
    return true
  }

  render () {
    console.log(this.state)

    // console.log(this.state.profiles)
    if (this.state.loading) {
      return <Loader />
    }

    const { profiles, profiles: { films } } = this.state
    console.log(films)
    return (
      <div className='main-area'>
        <Profile profiles={ profiles } />
      <div className='movies-area'>
          <MovieList movies={films} name={profiles.name}/>
      </div>
    </div>
    )
  }
}

export default HomeView
