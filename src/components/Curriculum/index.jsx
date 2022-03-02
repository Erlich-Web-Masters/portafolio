import React from 'react'
import ContenedorSombra from '../ContenedorSombra';
import RedesSociales from '../RedesSociales';
import './curriculum.css';
import db from '../../data/db.json';

import imagen from './img/yo.jpg';
import Img from "react-cool-img";
import loadingImage from "./img/loading.gif";
import errorImage from "./img/error.png";


export default function index() {

    
    return (

        <div className="animate__animated animate__fadeIn">
        <ContenedorSombra >
            <div className='contenedor-curriculum'>
                <div>
                <Img src={imagen} alt="Erlich Rodriguez"  className="foto"  placeholder={loadingImage}  error={errorImage}/>
                   
                </div>
                <div>
                    <p>
                    {db.curriculum.yo}
                    </p>
                    <p className="habilidades">Habilidades</p>
                    <ul>
                    {db.curriculum.habilidades.map( (el) => <li key={el}><strong>{el}</strong></li> )}
                    </ul>
                    
                    <RedesSociales/>
                </div>
            </div>
        </ContenedorSombra>   
        </div>   
        
    )
}
