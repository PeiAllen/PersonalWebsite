import React from "react"
import Navbar from "../components/navbar"
import BlogPost from "../components/blogpost"
import style from "../styles/blog.module.css"
var blogs=[
    {title:"Hello World",content:["print(\"Hello, World\")"],link:"Hello_World"},
    {title:"Taking Input",content:["given=input(\"What is your name?\")"],link:"Taking_Input"},
    {title:"Input and Output",content:["given=input(\"What is your age?\")","print(\"You are\",given-10,\"years older than me!\")"],link:"Input_and_Output"},
    {title:"Random!",content:["import random","print(\"Here is a random number from 1 to 100:\",random.randint(1,100))"],link:"Random"}
]
export default function Blog() {
    const blogposts=blogs.map((blog)=><BlogPost title={blog.title} content={blog.content} link={blog.link}/>)
  return(
    <div>
      <Navbar location={"Blog"}/>
      <div>
        <h1 className={style.title}>Welcome To My Blog!</h1>
        {blogposts}
      </div>
    </div>
  );
}