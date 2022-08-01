import React from "react"
import style from "../styles/blogpost.module.css"
import { Link } from "gatsby";

const BlogPost = ({title, content, link})=>{
    const description=content.map((line)=>
        <p>{line}</p>
    );
    return(
        <div>
            <Link className={style.title} to={"/blogs/"+link}>{title}</Link>
            {description}
            <hr/>
        </div>
    )
}

export default BlogPost
