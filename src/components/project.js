import React from "react"
import style from "../styles/project.module.css"
import { Link } from "gatsby";

const Project = ({image, title, content, buttons})=>{
    const description=content.map((line)=>
        <p>{line}</p>
    );
    return(
        <div>
            
        </div>
    )
}

export default Project
