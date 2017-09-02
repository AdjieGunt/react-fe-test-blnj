import React from 'react'

import './HomeView.scss'
import Profile from './../../../components/Profile/Profile'
import MovieList from './../../../components/MovieList/MovieList'
import RelatedMovies from './../../../components/RelatedMovies/RealatedMovies'

export const HomeView = () => (
  <div className='main-area'>
    <Profile />
    <div className='columns movies-area'>
      <div className='column is-8'>
        <MovieList />
      </div>
      <div className='column is-4'>
        <RelatedMovies />
      </div>
    </div>
  </div>
)

export default HomeView
