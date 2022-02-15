import React from 'react';
import './Formulario.css';
import RedesSociales from '../RedesSociales';

export default function index() {
    return (
        <>
        <section>
          <h2 className="contacto">Contacto</h2>
            <form action="mailto:erlich.habana@gmail.com" className="formulario" >
              <fieldset>
                <legend>Contactame llenando todos los campos</legend>
                  <div className="contenedor-input">
                    <div className="campos">
                        <label>
                        <input className="input-text" type="text" id='nombre' placeholder="Nombre..." />
                        </label>
                    </div>
    
                    <div className="campos">
                        <label>
                        <input className="input-text" type="tel" id='tel' placeholder="Telefono..." />
                        </label>
                    </div>
    
                    <div className="campos">
                        <label>
                        <input className="input-text" type="email" id='email' placeholder="Email..." />
                        </label>
                    </div>
    
                    <div className="campos">
                        <textarea  className="input-text" placeholder="Escriba su mensaje..."></textarea>    
                    </div>
    
                   
                </div>

                <div className="flex alinear-derecha">
                    <input className="boton w-sm-100" type="submit" value="Enviar" />
                    <br/>
                    <small>Al darle click en enviar va abrir su programa cliente de correo y lo va a poder enviar desde allí si no desea contactarme de esta manera pude hacerlo mediante las diferentes redes sociles en especial facebook que es en la que me encuentro más activo</small>
                </div>
            </fieldset>
        </form>
        <RedesSociales/>
    </section>
    </>
    )
}
