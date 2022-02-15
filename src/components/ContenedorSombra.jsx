import React from 'react'


export default function ContenedorSombra({children}) {
    return (
        <main className="contenedor " style={sombra}>
            {children}
        </main>
    )
}

let sombra = {
        "boxShadow": "0px 5px 15px 0px rgba(112, 112, 112, 0.48)",
        "backgroundColor":"var(--blanco)",
        "padding": "2rem",
        "borderRadius":"1rem",
        "marginTop": "2rem"
    };
