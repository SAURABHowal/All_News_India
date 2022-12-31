import React, { Component } from 'react'


export default class Newsitem extends Component {
  render() {
    return (
      <>
      <div className='container my-4'>
      <div className="card">
  <img src={this.props.urlToImage} className="card-img-top" alt="Not Showing"/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}<span className="badge bg-secondary">Latest</span></p>
    <a href={this.props.url} rel="noreferrer" target="_blank" className="btn btn-primary">Read</a>
   
  </div>
</div>
</div>

      
      
      </>
    )
  }
}
