import React from 'react';
import { connect } from 'react-redux'
import { addSong } from '../actions/actions'
import { uploadTrack } from '../actions/contentActions'
import loader from '../images/loader.gif'

class Uploader extends React.Component {

  state = {
    filename: "",
    description: "",
    mode: "form"
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({mode: 'submit'})
    const form = document.querySelector('#uploadForm')
    const fileInput = document.querySelector('#fileInput')
    const formData = new FormData(form)
    formData.append('audio_file', fileInput.files[0])
    formData.append('track_id', '1')
    formData.append('name', this.state.filename)
    formData.append('description', this.state.description)
    this.props.uploadTrack(this.props.auth, formData)
    .then(r => this.props.history.push('/'))
  }

  render() {
    return (
      <div className="uploadDiv">
        <form className="uploadDiv-form" id="uploadForm" name="audio_file" onSubmit={this.handleSubmit}>
          <input className="uploadDiv-form-filename" type="text" name="filename" placeholder="Name" value={this.state.filename} onChange={this.handleChange}></input><br></br>
          <textarea className="uploadDiv-form-description" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}></textarea><br></br>
          <input className="uploadDiv-form-fileinput" type="file" id="fileInput"></input><br></br>
          <input className="uploadDiv-form-submit" type="submit"></input><br></br>
          {this.state.mode === "submit" ? <img src={loader} id="loader"></img> : null}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, { addSong, uploadTrack })(Uploader)
