import React from "react"
import ResumePDF from "../assets/Resume.pdf"
import styles from "../styles/resume.css"
export default function Resume() {
  return(
    <embed src={ResumePDF} id="Resume"/>
  );
}