import React from 'react'
import './RelatedMovies.scss'
import PropTypes from 'prop-types'

class RelatedMovies extends React.Component {


  render () {
    const { movies } = this.props
    console.log(movies)
    return (
      <div className='column  related-movies'>
        <div className='columns is-mobile'>
          <h1 className='is-red'>Related Another Movie's</h1>
        </div>
        <div className='card'>
          <div className='card-header'>
            <table>
              <tbody>
                <tr>
                  <td colSpan='2'><b> { movies.title } </b> </td>
                </tr>
                <tr>
                  <td>Director:</td>
                  <td> { movies.director } </td>
                </tr>
                <tr>
                  <td>Producer:</td>
                  <td> { movies.producer } </td>
                </tr>
                <tr>
                  <td>Realese Date:</td>
                  <td> { movies.release_date } </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='card-content '>
            <div className="ellipsis"> { movies.opening_crawl } </div>
            <br />
            <a href='#'>
              <span className='link-more level-right'>See more</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

RelatedMovies.propTypes = {
  movies : PropTypes.object
}

export default RelatedMovies
