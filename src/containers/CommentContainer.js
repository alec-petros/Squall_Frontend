import React from 'react';
import { connect } from 'react-redux'
import { postComment } from '../actions/contentActions'
import Well from 'react-bootstrap/lib/Well'

class CommentContainer extends React.Component {

  state = {
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.postComment(this.props.song.id, this.state.content, this.props.auth)
    this.setState({content: ""})
  }

  handleDelete = (id) => {

  }

  render() {
    const comments = this.props.song.comments.map(com => <Well className="comments-comment" onClick={() => {this.props.history.push(`/users/${com.user.id}`)}}><span className="comments-comment-user">{com.user.username}</span>: {com.content}</Well>)

    return (
      <div className="comments">
        <form className="comments-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input name="content" value={this.state.content} size="40" />
          <input className="btn btn-app" type="submit" value="Save Comment" />
          <br></br><br></br>
        </form>
        <ul className="comments-list">
          { comments }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { postComment })(CommentContainer)
