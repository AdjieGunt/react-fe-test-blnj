import React from 'react'
// import logo from './assets/image001.png'
import './Profile.scss'
import ProfileDefault from './assets/profile-default.png'

class Profile extends React.Component {


  shouldComponentUpdate () {
    return true
  }

  render () {
    // console.log(this.state)
    return (
      <div className='profile'>
        <div className='profile-name'>
          <h1 className='title'> {this.props.profiles.name} </h1>
        </div>
        <ProfileDetail profiles={this.props.profiles} />
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
            <td> {this.props.profiles.height } cm</td>
          </tr>
          <tr>
            <td> Mass: </td>
            <td> {this.props.profiles.mass } kg</td>
          </tr>
          <tr>
            <td> Hair Color: </td>
            <td> {this.props.profiles.hair_color } </td>
          </tr>
          <tr>
            <td> Skin Color: </td>
            <td> {this.props.profiles.skin_color } </td>
          </tr>
          <tr>
            <td> Birth Year: </td>
            <td> {this.props.profiles.birth_year }</td>
          </tr>
          <tr>
            <td> Gender: </td>
            <td> {this.props.profiles.gender }</td>
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
