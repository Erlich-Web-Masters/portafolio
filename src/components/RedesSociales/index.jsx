import React from 'react';
import './redes.css';
//icons
import { FaFacebook, FaGithub, FaInvision } from "react-icons/fa";



export default function index() {

    const urlGithub = "https://github.com/Erlich-Web-Masters?tab=repositories"
    const urlFace = "https://www.facebook.com/erlich.rodriguez.3/"
    const urlLinkedin = "www.linkedin.com/in/erlich-rodriguez-217a32125"

    return (
        <div className="redes">
           <a href={urlFace} className="boton facebook" target="_black"><FaFacebook className="mar_r"/>Facebook</a>
            {/* <a href="#" className="boton twitter">Twitter</a> */}
            <a href={urlGithub} className="boton gighub" target="_black"><FaGithub className="mar_r"/>Gighub</a>
            <a href={urlLinkedin} className="boton linkedin" target="_black"><FaInvision className="mar_r" />Linkedin</a>
        </div>
    )
}



