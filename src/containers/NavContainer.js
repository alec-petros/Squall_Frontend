import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import { connect } from 'react-redux'
import { logout, setSongs, setSongsStream } from '../actions/actions'
import storm from '../images/storm-inv.png'

class NavBar extends React.Component {
  render() {
    let navItems = null
    this.props.auth ?
    navItems = (
      <Nav pullRight>
        <Navbar.Text className="navStuff" onClick={() => this.props.history.push(`/users/${this.props.auth.user_id}`)}>
          <span className="navStuff">Signed in as: {this.props.auth.username}</span>
        </Navbar.Text>
        <Navbar.Text className="navStuff" onClick={() => this.props.history.push(`/upload`)}>
          <span className="navStuff">Upload</span>
        </Navbar.Text>
        <Navbar.Text className="navStuff" onClick={this.props.logout}>
          <span className="navStuff">Logout</span>
        </Navbar.Text>
      </Nav>
    ) :
    navItems = (
      <Nav pullRight>
        <Navbar.Text className="navStuff" onClick={() => this.props.history.push(`/register`)}>
          <span className="navStuff">Register</span>
        </Navbar.Text>
        <Navbar.Text className="navStuff" onClick={() => this.props.history.push(`/login`)}>
          <span className="navStuff">Login</span>
        </Navbar.Text>
      </Nav>
    )
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <img className="navbarLogo-img" alt="Squall Logo" src={storm} />
            <a id="navbarLogo" onClick={() => {
                this.props.setSongsStream(this.props.auth.user_id)
                this.props.history.push(`/`)
              }}>Squall V0.3</a>
          </Navbar.Brand>
        </Navbar.Header>
        {navItems}
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, { logout, setSongs, setSongsStream })(NavBar)
