import React from 'react'

import '../styles/Users.css'
import NewUserForm from '../components/NewUserForm'

class Users extends React.Component {

  state= {
    users: []
  }

  createUser = (username) => {
    this.setState({
      users: [...this.state.users, {username}]
    })
    this.callFetch(username)
  }

  callFetch = (username) => {
    // fetch("http://localhost:3000/api/v1/users",
    fetch("https://eatr-back-end.herokuapp.com/api/v1/users",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({username: username})
      })
      .then(r => r.json())
      .then(user => this.handleFetch(user))
  }

  handleFetch = (user) => {
    this.props.setCurrentUser(user)
  }


  render(){

    return(
      <div>
        <div id='login-register'>
          {/* <b>Login/Register</b> */}
        </div>
          <NewUserForm createUser={this.createUser} currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
      </div>
    )
  }
}

export default Users
