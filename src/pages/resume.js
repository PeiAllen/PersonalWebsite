import React from "react"
import ResumePDF from "../assets/Resume.pdf"
import style from "../styles/resume.module.css"
export default function Resume() {
  return(
    <embed src={ResumePDF} className={style.Resume}/>
  );
}