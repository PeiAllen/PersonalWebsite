import React from "react"
import style from "../styles/blogpost.css"

class BlogPost extends React.Component{
    render(){
        console.log(this.props.title);
        console.log(typeof(this.props.content));
        console.log(this.props.content);
        const description=this.props.content.map((line)=>
            <p>{line}</p>
        );
        return(
         <div>
             <a id="title" href={"http://localhost:8000/blogs/"+this.props.link}>{this.props.title}</a>
             {description}
             <hr/>
         </div>
        )
    }
}

export default BlogPost
