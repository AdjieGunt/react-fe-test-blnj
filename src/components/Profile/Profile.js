import React from 'react'
// import logo from './assets/image001.png'
import './Profile.scss'
import ProfileDefault from './assets/profile-default.png'

class Profile extends React.Component {
  // static propTypes = {
  //   store: PropTypes.object.isRequired,
  //   routes: PropTypes.object.isRequired,
  // }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div className='profile'>
        <div className='profile-name'>
          <h1 className='title'> Luke Skywalker </h1>
        </div>
        <ProfileDetail />
      </div>
    )
  }
}

class ProfileDetail extends React.Component {
  ProfileMeta = () => {
    return (
      <table className='profile-meta'>
        <tbody>
          <tr>
            <td> Height: </td>
            <td> 175 CM</td>
          </tr>
          <tr>
            <td> Mass: </td>
            <td> Bond</td>
          </tr>
          <tr>
            <td> Hair Color: </td>
            <td> Fair</td>
          </tr>
          <tr>
            <td> Skin Color: </td>
            <td> Blue</td>
          </tr>
          <tr>
            <td> Birth Year: </td>
            <td> 19 June 2010</td>
          </tr>
          <tr>
            <td> Gender: </td>
            <td> Male</td>
          </tr>
        </tbody>
      </table>
    )
  }

  render () {
    return (
      <div className='profile-detail-area'>
        <div className='columns'>
          <div className='column is-one-third'>
            <div className='columns is-mobile'>
              <div className='profile-picture column is-5'>
                <img src={ProfileDefault} alt='profile picture' />
              </div>
              <div className='column is-7'>
                {this.ProfileMeta()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
