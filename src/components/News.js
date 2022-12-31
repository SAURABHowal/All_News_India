import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      page:1,
      pagesize:5,
      totalresult:38,
    
    }
  }

  async componentDidMount() {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.title}&apiKey=51cc9745d42844c19ab98ef5d2dd06cf&page=${this.state.page}&pagesize=${this.state.pagesize}`)
    let alldata = await data.json()
    console.log(alldata)

    this.setState({
      articles: alldata.articles,
  

    })

  }

  Previous = async () => {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.title}&apiKey=51cc9745d42844c19ab98ef5d2dd06cf&page=${this.state.page-1}&pagesize=${this.state.pagesize}`)
    let alldata = await data.json()
    console.log(alldata)

    this.setState({
      articles: alldata.articles,
      page:this.state.page-1
    

    })

  }

  Next = async () => {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.title}&apiKey=51cc9745d42844c19ab98ef5d2dd06cf&page=${this.state.page+1}&pagesize=${this.state.pagesize}`)
    let alldata = await data.json()
    console.log(alldata)

    this.setState({
      articles: alldata.articles,
     page:this.state.page+1

    })

  }
  render() {
    return (
      <>
        <h2 className='text-center my-2' style={{ fontStyle: "italic" }}>All NEWS-TOP  {this.props.title} HEADLINE</h2>
       
        <div className='container my-4'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>

                <Newsitem title={element.title} description={element.description?element.description:"UNKNOWN DATA"} urlToImage={element.urlToImage?element.urlToImage:"https://staticc.sportskeeda.com/editor/2022/12/d3e14-16716948737766-1920.jpg"}
                url={element.url} />

              </div>


            })}
          </div>

          <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.Previous}>Previous</button>
            <button disabled={this.state.page>=Math.ceil(this.state.totalresult/this.state.pagesize)}type="button" className="btn btn-dark" onClick={this.Next}>Next</button>
          </div>

        </div>

      </>



    )
  }
}
