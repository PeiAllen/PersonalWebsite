import React from "react"
import style from "../styles/navbar.css"
import { Redirect, withRouter, Link} from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={tolocation:"NONE"};
    }
    render(){
         if(this.state.tolocation!=="NONE"){
             console.log("TEST")
             window.location.replace(this.state.tolocation);
             return <Redirect to={this.state.tolocation}/>
         }
        return(
            <div>
                <button id="button" onClick={()=>this.setState({tolocation:""})}>Home</button>
                <button id="button" onClick={()=>this.setState({tolocation:"/about"})}>About</button>
                <button id="button" onClick={()=>this.setState({tolocation:"/blog"})}>Blog</button>
                <button id="button" onClick={()=>this.setState({tolocation:"/resume"})}>Resume</button>
            </div>
        )
    }
}

export default withRouter(NavBar)
