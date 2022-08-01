import React from "react"
import Navbar from "../components/navbar"
import Project from "../components/project"
import style from "../styles/projects.module.css"
var projects=[
    {title:"Hexway",content:["print(\"Hello, World\")"],link:"Hello_World"},
]
export default function Projects() {
    const projectlist=projects.map((cur)=><Project title={cur.title} content={cur.content} link={cur.link}/>)
  return(
    <div>
      <Navbar location={"Projects"}/>
      <div>
        <h1 className={style.title}>Here are my Projects!</h1>
        {projectlist}
      </div>
    </div>
  );
}