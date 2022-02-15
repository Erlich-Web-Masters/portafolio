import React from 'react'
import ContenedorSombra from '../ContenedorSombra';
import RedesSociales from '../RedesSociales';
import './curriculum.css';
import db from '../../data/db.json';

export default function index() {
    return (

        <div className="animate__animated animate__fadeIn">
        <ContenedorSombra >
            <div className='contenedor-curriculum'>
                <div>
                    <img src="../../../img/yo.jpg" alt="Erlich Rodriguez"  className="foto"/>
                   
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
