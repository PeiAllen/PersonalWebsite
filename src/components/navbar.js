import React from "react"
import style from "../styles/navbar.module.css"
import { navigate } from "gatsby"
var page=[
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Blog",link:"/blog"},
    {name:"Projects",link:"/projects"}
]
const NavBar = ({location})=>{
    const pages=page.map((curpage)=><button className={curpage.name===location?style.currentbutton:style.button} onClick={()=>navigate(curpage.link)}>{curpage.name}</button>)
    return(
        <div>
            {pages}
        </div>
    )
}

export default NavBar
