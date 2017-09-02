import React from 'react'
import './RelatedMovies.scss'

class RelatedMovies extends React.Component {
  render () {
    return (
      <div className='related-movies'>
        <div className='columns is-mobile'>
            <div className='column'>
              <h1 className='subtitle is-red'>Related Another Movie's</h1>
            </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <table>
              <tbody>
                <tr>
                  <td colSpan='2'><b> The Force Awaknes </b> </td>
                </tr>
                <tr>
                  <td>Director:</td>
                  <td> Irwansyah </td>
                </tr>
                <tr>
                  <td>Producer:</td>
                  <td> Irwansyah, Billi Jhon, Sascia Adya </td>
                </tr>
                <tr>
                  <td>Realese Date:</td>
                  <td> 2015-10-19 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='card-content'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Pariatur, quibusdam non totam earum id veniam nemo quae!
            Provident dignissimos, quos ex quod voluptates labore nostrum eum inventore,
            a dolores blanditiis!
            <br/>
            <span className='link-more level-right'>See more</span>
          </div>
        </div>
      </div>
    )
  }
}

export default RelatedMovies
