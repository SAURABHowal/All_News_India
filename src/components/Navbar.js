import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component{
     constructor(){
      super()
      this.state={
        mode:"grey"
      }}

      darkmode=()=>{
        if(this.state.mode==='grey'){
          this.setState({
            mode:"white"
          })
            document.body.style.backgroundColor="grey"
          }
      
        else{
          this.setState({
            mode:"grey"
          })
            document.body.style.backgroundColor="white"
        }
       
      }
 

  render(){

    return(
      <>
     <nav className="navbar navbar-expand-lg bg-dark" style={{position: "sticky",top: "0px",zIndex:"1"}}>
  <div className="container-fluid" style={{marginTop:"5px"}}>
    <li className="navbar-brand"style={{textDecoration:'none',listStyle:"none",color:"white"}} >ALLNEWS</li>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/health">Health</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/science">Science</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/sports">Sports</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link active" style={{textDecoration:'none',color:"white"}} aria-current="page" to="/technology">Technology</Link>
        </li>
    
    
    
      </ul>
       
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" onClick={this.darkmode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:"white",marginRight:"10px"}}>Dark mode</label>
</div>
  </div>

</nav>

      </>
    )
  }
}