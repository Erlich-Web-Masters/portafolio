import React from 'react'
import './servicios.css';



//ICONOS
import wp from '../../icons/wp.svg';
import react from '../../icons/react.svg';
import dev from '../../icons/dev.svg';

//DATOS
import data from '../../data/db.json';

export default function Servicios() {

    return (
        <>
        <h2 className="mis-servicios">Mis Servicios</h2>
        <div className="servicios ">
            <Servicio 
                imagen={wp} 
                nombre={data.db.servicioA} 
                key={data.db.servicioA}
                descripcion={data.db['descripcion-1']} 
                />
            <Servicio 
                imagen={react} 
                nombre={data.db.servicioC} 
                key={data.db.servicioC}
                descripcion={data.db['descripcion-2']}
                />
            <Servicio 
                imagen={dev} 
                nombre={data.db.servicioB} 
                key={data.db.servicioB} 
                descripcion={data.db['descripcion-3']}
                />
        </div> 
        </>   
    )
}


 const Servicio = ({nombre,descripcion,imagen}) => {
    return (
            <section className="servicio" >
                <h3>{nombre}</h3>
                <div className="icono">
                <img src={imagen} alt="iconos" />
                </div>
                <p>{descripcion}</p>
            </section>  
    )
}


Servicio.defaultProps = {
    nombre: "Servicio",
    descripcion : "Descripcion del servicio"
}