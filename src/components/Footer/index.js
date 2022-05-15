import React from "react";
import Github from "../../assets/images/GitHub-Mark-Light-120px-plus.png";
import LinkedIn from "../../assets/images/LI-In-Bug.png"
import Instagram from '../../assets/images/glyph-logo_May2016.png'

function Footer() {
    return (
        <footer>
            <a href="https://github.com/MrSumada"><img src={Github} alt="Github" target="_blank" width="50px"/></a>
            <a href="https://www.linkedin.com/in/adam-payne-52744315/"><img src={LinkedIn} target="_blank" alt="LinkedIn" width="50px"/></a>
            <a href="https://www.instagram.com/mrsumada/"><img src={Instagram} alt="Instagram" target="_blank" width="50px"/></a>
        </footer>
    )
}


export default Footer;